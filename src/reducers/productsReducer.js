import { types } from "../types/types"

const initialState = {
    items: [],
    active: null,
}

export const productsReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.productSetActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }
        case types.productsLoad:
            return {
                ...state,
                items: [ ...action.payload ]
            }
        case types.productUpdate:
            return {
                ...state,
                items: state.items.map(
                    item => item.id === action.payload.id 
                    ? action.payload 
                    : item
                )
            }

        case types.productDelete:
            return {
                ...state,
                active: null,
                items: state.items.filter(item => item.id !== action.payload)
            }

        default:
            return state
    }



}