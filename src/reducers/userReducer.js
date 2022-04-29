import { types } from "../types/types";

const initialState = {
    actualUser: "",
}

export const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.changeUser:
            return {
                actualUser: action.payload,
            };

        default:
            return state;
    }
}