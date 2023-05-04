import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import AboutUS from "./components/AboutUS/AboutUS";
import Contact from "./components/Contact/Contact";
import Menu from "./components/Menu/Menu";
import Pizza from "./components/Menu/MenuComponents/Pizza/Pizza";
import Combo from "./components/Menu/MenuComponents/Combo/Combo";
import Snacks from "./components/Menu/MenuComponents/Snacks/Snacks";
import Desserts from "./components/Menu/MenuComponents/Desserts/Desserts";
import Drinks from "./components/Menu/MenuComponents/Drinks/Drinks";
import OtherProducts from "./components/Menu/MenuComponents/OtherProducts/OtherProducts";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="pizza" element={<Pizza />} />
        <Route path="combo" element={<Combo />} />
        <Route path="snacks" element={<Snacks />} />
        <Route path="desserts" element={<Desserts />} />
        <Route path="drinks" element={<Drinks />} />
        <Route path="other" element={<OtherProducts />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUS />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
