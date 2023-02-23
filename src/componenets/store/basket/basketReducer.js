import { fetchApi } from "../../../lib/feth";
import { getMeals } from "../melas/mealsReducer";

export const basketActionTypes = {
  ADD_ITEM_SUCCES: "ADD_ITEM_SUCCES",
  GET_BASKET_SUCCES: "GET_BASKET_SUCCES",
};

const initialState = {
  items: [],
};

export const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case basketActionTypes.GET_BASKET_SUCCES:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

export const getBasket = () => async (dispatch) => {
  try {
    const { data } = await fetchApi("basket");

    dispatch({
      type: basketActionTypes.GET_BASKET_SUCCES,
      payload: data.items,
    });
  } catch (error) {
    console.log(error);
  }
};

export const addToBasket = (newItem) => async (dispatch) => {
  try {
    await fetchApi(`foods/${newItem.id}/addToBasket`, {
      method: "POST",
      body: { amount: newItem.amount },
    });
    dispatch(getBasket());
  } catch (error) {
    console.log(error);
  }
};

export const deleteBasketItem = (id) => async (dispatch) => {
  try {
    await fetchApi(`basketItem/${id}/delete`, {
      method: "DELETE",
    });
    dispatch(getBasket());
  } catch (error) {
    console.log(error);
  }
};

export const updateBasketItem =
  ({ id, amount }) =>
  async (dispatch) => {
    try {
      await fetchApi(`basketItem/${id}/update`, {
        method: "PUT",
        body: { amount },
      });
      dispatch(getMeals());
    } catch (error) {
      console.log(error);
    }
  };
