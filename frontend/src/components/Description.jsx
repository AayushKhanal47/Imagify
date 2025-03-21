import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const Description = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center my-24 p-6 md:px-28"
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
        Create AI Images
      </motion.h1>

      <motion.p
        className="text-gray-500 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Turn your imagination into visuals
      </motion.p>

      <div className="flex flex-col gap-5 md:gap-14 md:flex-row items-center">
        <motion.img
          className="w-80 xl:w-96 rounded-lg"
          src={assets.sample_img_1}
          alt=""
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-medium max-w-lg mb-4">
            Introducing the AI-Powered Text to Image Generator
          </h2>
          <p className="text-gray-600 mb-4">
            Our AI-powered Text-to-Image Generator transforms your words into
            stunning visuals with just a few clicks. Simply enter a description,
            and our advanced model creates high-quality, realistic, or artistic
            images based on your input. Whether you need illustrations, concept
            art, or creative designs, our platform makes it easy and fun.
            Perfect for designers, content creators, and anyone with a vivid
            imagination. Start generating unique images instantly! 🚀🎨
          </p>
          <p className="text-gray-600 mb-4">
            Type Your Imagination, See It Come to Life! ✨🎨 Enter a prompt,
            describe your vision, and let our AI do the magic! Whether it’s a
            dreamy landscape, futuristic city, or fantasy character, our
            powerful text-to-image generator will bring your ideas to reality in
            seconds. Unleash your creativity and start generating now! 🚀
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Description;

