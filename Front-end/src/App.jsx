import React from "react";
import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About"; // Corrected the import name
import Contact from "./pages/Contact"; // Corrected the import name
import Product from "./pages/Product"; // Assuming you have this file
import Cart from "./pages/Cart"; // Assuming you have this file
import Login from "./pages/Login"; // Assuming you have this file
import Placeorder from "./pages/Placeorder"; // Assuming you have this file
import Orders from "./pages/Orders"; // Assuming you have this file
import Navbar from "./components/Navbar";

const App = () => {
  return (

    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Navbar />
   <Routes>
    <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:ProductId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/place-order" element={<Placeorder />} />
        <Route path="/orders" element={<Orders />} />
   </Routes>

    </div>
  );
};

export default App;
