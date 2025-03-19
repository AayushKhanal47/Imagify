import React, { useState } from "react";
import { assets } from "../assets/assets";

const Results = () => {
  const [image, setImage] = useState(assets.sample_img_1)
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const [loading, setLoading] = useState(true)
  const [input,setInput] = useState('')
  const onSumbitHandler = async (e)=>{
    
  }
  return (
    <form className="w-full flex flex-col items-center p-4">
      <div className="relative max-w-md w-full mb-8">
        <img
          src={assets.sample_img_1}
          alt="Generated Result"
          className="w-full rounded-2xl shadow-lg"
        />
       <span className={`absolute bottom-0 left-0 h-1 bg-blue-500 ${loading ? 'w-full transition-all duration-[10s]' : 'w-0'}`} />

      </div>

      <p className={`text-2xl font-semibold text-gray-700 mb-8 ${!loading ? 'hidden' : ''}`}>
  Loading...
</p>

    
{!isImageLoaded && 
      <div className="flex w-full max-w-4xl rounded-3xl overflow-hidden shadow-xl">
        <input
        onChange={e=>setInput(e.target.value)} value={input}
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
      </div> }
      
      <div className="flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded full">
        <p onClick={()=>{setIsImageLoaded(false)}}
        className="bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer">
          Generate Another
        </p>
        <a
          href={image}
          download
          className="bg-zinc-900 px-10 py-3 rounded-full cursor-pointer"
        >
          Download
        </a>
      </div> 
    </form>
  );
};

export default Results;
