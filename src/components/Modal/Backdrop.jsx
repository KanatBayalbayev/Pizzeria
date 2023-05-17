import React from "react";
import "./Backdrop.scss";
import { useDispatch } from "react-redux";
import { modalActions } from "../stateStore/itemModal";

const Backdrop = () => {
  const dispatch = useDispatch();
  const toggleModal = () => {
    dispatch(modalActions.hideModal());
  };
  return <div className="backdrop" onClick={toggleModal}></div>;
};

export default Backdrop;
