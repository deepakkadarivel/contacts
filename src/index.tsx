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
import { contactNewAction } from "./pages/contacts/components/actions";

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
        action: contactNewAction,
        children: [
          {
            path: "/contacts/:contactId",
            element: <Contact />,
            loader: contactLoader,
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
