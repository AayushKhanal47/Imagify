import React from "react";
import { testimonialsData } from "./../assets/assets";
import { assets } from "./../assets/assets";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center my-20 py-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <motion.h1
        className="text-3xl sm:text-4xl font-semibold mb-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Customer testimonials
      </motion.h1>

      <motion.p
        className="text-gray-500 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        What Our Users Are Saying
      </motion.p>

      <div className="flex flex-wrap gap-6 justify-center">
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-white/20 p-12 rounded-lg shadow-lg w-80 m-auto cursor-pointer hover:scale-[1.06] transition-all"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={testimonial.image}
              alt=""
              className="rounded-full w-14"
            />
            <h2 className="text-xl font-semibold mt-3">{testimonial.name}</h2>
            <p className="text-gray-500 mb-4">{testimonial.role}</p>
            <div className="flex mb-4">
              {Array(testimonial.stars)
                .fill()
                .map((_, index) => (
                  <img key={index} src={assets.rating_star} alt="" />
                ))}
            </div>
            <p className="text-center text-sm text-gray-600">
              {testimonial.text}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;
