import { fetchApi } from "../../../lib/feth";

export const mealsActionTypes = {
  GET_MEALS_SUCCESS: "GET_MEALS_SUCCESS",
  GET_MEALS_STARTED: "GET_MEALS_STARTED",
  GET_MEALS_FAILD: "GET_MEALS_FAILD",
};

const initialState = {
  meals: [],
  isLoading: false,
  error: "",
};
export const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case mealsActionTypes.GET_MEALS_STARTED:
      return {
        ...state,
        isLoading: true,
      };
    case mealsActionTypes.GET_MEALS_SUCCESS:
      return {
        ...state,
        meals: action.payload,
        isLoading: false,
        error: "",
      };
    case mealsActionTypes.GET_MEALS_FAILD:
      return {
        ...state,
        meals: action.payload,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const getMeals = () => {
  return async (dispatch, getState, api) => {
    dispatch({ type: mealsActionTypes.GET_MEALS_STARTED });

    try {
      const { data } = await fetchApi("foods");
      dispatch({ type: mealsActionTypes.GET_MEALS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: mealsActionTypes.GET_MEALS_FAILD, payload: "Ошибка" });
    }
  };
};

// export const addToBasket = () => {
//   return async () => {
//     try {
//       const response = await fetchApi(`foods/${newItem.id}/addToBasket`, {
//         method: "POST",
//         body: { amount: newItem.amount },
//       });
//       setItems(response.data.items);
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };
