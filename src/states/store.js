import {createStore, applyMiddleware, compose} from 'redux';
import appReducer from './duck/index';
import thunk from 'redux-thunk';
import {IntlActions} from 'react-redux-multilingual'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    appReducer,
    composeEnhancer(applyMiddleware(thunk)),
);
store.dispatch(IntlActions.setLocale('vn'))

export default store;
