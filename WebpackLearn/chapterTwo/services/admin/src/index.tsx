import { createRoot } from "react-dom/client";
import { App } from "./components/App";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { About } from "./Pages/About";
import { Suspense } from "react";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root not found");
}

const container = createRoot(root);

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: (
          <Suspense fallback={"loading..."}>
            <About />
          </Suspense>
        ),
      },
    ],
  },
]);

container.render(<RouterProvider router={router} />);
