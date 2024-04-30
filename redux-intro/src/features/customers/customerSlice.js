const initialCustomer = {
  fullName: "geo",
  createdAt: "",
  nationalId: "",
};

export function customerReducer(state = initialCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalId: action.payload.nationalId,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateCustomer":
      return {
        ...state,
        fullName: action.payload,
      };
    default:
      return state;
  }
}

export function createCustomer(customer) {
  return { type: "customer/createCustomer", payload: customer };
}

export function updateCustomer(fullName) {
  return { type: "customer/updateCustomer", payload: fullName };
}
