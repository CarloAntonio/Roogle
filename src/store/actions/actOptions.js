
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