import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/app-layout";
import Contacts from "./pages/contacts/page";
import { ThemeProvider } from "./components/theme-provider";
import Navigation from "./pages/navigation/page";
import ErrorPage from "./pages/error-page";
import HomePage from "./pages/home/page";
import Contact from "./pages/contacts/contact/page";
import { contactLoader, contactsLoader } from "./pages/contacts/loader";
import {
  contactUpdateAction,
  contactCreateAction,
  contactDeleteAction,
} from "./pages/contacts/components/actions";
import ContactEditForm from "./pages/contacts/components/ContactEditForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
        loader: contactsLoader,
        children: [
          {
            path: "/contacts/:contactId",
            element: <Contact />,
            loader: contactLoader,
          },
          {
            path: "/contacts/new",
            element: <ContactEditForm />,
            action: contactCreateAction,
          },
          {
            path: "/contacts/:contactId/edit",
            element: <ContactEditForm />,
            loader: contactLoader,
            action: contactUpdateAction,
          },
          {
            path: "/contacts/:contactId/destroy",
            action: contactDeleteAction,
          },
        ],
      },
      {
        path: "/navigation",
        element: <Navigation />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
