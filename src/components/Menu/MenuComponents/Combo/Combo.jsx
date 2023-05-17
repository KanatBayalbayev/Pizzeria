import React from "react";
import "./Combo.scss";
import foodItems from "../../../../assets/menuItems/menuItems";

const Combo = () => {
  let comboItems = "";
  for (let foodItem in foodItems) {
    if (foodItem === "combo") {
      comboItems = foodItems[foodItem];
    }
  }

  return (
    <>
      <div className="combo-container">
        {comboItems.map((combo) => (
          <div className="item-card" key={combo.id}>
            <img src={combo.img} alt="" />
            <h4>{combo.title}</h4>
            <p>{combo.description}</p>
            <div>
              <p>от {combo.price} тг.</p>
              <button>Собрать</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Combo;
