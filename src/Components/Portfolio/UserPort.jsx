import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { Link, Outlet } from "react-router-dom";
import UserNav from "./UserNav";
import { AuthContext } from "../../Provider/AuthProvider";
import AdminNav from "./AdminNav";
import { Helmet } from "react-helmet";

const UserPort = () => {
  const [name, setName] = useState("");
  const { user } = useContext(AuthContext);
  const isAdmin = false;
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
    <Helmet>
      <title>Jerin's Parlour || Portfolio</title>
    </Helmet>
      <div className="navbar bg-base-100">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex-1">
            <figure>
              <Link to="/"><img src={logo} className="w-32 ps-5 pt-5" alt="" /></Link>
            </figure>
          </div>
          <p className="text-3xl text-bold capitalize">{name}</p>
          <p className="md:ms-32 lg:ms-64">{user?.displayName}</p>
        </div>
        
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
