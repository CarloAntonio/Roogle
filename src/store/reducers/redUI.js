
import * as actionTypes from '../actions/actTypes';

const initialState = {
    modal: false
}

const toggleModal = (state, action) => {
    return {
        ...state,
        modal: !state.modal
    }
}

const redUI = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.TOGGLE_MODAL: return toggleModal(state, action);
        default: return state;
    }

}

export default redUI;