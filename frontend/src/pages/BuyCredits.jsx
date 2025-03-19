import React, { useContext } from "react";
import { assets, plans } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";

const BuyCredits = () => {
  const { user } = useContext(AppContext);

  return (
    <motion.div
      className="min-h-[80vh] text-center pt-14 mb-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.button
        className="border border-gray-400 px-10 py-2 rounded-full mb-6 hover:bg-gray-800 hover:text-white transition-all"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Our Plans
      </motion.button>

      <motion.h1
        className="text-center text-3xl font-medium mb-6 sm:mb-10"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Choose the plan
      </motion.h1>

      <div className="flex flex-wrap justify-center gap-8 text-left">
        {plans.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-xl py-12 px-8 text-gray-600 hover:scale-105 transition-all duration-500 w-72 cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img width={40} src={assets.logo_icon} alt="plan logo" />
            <p className="mt-4 mb-2 font-semibold text-lg"> {item.id}</p>
            <p className="text-sm text-gray-500">{item.desc}</p>

            <p className="mt-6 text-gray-800">
              <span className="text-3xl font-medium">${item.price}</span>
              <span className="text-gray-500"> / {item.credits} credits</span>
            </p>

            <motion.button
              className="w-full bg-gray-800 text-white mt-8 text-sm rounded-full py-3 hover:bg-black transition duration-300"
              whileTap={{ scale: 0.95 }}
            >
              {user ? "Purchase" : "Get Started"}
            </motion.button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default BuyCredits;
