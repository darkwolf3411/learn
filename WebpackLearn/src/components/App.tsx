import { Link, Outlet } from "react-router-dom";
import CalendarPng from "@/assets/calendar.png";
import CalendarSvg from "@/assets/calendarSvg.svg";

export const App = () => {
  if(__PLATFORM__ === 'desctop'){
    console.log('THISISDESCTOP');
  }
  return (
    <div>
      <Link to={"/shop"}>Shop</Link>
      <Link to={"/about"}>About</Link>
      <div>
        <img src={CalendarPng} alt="calendar" />
      </div>
      <div>
        <CalendarSvg
          width={50}
          height={50}
          style={{ color: "red" }}
        />
      </div>
      <Outlet />
    </div>
  );
};
