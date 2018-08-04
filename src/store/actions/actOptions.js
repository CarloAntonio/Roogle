
import * as actionTypes from '../actions/actTypes';

export const mainSearchTextChange = (text) => {
    return {
        type: actionTypes.HEALTH_ITEM_CHANGE,
        text: text
    }
}

export const healthItemChange = (itemName) => {
    return {
        type: actionTypes.HEALTH_ITEM_CHANGE,
        itemName: itemName
    }
}