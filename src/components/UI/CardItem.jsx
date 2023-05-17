import React from "react";
import "./CardItem.scss";

const CardItem = () => {
  return (
    <div className="item-card">
      <img src="" alt="" />
      <h4>Пицца из половинок</h4>
      <p>Соберите свою пиццу 35 см с двумя разными вкусами</p>
      <div>
        <p>от 3 600 тг.</p>
        <button>Собрать</button>
      </div>
    </div>
  );
};

export default CardItem;
