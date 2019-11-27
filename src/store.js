import {createStore, combineReducers} from 'redux';
import freezerReducer from "../src/ducks/freezer";
import ordersReducer from "../src/ducks/orders"
import {devToolsEnhancer} from "redux-devtools-extension";

const rootReducer = combineReducers({
    freezer: freezerReducer,
    orders: ordersReducer,
})

export default createStore(rootReducer, devToolsEnhancer());