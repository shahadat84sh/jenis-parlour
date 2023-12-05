import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { Outlet } from "react-router-dom";
import UserNav from "./UserNav";
import { AuthContext } from "../../Provider/AuthProvider";
import AdminNav from "./AdminNav";

const UserPort = () => {
  const [name, setName] = useState("");
  const { user } = useContext(AuthContext);
  const isAdmin = true;
  useEffect(() => {
    const updateName = () => {
      const pathname = window.location.pathname;
      const pathSegments = pathname.split("/");
      const extractedName = pathSegments[pathSegments.length - 1];
      setName(extractedName);
    };

    // Call the function to set the initial name
    updateName();

    // Add an event listener for changes in the pathname
    const handlePathnameChange = () => {
      updateName();
    };

    window.addEventListener("popstate", handlePathnameChange);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("popstate", handlePathnameChange);
    };
  }, []);
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex">
          <div className="flex-1">
            <figure>
              <img src={logo} className="w-32 ps-5 pt-5" alt="" />
            </figure>
          </div>
          <p className="text-3xl text-bold ps-16 capitalize">{name}</p>
        </div>
        <div className="flex-none">{user?.username}</div>
      </div>

      <div className="drawer lg:drawer-open bg-[#F4F7FC]">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>{
            isAdmin?<AdminNav></AdminNav>:<UserNav></UserNav>
          }
          
        </div>
      </div>
    </>
  );
};

export default UserPort;
