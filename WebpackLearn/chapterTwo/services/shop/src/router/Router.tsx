import { createHashRouter } from "react-router-dom";
import { App } from "../components/App";
import { Shop } from "../Pages/Shop";
import { Suspense } from "react";

const routes = [
  {
    path: "/shop",
    element: <App />,
    children: [
      {
        path: "/shop/main",
        element: (
          <Suspense fallback={"loading..."}>
            <Shop />
          </Suspense>
        ),
      },
      {
        path: "/shop/second",
        element: (
          <Suspense fallback={"loading..."}>
            <div style={{ color: "red" }}>second page</div>
          </Suspense>
        ),
      },
    ],
  },
];

export const router = createHashRouter(routes);

export default routes;
