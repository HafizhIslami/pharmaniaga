import { CATEGORIES_FETCH_SUCCESS } from "../actions/actionType";

const initState = {
    categories: [],
}

function categoriesReducer(state = initState, action) {
    switch (action.type) {
        case CATEGORIES_FETCH_SUCCESS:
            return {
                ...state,
                categories: action.payload
            }
        default:
            return state
    }
}

export default categoriesReducer;