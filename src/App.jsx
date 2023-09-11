import { useState, useEffect } from "react";

import "./App.css";

import Home from "./Pages/Home";

import Nav from "./Component/Nav";
import Footer from "./Component/Footer";

import { baseUrl, fetchApi } from "../utilities/fetchApi";
import LoadingSkleton from "./Component/LoadingSkleton";
import { GlobalContext } from "./Context/GlobalContext";
import { Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <>
      {/* nav component starts  */}
      <div className="navComponent ">
        <Nav />
      </div>

      {/* <Home /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/footer" element={<Footer />} /> */}
      </Routes>

      <div className="footerComponent">
        <Footer />
      </div>
    </>
  );
}

export default App;
