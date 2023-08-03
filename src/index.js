import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import SingleMovie from "./SingleMovie";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/singleMovie/:id",
    element: <SingleMovie />
  }
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
