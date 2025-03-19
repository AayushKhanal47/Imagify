import React, { useEffect, useState, useContext } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";

const Login = () => {
  const [state, setState] = useState("Login");
  const { setShowLogin } = useContext(AppContext);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/40 flex justify-center items-center">
      <motion.form
        className="relative bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md text-slate-600 space-y-6"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.7, opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-center text-3xl text-neutral-800 font-semibold">
          {state}
        </h1>
        <p className="text-center text-sm text-gray-500">
          Welcome back! Please sign in to continue
        </p>

        {state !== "Login" && (
          <div className="border px-5 py-3 flex items-center gap-3 rounded-xl hover:border-blue-500 transition">
            <img src={assets.user_icon} alt="user icon" className="w-5" />
            <input
              type="text"
              className="outline-none text-sm w-full"
              placeholder="Full Name"
              required
            />
          </div>
        )}

        <div className="border px-5 py-3 flex items-center gap-3 rounded-xl hover:border-blue-500 transition">
          <img src={assets.email_icon} alt="email icon" className="w-5" />
          <input
            type="email"
            className="outline-none text-sm w-full"
            placeholder="Email Address"
            required
          />
        </div>

        <div className="border px-5 py-3 flex items-center gap-3 rounded-xl hover:border-blue-500 transition">
          <img src={assets.lock_icon} alt="lock icon" className="w-5" />
          <input
            type="password"
            className="outline-none text-sm w-full"
            placeholder="Password"
            required
          />
        </div>

        <p className="text-sm text-blue-600 text-right cursor-pointer hover:underline">
          Forgot Password?
        </p>

        <motion.button
          className="bg-blue-600 w-full text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition"
          whileTap={{ scale: 0.95 }}
        >
          {state === "Login" ? "Login" : "Create Account"}
        </motion.button>

        {state === "Login" ? (
          <p className="text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer hover:underline"
              onClick={() => setState("Sign Up")}
            >
              Sign up
            </span>
          </p>
        ) : (
          <p className="text-center text-sm text-gray-500">
            Already have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer hover:underline"
              onClick={() => setState("Login")}
            >
              Login
            </span>
          </p>
        )}

        <motion.img
          onClick={() => setShowLogin(false)}
          src={assets.cross_icon}
          alt="close icon"
          className="absolute top-5 right-5 w-5 h-5 cursor-pointer hover:scale-110 transition"
          whileHover={{ rotate: 90 }}
        />
      </motion.form>
    </div>
  );
};

export default Login;
