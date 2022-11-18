import { combineReducers } from "redux";

import itemsReducer from "./itemReducers";
import categoriesReducer from "./categoriesReducers";

const rootReducer = combineReducers({
    items: itemsReducer,
    categories: categoriesReducer
})

export default rootReducer;