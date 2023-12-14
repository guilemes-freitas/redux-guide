import CartActionTypes from "./action-types";

export const addProductToCart = (payload) =>({
  type: CartActionTypes.ADD_PRODUCT,
  payload,
});

export const removeProductOfCart = (payload) =>({
  type: CartActionTypes.REMOVE_PRODUCT,
  payload,
})

export const decreaseProductOfCart = (payload) =>({
  type: CartActionTypes.DECREASE_PRODUCT,
  payload,
})