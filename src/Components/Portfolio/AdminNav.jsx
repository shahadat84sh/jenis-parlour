import React from "react";
import { Link } from "react-router-dom";
import { CiViewList } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { TbGridDots } from "react-icons/tb";
import { FaPersonCirclePlus } from "react-icons/fa6";


const AdminNav = () => {
  return (
    <div className="drawer h-full lg:drawer-open bg-[#F4F7FC]">
      <ul className="menu p-4 w-80 min-h-full bg-white pt-24">
        {/* Sidebar content here */}
        <li>
          <Link to="/portfolio/orderlist">
            <CiViewList/> Order List
          </Link>
        </li>
        <li>
          <Link to="/portfolio/addservice">
            <FaPlus/> Add Service
          </Link>
        </li>
        <li>
          <Link to="/portfolio/makeadmin">
            <FaPersonCirclePlus/> Make Admin
          </Link>
        </li>
        <li>
          <Link to="/portfolio/manageservice">
            <TbGridDots/> Manage Service
          </Link>
        </li>

      </ul>
    </div>
  );
};

export default AdminNav;
