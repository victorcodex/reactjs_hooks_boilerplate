import { GET_PRODUCTS, GET_SINGLE_PRODUCT, ADD_PRODUCTS } from "../actions-types";

export const GlobalReducer = (state, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return state;

        case GET_SINGLE_PRODUCT:
            return state;

        case ADD_PRODUCTS:
            return state;
    
        default:
            break;
    }
}