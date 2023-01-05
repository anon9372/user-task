import { createStore } from "redux";

const initialState = {
    users: [],
    user: {}
};

const counterReducer = (state = initialState, action) => {
    if (action.type === "USERS")
        return {
            ...state,
            users: [action.payload]
        };
    else if (action.type === "USER")
        return {
            ...state,
            user: [action.payload]
        };

    return state;
};

const store = createStore(counterReducer);

export default store;
