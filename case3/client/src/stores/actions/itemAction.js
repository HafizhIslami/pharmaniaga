import { ITEMS_FETCH_SUCCESS, ITEM_FETCH_SUCCESS, baseURL } from "./actionType";

export const fetchSuccess = function (payload) {
    return {
        type: ITEMS_FETCH_SUCCESS,
        payload
    }
}

export const itemFetchSuccess = function (payload) {
    return {
        type: ITEM_FETCH_SUCCESS,
        payload
    }
}

export const fetchItems = function () {
    return function (dispatch) {
        return fetch(`${baseURL}/Items`, {
            method: 'GET',
            headers: {
                'access_token': localStorage.access_token
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                return response.json();
            })
            .then((data) => {
                dispatch(fetchSuccess(data));
            })
    }
}

export const addItems = function (payload) {
    return function () {
        return fetch(`${baseURL}/Items`, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json',
                'access_token': localStorage.access_token
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                return response.json();
            })
    }
}

export const fetchItemDetail = function (itemId) {
    return function (dispatch) {
        return fetch(`${baseURL}/Items/${+itemId}`, {
            method: 'GET',
            headers: {
                'access_token': localStorage.access_token
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                return response.json();
            })
            .then((data) => {
                dispatch(itemFetchSuccess(data));
            })
    }
}

export const submitEditItemDetail = function (itemId, payload) {
    return function () {
        return fetch(`${baseURL}/Items/${itemId}`, {
            method: 'PUT',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json',
                'access_token': localStorage.access_token
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                return response.json();
            })
    }
}

export const deleteItem = function (itemId) {
    return function () {
        return fetch(`${baseURL}/Items/${itemId}`, {
            method: "DELETE",
            headers: {
                'access_token': localStorage.access_token
            },
        })
    }
}