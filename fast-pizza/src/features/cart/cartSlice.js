import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [
    // {
    //   pizzaId: 1,
    //   name: "Pizza",
    //   quantity: 2,
    //   unitPrice: 12,
    //   totalPrice: 24,
    // },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.carts.push(action.payload);
    },
    deleteItem(state, action) {
      state.carts = state.carts.filter(
        (item) => item.pizzaId !== action.payload,
      );
    },
    increaseItem(state, action) {
      const cart = state.carts.find((item) => item.pizzaId === action.payload);
      cart.quantity++;
      cart.totalPrice = cart.quantity * cart.unitPrice;
    },
    decreaseItem(state, action) {
      const cart = state.carts.find((item) => item.pizzaId === action.payload);
      cart.quantity--;
      cart.totalPrice = cart.quantity * cart.unitPrice;
      if (cart.quantity === 0) {
        cartSlice.caseReducers.deleteItem(state, action);
      }
    },
    clearCart(state, action) {
      state.carts = [];
    },
  },
});

export const { addItem, deleteItem, increaseItem, decreaseItem, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;

export const getTotalQuantity = (store) =>
  store.cart.carts.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalPrice = (store) =>
  store.cart.carts.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCurrentId = (id) => (store) =>
  store.cart.carts.find((item) => item.pizzaId === id)?.quantity ?? 0;
