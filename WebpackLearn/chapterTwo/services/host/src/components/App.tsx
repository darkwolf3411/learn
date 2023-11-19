import { Link, Outlet } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <Link to={"/shop"}>Shop</Link>
      <Link to={"/about"}>About</Link>
      <Outlet />
    </div>
  );
};
