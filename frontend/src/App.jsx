import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Results from "./pages/Results";
import BuyCredits from "./pages/BuyCredits";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/result' element={<Results />}/>
        <Route path='/buy' element={<BuyCredits />}/>
      </Routes>
    </div>
  );
};

export default App;
