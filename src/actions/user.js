import { types } from "../types/types";

export const changeUser = (actualUser) => ({
    
    type: types.changeUser,
    payload:  actualUser,
    

});