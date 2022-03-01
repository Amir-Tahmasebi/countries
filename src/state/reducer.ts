import ActionType from "./Action.type";
import actionTypes from "./actionTypes";
import StateType from "./State.type";
import initState from "./initState";

function reducer(state: StateType = initState, action: ActionType): StateType {
  let newState: StateType = state;
  switch (action.type) {
    case actionTypes.setInitState:
      newState = action.payload;
      break
    case actionTypes.setCountries:
      newState = {
        ...state,
        countries: action.payload
      }
      break;
    case actionTypes.changeThemeColor:
      newState = {
        ...state,
        theme: action.payload
      }
      break;
    case actionTypes.setIsLoading:
      newState = {
        ...state,
        isLoading: action.payload
      }
      break
  }

  localStorage.setItem("state", JSON.stringify(newState));
  return newState;
}

export default reducer;
