import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const NavBar = () => {
  const { user, setShowLogin, Logout, Credit } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between py-4">
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="w-28 sm:w-32 lg:w-40" />
      </Link>

      <div>
        {user ? (
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => navigate("/buy")}
              className="flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700"
            >
              <img className="w-5" src={assets.credit_star} alt="Credit Star" />
              <p className="text-xs sm:text-sm font-medium text-gray-600">
                Credits left: 50
              </p>
            </button>

            <p className="text-gray-600 max-sm:hidden pl-4">Hi, Aayush</p>

            <div className="relative group">
              <img
                className="w-10 drop-shadow"
                src={assets.profile_icon}
                alt="Profile Icon"
              />
              <div className="absolute hidden group-hover:block top-full right-0 bg-white rounded-md shadow-md pt-2">
                <ul className="list-none m-0 p-2 border text-sm">
                  <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                    Logout
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-5">
            <p
              onClick={() => navigate("/buy")}
              className="cursor-pointer text-gray-700 font-medium"
            >
              Pricing
            </p>
            <button
              onClick={() => setShowLogin(true)}
              className="bg-zinc-800 text-white px-7 py-2 sm:px-10 text-sm rounded-full hover:bg-zinc-700 transition cursor-pointer"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
