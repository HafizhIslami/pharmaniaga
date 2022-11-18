const initState = {
  //access_token: localStorage.access_token;
};

function usersReducers(state = initState, action) {
  switch (action.type) {
    // case "users/login":
    //     return {
    //         ...state,
    //     }
    default:
      return state;
  }
}

export default usersReducers;
