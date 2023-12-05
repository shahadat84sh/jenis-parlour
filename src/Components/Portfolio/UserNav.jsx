import React from "react";
import { FaBookMedical, FaCartPlus, FaHamburger } from "react-icons/fa";
import { Link } from "react-router-dom";

const UserNav = () => {
  return (
    <div className="drawer h-full lg:drawer-open bg-[#F4F7FC]">
      <ul className="menu p-4 w-80 min-h-full bg-white pt-24">
        {/* Sidebar content here */}
        <li>
          <Link to="/portfolio/order">
            <FaCartPlus /> Book
          </Link>
        </li>
        <li>
          <Link to="/portfolio/booking">
            <FaHamburger />
            Booking List
          </Link>
        </li>
        <li>
          <Link to="/portfolio/c-review">
            <FaBookMedical /> Review
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default UserNav;
