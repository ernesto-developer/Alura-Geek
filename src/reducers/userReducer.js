import { types } from "../types/types";

const initialState = {
    email: "",
}

export const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.changeEmail:
            return {
            
                email: action.payload,
            };

        default:
            return state;
    }
}