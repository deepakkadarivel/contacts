import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/app-layout";
import Contacts from "./routes/contacts/page";
import { ThemeProvider } from "./components/theme-provider";
import Navigation from "./routes/navigation/page";
import ErrorPage from "./routes/error-page";
import HomePage from "./routes/home/page";

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
