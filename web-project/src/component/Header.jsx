import { Route, Routes, Link, Outlet } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="bg-gray-900 flex justify-between items-center w-full p-5 text-white font-bold">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div className="text-white flex gap-8 justify-center items-center">
          <Link to="/residencies">Residencies</Link>
          <Link to="/ourvalue">Our Value</Link>
          <Link to="/contactus">Contact Us</Link>
          <Link className="bg-sky-600 p-2 rounded-md hover:bg-sky-400" to="/getstarted">Get Started</Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Header;
