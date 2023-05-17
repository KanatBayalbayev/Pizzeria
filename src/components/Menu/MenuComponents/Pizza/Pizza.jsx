import React from "react";
import "./Pizza.scss";
import foodItems from "../../../../assets/menuItems/menuItems";
import { useDispatch } from "react-redux";
import modalActions from "../../../stateStore/itemModal";

let pizzaItems = "";
for (let foodItem in foodItems) {
  if (foodItem === "pizza") {
    pizzaItems = foodItems[foodItem];
  }
}

const Pizza = () => {
  const dispatch = useDispatch();
  const showModalHandler = (
    idItem,
    pizzaItems,
    nameItem,
    descriptionItem,
    priceItem
  ) => {
    dispatch(modalActions.actions.showModal());
    dispatch(
      modalActions.actions.addItemToModal({
        id: idItem,
        pizzas: pizzaItems,
        name: nameItem,
        description: descriptionItem,
        price: priceItem,
      })
    );
  };

  return (
    <div className="pizza-container">
      {pizzaItems.map((pizza) => (
        <div className="item-card" key={pizza.id}>
          <img src={pizza.pizzas.medium.img} alt="img" />
          <h4>{pizza.name}</h4>
          <p>{pizza.description}</p>
          <div>
            <p>от {pizza.pizzas.medium.price} тг.</p>
            <button
              onClick={() =>
                showModalHandler(
                  pizza.id,
                  pizza.pizzas,
                  pizza.name,
                  pizza.description,
                  pizza.price
                )
              }
            >
              Собрать
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Pizza;
