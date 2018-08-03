import { combineReducers } from 'redux';

import redUI from './redUI';
import redAPI from './redAPI';

export default combineReducers({
    redUI,
    redAPI
});