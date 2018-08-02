
import * as actionTypes from '../actions/actTypes';

const initialState = {
    modal: false,
    search: 0
}

const toggleModal = (state, action) => {
    return {
        ...state,
        modal: !state.modal
    }
}

const toggleSearch = (state, action) => {

    let newSearchState = 0;

    if (state.search === 0) newSearchState = 1;
    else if (state.search === 1) newSearchState = 2;
    else if (state.search === 2) newSearchState = 0;
    else newSearchState = 0;

    return {
        ...state,
        search: newSearchState
    }
}

const redUI = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.TOGGLE_MODAL: return toggleModal(state, action);
        case actionTypes.TOGGLE_SEARCH: return toggleSearch(state, action);
        default: return state;
    }

}

export default redUI;