import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext";


const Results = () => {
  const [image, setImage] = useState(assets.sample_img_1);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState("");
  const { generateImage } = useContext(AppContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (input) {
      const image = await generateImage(input);
      if (image) {
        setIsImageLoaded(true);
        setImage(image);
      }
    }
    setLoading(false);
  };

  return (
    <motion.form
      className="w-full flex flex-col items-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      onSubmit={onSubmitHandler}
    >
      <motion.div
        className="relative max-w-md w-full mb-8"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={image}
          alt="Generated Result"
          className="w-full rounded-3xl shadow-2xl border border-gray-200"
        />
        {/* Loading bar */}
        <span
          className={`absolute bottom-0 left-0 h-1 bg-blue-500 ${
            loading ? "w-full transition-all duration-[3s]" : "w-0"
          }`}
        />
      </motion.div>

      {loading && (
        <motion.p
          className="text-2xl font-semibold text-gray-700 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Loading...
        </motion.p>
      )}

      {!isImageLoaded && (
        <motion.div
          className="flex w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Describe what you want to generate"
            className="text-lg w-full bg-gradient-to-r from-neutral-700 via-neutral-600 to-neutral-700 text-white p-4 outline-none placeholder-gray-300"
          />
          <button
            type="submit"
            className="bg-zinc-900 px-10 py-4 text-white text-lg font-medium hover:bg-zinc-800 transition duration-300"
          >
            Generate
          </button>
        </motion.div>
      )}

      <motion.div
        className="flex gap-4 flex-wrap justify-center text-white text-sm p-4 mt-10 rounded-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <motion.p
          onClick={() => {
            setIsImageLoaded(false);
            setLoading(false);
          }}
          className="bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer hover:bg-zinc-900 hover:text-white transition duration-300"
          whileTap={{ scale: 0.95 }}
        >
          Generate Another
        </motion.p>
        <a
          href={image}
          download
          className="bg-zinc-900 px-10 py-3 rounded-full cursor-pointer hover:bg-zinc-800 transition duration-300"
        >
          Download
        </a>
      </motion.div>
    </motion.form>
  );
};

export default Results;
