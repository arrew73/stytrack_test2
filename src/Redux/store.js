import {mainPageReducer} from "./Reducers/main-page-reducer";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import {historyPageReducer} from "./Reducers/historypage-reducer";

let reducers = combineReducers({
   mainPage: mainPageReducer,
   historyPage: historyPageReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;