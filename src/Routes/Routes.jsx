import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Signup/SignUp";
import UserPort from "../Components/Portfolio/UserPort";
import CBooking from "../Components/Portfolio/CustomerBooking/CBooking";
import CReview from "../Components/Portfolio/CustomerReview/C-Review";
import Order from "../Components/Portfolio/Order/Order";
import OrderList from "../Components/AdminPortfolio/OrderList";
import Addservice from "../Components/AdminPortfolio/Addservice";
import MakeAdmin from "../Components/AdminPortfolio/MakeAdmin";
import ManageService from "../Components/AdminPortfolio/ManageService";
import NotFound from "./NotFound";
import PrivateRoute from "./PrivateRoute";

  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        }
      ]
    },
    // portfolio ralated
    {
      path:'/portfolio',
      element:<PrivateRoute><UserPort></UserPort></PrivateRoute>,
      children:[
        {
          path:'/portfolio/booking',
          element:<CBooking></CBooking>
        },
        {
          path:'/portfolio/c-review',
          element:<CReview></CReview>
        },
        {
          path:'/portfolio/order',
          element:<Order></Order>
        },
        {
          path:'/portfolio/orderlist',
          element:<OrderList></OrderList>
        },
        {
          path:'/portfolio/addservice',
          element:<Addservice></Addservice>
        },
        {
          path:'/portfolio/makeadmin',
          element:<MakeAdmin></MakeAdmin>
        },
        {
          path:'/portfolio/manageservice',
          element:<ManageService></ManageService>
        }
      ]
    },
    {
      path:'*',
      element:<NotFound></NotFound>
    }
  ]);