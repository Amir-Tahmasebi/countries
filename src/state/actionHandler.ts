import actionTypes from "./actionTypes";
import ActionType from "./Action.type";
import StateType from './State.type'

export const setInitState = (state: StateType): ActionType => ({
    type: actionTypes.setInitState,
    payload: state
})

export const setCountries = (countries: object[]): ActionType => ({
    type: actionTypes.setCountries,
    payload: countries
})

export const changeThemeColor = (color: "white" | "dark"): ActionType => ({
    type: actionTypes.changeThemeColor,
    payload: color
})

export const setLoading = (isLoading: boolean): ActionType => ({
    type: actionTypes.setIsLoading,
    payload: isLoading
})