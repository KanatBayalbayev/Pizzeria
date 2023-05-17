import React from "react";
import "./Modal.scss";
import Backdrop from "./Backdrop";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../stateStore/itemModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Modal = () => {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.itemModal.item);
  const pizzaSizeImg = useSelector((state) => state.itemModal.pizzaSizeImg);
  const type = useSelector((state) => state.itemModal.type);
  const toggleModal = () => {
    dispatch(modalActions.hideModal());
  };
  const buttonsSizes = [
    { id: 1, size: "small", name: "Маленькая" },
    { id: 2, size: "medium", name: "Средняя" },
    { id: 3, size: "large", name: "Большая" },
  ];
  const buttonTypes = ["Традиционное", "Тонкое"];
  const sizeHandler = (size) => {
    dispatch(modalActions.changeSizeImgPizza(size));
  };
  const typeHandler = (type) => {
    dispatch(modalActions.changeTypePizza(type));
  };
  const priceWithTypeThin = type === "Тонкое" && 1250;
  return (
    <>
      <Backdrop />
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={toggleModal}>
            <FontAwesomeIcon icon={faXmark} />
          </span>
          <img src={item.pizzas[pizzaSizeImg].img} alt="img" />
          <div className="details-container">
            <h3 className="name">{item.name}</h3>

            <div className="buttons">
              <div className="sizes">
                {buttonsSizes.map((buttonSize) => (
                  <button
                    key={buttonSize.id}
                    onClick={() => sizeHandler(buttonSize.size)}
                  >
                    {buttonSize.name}
                  </button>
                ))}
              </div>
              <div className="types">
                {buttonTypes.map((buttonType) => (
                  <button
                    key={buttonType}
                    onClick={() => typeHandler(buttonType)}
                  >
                    {buttonType}
                  </button>
                ))}
              </div>
              <span className="totalPrice">
                Добавить в корзину за{" "}
                {item.pizzas[pizzaSizeImg].price + priceWithTypeThin}тг.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
