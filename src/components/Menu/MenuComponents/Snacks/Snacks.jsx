import React from "react";
import "./Snack.scss";
import foodItems from "../../../../assets/menuItems/menuItems";

const Snacks = () => {
  let snacksItems = "";
  for (let foodItem in foodItems) {
    if (foodItem === "snacks") {
      snacksItems = foodItems[foodItem];
    }
  }
  return (
    <div className="snack-container">
      {snacksItems.map((snacks) => (
        <div className="item-card" key={snacks.id}>
          <img src={snacks.img} alt="" />
          <h4>{snacks.title}</h4>
          <p>{snacks.description}</p>
          <div>
            <p>от {snacks.price} тг.</p>
            <button>Собрать</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Snacks;
