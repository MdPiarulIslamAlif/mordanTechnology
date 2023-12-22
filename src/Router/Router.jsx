import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home/Home";
import SignUp from "../Page/SignUp/SignUp";
import Register from "../Page/Register/Register";
import Main from "../Layout/Main";
import AllProduct from "../Page/AllProduct/AllProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <SignUp />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/allProduct",
        element: <AllProduct />,
        loader:() => fetch("./product.json")
      },
    ],
  },
]);

export default router;
