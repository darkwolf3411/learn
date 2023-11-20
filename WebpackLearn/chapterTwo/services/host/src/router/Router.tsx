import { App } from "@/components/App";
import { createHashRouter } from "react-router-dom";
// @ts-ignore
import shopRoutes from 'shop/Router';
// @ts-ignore
import adminRoutes from 'admin/Router';

export const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      ...shopRoutes,
      ...adminRoutes,
    ],
  },
]);
