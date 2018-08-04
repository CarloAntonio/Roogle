
import * as actionTypes from '../actions/actTypes';

export const mainSearchTextChange = (text) => {
    return {
        type: actionTypes.MAIN_SEARCH_TEXT_CHANGE,
        text: text
    }
}

export const originalHealthState = () => {
    return {
        type: actionTypes.ORIGINAL_HEALTH_STATE
    }
}

export const updateHealthState = (itemName) => {
    return {
        type: actionTypes.UPDATE_HEALTH_STATE,
        itemName: itemName
    }
}

export const healthItemChange = (itemName) => {
    return dispatch => {
        dispatch(originalHealthState());
        dispatch(updateHealthState(itemName));
    }
}

export const originalDietState = () => {
    return {
        type: actionTypes.ORIGINAL_DIET_STATE
    }
}

export const updateDietState = (itemName) => {
    return {
        type: actionTypes.UPDATE_DIET_STATE,
        itemName: itemName
    }
}

export const dietItemChange = (itemName) => {
    return dispatch => {
        dispatch(originalDietState());
        dispatch(updateDietState(itemName));
    }
}

export const dropdownChange = (itemName, itemValue) => {
    return {
        type: actionTypes.DROPDOWN_CHANGE,
        itemName: itemName,
        itemValue: itemValue
    }
}

export const nutrientChange = (itemName, itemValue) => {
    return {
        type: actionTypes.NUTRIENT_CHANGE,
        itemName: itemName,
        itemValue: itemValue
    }
}