export const initialState = {
  basket: [],
}

export const actionTypes = {
  ADD_TO_BASKET: 'ADD_TO_BASKET',
  REMOVE_ITEM: 'REMOVE_ITEM',
}

export const getBasketTotal = (basket) => {
  return basket?.reduce((amount, item) => amount + item.price, 0)
}

const reducer = (state, action) => {
  console.log("ada")
  switch (action.type) {
    case actionTypes.ADD_TO_BASKET: 
      return {
        ...state,
        basket: [...state.basket, action.item]
      };

    case actionTypes.REMOVE_ITEM:
      console.log("dasdasd")
      const index = state.basket.findIndex(item => item.id === action.id);
      let newBasket = [...state.basket];
      if(index >= 0) {
        newBasket.splice(index, 1);
      }

      return {
        ...state,
        basket: newBasket
      }

    default: return state;
  }
}

export default reducer;