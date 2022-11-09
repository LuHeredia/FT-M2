import React from "react";
/* eslint-disable */
import Home from "./components/Home/Home.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Shipping from "./components/Shipping/Shipping.jsx";
import Promotions from "./components/Promotions/Promotions.jsx";
import CardDetail from "./components/CardDetail/CardDetail.jsx";
/* eslint-disable */
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/promotions" element={<Promotions />} />
        <Route path="/cruises/:id" element={<CardDetail />} />
      
      </Routes>
    </div>
  );
}
