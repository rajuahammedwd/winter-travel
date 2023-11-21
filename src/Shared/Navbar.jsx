import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaAlignJustify,
} from "react-icons/fa";


const Navbar = () => {
  const navItem = (
    <>
      <li>
        <Link className="hover:text-[#5ca13e] hover:bg-white">Home</Link>
      </li>
      <li>
        <Link to={"/destination"} className="hover:text-[#5ca13e] hover:bg-white">Destination</Link>
      </li>
      <li>
        <Link className="hover:text-[#5ca13e] hover:bg-white">Pages</Link>
      </li>
      <li>
        <Link to={"/about"} className="hover:text-[#5ca13e] hover:bg-white">About</Link>
      </li>
      <li>
        <Link to={"/contact"} className="hover:text-[#5ca13e] hover:bg-white">Contact Us</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 lg:px-20">
      <div className="navbar-start">
        {/* Dropdown menu */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navItem}
          </ul>
        </div>
        <div>
          <Link to={"/"} className="flex items-center justify-center">
            <img
              className="w-16 h-16 mr-2"
              src="https://i.ibb.co/8dF3thF/logo.png"
              alt="logo"
            />
            <span className="sm:text-xl lg:text-3xl font-bold uppercase">
              Winter Travel
            </span>
          </Link>
        </div>
      </div>
      {/* Nav Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-poppins font-bold">
          {navItem}
        </ul>
      </div>
      {/* Navbar End */}
      <div className="navbar-end">
        <ul className="flex gap-6">
          <li>
            <a
              href="https://www.facebook.com/rajuahammedwd/"
              rel="noreferrer"
              target="_blank"
            >
              <FaFacebook className="text-xl hover:text-[#3E54AB]" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/rajuahammedwd/"
              rel="noreferrer"
              target="_blank"
            >
              <FaLinkedin className="text-xl hover:text-[#4675db]" />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/youtube420r"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube className="text-xl hover:text-[#FE2E3C]" />
            </a>
          </li>
          <li>
            <FaAlignJustify className="text-xl hover:text-[#5ca13e]" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
