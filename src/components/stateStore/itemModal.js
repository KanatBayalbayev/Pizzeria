import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialState = {
  isOpenModal: false,
  item: {},
  pizzaSizeImg: "medium",
  type: "standard",
};

const modal = createSlice({
  name: "itemModal",
  initialState,
  reducers: {
    showModal(state) {
      state.isOpenModal = true;
    },
    hideModal(state) {
      state.isOpenModal = false;
      if (!state.isOpenModal) {
        state.pizzaSizeImg = "medium";
      }
    },
    addItemToModal(state, action) {
      state.item = action.payload;
    },
    changeSizeImgPizza(state, action) {
      state.pizzaSizeImg = action.payload;
    },
    changeTypePizza(state, action) {
      state.type = action.payload;
    },
  },
});

export const modalActions = modal.actions;
export default modal;
