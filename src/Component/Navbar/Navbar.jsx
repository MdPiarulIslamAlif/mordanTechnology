import React from "react";

const Navbar = () => {

  const navlink = (
    <>
      <li> <navlink to="/" >Home</navlink></li>
      <li> <navlink to="allProduct" >All Product</navlink></li>
      <li> <navlink to="about" >About Us</navlink></li>
    </>
  );


  return (
    <div className="max-w-screen-2xl mx-auto  ">
      <div className="navbar bg-base-100 relative ">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navlink}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Mdern Technology</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlink}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
