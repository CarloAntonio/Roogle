import { combineReducers } from 'redux';

import redUI from './redUI';
import redAPI from './redAPI';
import redOptions from './redOptions';

export default combineReducers({
    redUI,
    redAPI,
    redOptions
});