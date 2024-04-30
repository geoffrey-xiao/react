import { applyMiddleware, combineReducers, createStore } from "redux";
// import { accountReducer } from "./features/accounts/accountSlice-v1";
import { customerReducer } from "./features/customers/customerSlice";
import accountReducer from "./features/accounts/accountSlice";
// import { thunk } from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";
// const initialState = {
//   balance: 0,
//   loan: 0,
//   loanPurpose: "",
// };

// const initialCustomer = {
//   fullName: "",
//   createdAt: "",
//   nationalId: "",
// };

// function accountReducer(state = initialState, action) {
//   switch (action.type) {
//     case "account/deposit":
//       return { ...state, balance: state.balance + action.payload };
//     case "account/withdraw":
//       return { ...state, balance: state.balance - action.payload };
//     case "account/requestLoan":
//       if (state.loan > 0) return state;
//       return {
//         ...state,
//         loan: action.payload.amount,
//         loanPurpose: action.payload.purpose,
//       };
//     case "account/payLoan":
//       return {
//         ...state,
//         loan: 0,
//         loanPurpose: "",
//         balance: state.balance - state.loan,
//       };
//     default:
//       return state;
//   }
// }

// function customerReducer(state = initialCustomer, action) {
//   switch (action.type) {
//     case "customer/createCustomer":
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//         nationalId: action.payload.nationalId,
//         createdAt: action.payload.createdAt,
//       };
//     case "customer/updateCustomer":
//       return {
//         ...state,
//         fullName: action.payload,
//       };
//     default:
//       return state;
//   }
// }

// const rootReducer = combineReducers({
//   account: accountReducer,
//   customer: customerReducer,
// });
const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});

export default store;

// store.dispatch({ type: "account/deposit", payload: 500 });
// console.log(store.getState());

// store.dispatch({ type: "account/withdraw", payload: 200 });
// console.log(store.getState());

// store.dispatch({
//   type: "account/requestLoan",
//   payload: { amount: 100, purpose: "buy iphone" },
// });
// console.log(store.getState());

// store.dispatch({
//   type: "account/payLoan",
// });
// console.log(store.getState());

// function deposit(amount) {
//   return { type: "account/deposit", payload: amount };
// }

// function requestLoan(amount) {
//   return {
//     type: "account/requestLoan",
//     payload: amount,
//   };
// }

// function withdraw(amount) {
//   return { type: "account/withdraw", payload: amount };
// }

// function payLoan() {
//   return { type: "account/payLoan" };
// }

// store.dispatch(deposit(500));
// console.log(store.getState());

// store.dispatch(withdraw(200));
// console.log(store.getState());

// store.dispatch(requestLoan({ amount: 100, purpose: "buy iphone" }));
// console.log(store.getState());

// store.dispatch(payLoan());
// console.log(store.getState());

// function createCustomer(customer) {
//   return { type: "customer/createCustomer", payload: customer };
// }

// function updateCustomer(fullName) {
//   return { type: "customer/updateCustomer", payload: fullName };
// }

// store.dispatch(
//   createCustomer({
//     fullName: "summer",
//     nationalId: "china",
//     createdAt: new Date().toISOString(),
//   })
// );

// console.log(store.getState());

// store.dispatch(updateCustomer("geoffrey"));
// console.log(store.getState());
