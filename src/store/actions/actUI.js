import * as actionTypes from './actTypes';

export const toggleModal = () => {
    return {
        type: actionTypes.TOGGLE_MODAL
    };
};

export const toggleSearch = () => {
    return {
        type: actionTypes.TOGGLE_SEARCH
    }
}