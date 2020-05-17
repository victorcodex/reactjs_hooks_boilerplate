import { useGlobalDispatchContext } from "./../globalContext";
import { GET_PRODUCTS, GET_SINGLE_PRODUCT, ADD_PRODUCT } from "./../actions-types";

export const GlobalActionCreator = () => {
    const dispatch = useGlobalDispatchContext();
    return {
        getProducts: () => {
            dispatch({
                type: GET_PRODUCTS
            });
        },
        getSingleProduct: id => {
            dispatch({
                type: GET_SINGLE_PRODUCT,
                id
            });
        },
        addProduct: product => {
            dispatch({
                type: ADD_PRODUCT,
                product
            });
        }
    }
}