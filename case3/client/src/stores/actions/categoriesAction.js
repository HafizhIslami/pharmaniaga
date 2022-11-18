import { CATEGORIES_FETCH_SUCCESS, baseURL } from "./actionType";

export const categoriesFetchSuccess = function (payload) {
    return {
        type: CATEGORIES_FETCH_SUCCESS,
        payload
    }
}

export const categoriesFetchItems = function () {
    return function (dispatch) {
        return fetch(`${baseURL}/Categories`, {
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
                dispatch(categoriesFetchSuccess(data));
            })
    }
}

export const categoriesAddItems = function (payload) {
    return function () {
        return fetch(`${baseURL}/Categories`, {
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

export const categoryFetchDetail = function (categoryId) {
    return function () {
        return fetch(`${baseURL}/Categories/${+categoryId}`, {
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
    }
}

export const submitCategoriesEditDetail = function (categoryId, payload) {
    return function () {
        return fetch(`${baseURL}/Categories/${categoryId}`, {
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

export const deleteCategory = function (categoryId) {
    return function () {
        return fetch(`${baseURL}/Categories/${categoryId}`, {
            method: "DELETE",
            headers: {
                'access_token': localStorage.access_token
            },
        })
    }
}