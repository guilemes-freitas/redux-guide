import CardActionTypes from './action-types';

const initialState = {
  products: [],
  productsTotalPrice: 0,
};

const cartReducer = (state = initialState, action) =>{
  switch (action.type) {
    case CardActionTypes.ADD_PRODUCT:
      const productIsAlreadyInCart = state.products.some((product) => product.id === action.payload.id);
      if(productIsAlreadyInCart){
        return {...state, products: state.products.map(product => product.id === action.payload.id ? {...product, quantity: product.quantity + 1} : product)};
      }
      else{
        return {...state, products: [...state.products, {...action.payload, quantity: 1}]};
      }
    case CardActionTypes.REMOVE:
      return {...initialState, products: [...initialState.products, action.payload]};
    default:
      return state;
  }
};

export default cartReducer;