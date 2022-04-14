import { createStore, combineReducers, compose, applyMiddleware  } from 'redux';
import { authReducer } from '../reducers/authReducer';
import  thunk  from 'redux-thunk';
import { uiReducer } from '../hooks/uiReducers';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer
});

export const store = createStore(
    reducers, 
    composeEnhancers(applyMiddleware(thunk))
);

