import { types } from "../types/types";

export const changeEmailUser = (email) => ({

    type: types.changeEmail,
    payload:  email,
    

});