import { ADD_PRODUCT } from "../actions-types";

export const GlobalReducer = (state, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            if (action.product) {
                return {...state, products: [...state.products, action.product]};
            } else {
                return {...state };
            }
    
        default:
            break;
    }
}