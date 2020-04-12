import { useGlobalDispatchContext } from "./../globalContext";
import { GET_PRODUCTS, GET_SINGLE_PRODUCT, ADD_PRODUCTS } from "./../actions-types";

export const GlobalActionCreator = () => {
    const dispatch = useGlobalDispatchContext();
    return {
        getProducts: () => {
            dispatch({
                type: GET_PRODUCTS
            });
        },
        getSingleProducts: id => {
            dispatch({
                type: GET_SINGLE_PRODUCT,
                id
            });
        },
        addProducts: product => {
            dispatch({
                type: ADD_PRODUCTS,
                product
            });
        }
    }
}