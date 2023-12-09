import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () =>{
    logOut()
    .then().catch(err => console.log(err))
  }
  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/portfolio">Our PortFolio</Link>
      </li>
      <li>
        <Link to="/team">Our Team</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
      {user ? (
        <>
          <button onClick={handleLogOut} className="h-10 text-white hover:text-black  bg-pink-500 w-24 text-center hover:bg-transparent rounded-md">
            <Link>Logout</Link>
          </button>
          <p className="mt-2 ms-2 text-lg">{user?.displayName}</p>
        </>
      ) : (
        <>
          <li>
            <button className="h-10 text-white hover:text-black  bg-pink-500 w-24 text-center hover:bg-transparent rounded-md">
              <Link to="/login">Login</Link>
            </button>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-pink-100 fixed z-10">
      <div className="navbar-start mt-10">
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
          <ul
            tabIndex={0}
            className="menu menu-md dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <Link to="/">
          <img src={logo} className="w-20" alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
    </div>
  );
};

export default Navbar;
