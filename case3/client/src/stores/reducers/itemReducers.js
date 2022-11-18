import { ITEMS_FETCH_SUCCESS, ITEM_FETCH_SUCCESS } from "../actions/actionType";

const initState = {
    items: [],
    item: {},
}

function itemsReducer(state = initState, action) {
    switch (action.type) {
        case ITEMS_FETCH_SUCCESS:
            return {
                ...state,
                items: action.payload
            }
        case ITEM_FETCH_SUCCESS:
            return {
                ...state,
                item: action.payload
            }
        default:
            return state
    }
}

export default itemsReducer;