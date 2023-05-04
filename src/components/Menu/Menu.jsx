import React from "react";
import Pizza from "./MenuComponents/Pizza/Pizza";
import Combo from "./MenuComponents/Combo/Combo";
import Snacks from "./MenuComponents/Snacks/Snacks";
import Desserts from "./MenuComponents/Desserts/Desserts";
import Drinks from "./MenuComponents/Drinks/Drinks";
import OtherProducts from "./MenuComponents/OtherProducts/OtherProducts";

const Menu = () => {
  return (
    <>
      <Pizza />
      <Combo />
      <Snacks />
      <Desserts />
      <Drinks />
      <OtherProducts />
    </>
  );
};

export default Menu;
