import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../store/reducers/redCombiner';

const composeEnhancers = 
    process.env.NODE_ENV === 'development' 
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
    : null || compose;

export const middlewares = [thunk];

const createStoreWithMiddleware = composeEnhancers(applyMiddleware(...middlewares))(createStore)

export default createStoreWithMiddleware(rootReducer);