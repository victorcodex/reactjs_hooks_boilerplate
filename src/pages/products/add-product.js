import React from "react";

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { useGlobalStateContext, useGlobalDispatchContext } from "./../../context/globalContext";
import { ADD_PRODUCT } from "./../../context/actions-types";

export default function AddProduct({ open, handleClose }) {
    const { products } = useGlobalStateContext();
    const [fProduct, setfProduct] = React.useState("");
    const [fProductCategory, setfProductCategory] = React.useState("");
    const [fProductPrice, setfProductPrice] = React.useState("");
    const [ errorMessage, setErrorMessage ] = React.useState("");
    const dispatch = useGlobalDispatchContext();

    const AddProduct = () => {
        setErrorMessage("");
        if (fProduct && fProductCategory && fProductPrice) {
            dispatch({
                type: ADD_PRODUCT, 
                product: {
                    id: products.length + 1, 
                    product: fProduct, 
                    category: fProductCategory, 
                    price: fProductPrice
                }
            });
            handleClose();
        } else {
            setErrorMessage("All field are required");
        }
    }

    return (
            <div>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Add new product</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Kindly fill the below form and click the add button to add a new product. It's that simple
                        </DialogContentText>
                        <div className="error-msg">{errorMessage}</div>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="product"
                                label="Product"
                                type="text"
                                fullWidth
                                onChange={e => setfProduct(e.target.value)}
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="category"
                                label="Category"
                                type="text"
                                fullWidth
                                onChange={e => setfProductCategory(e.target.value)}
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="price"
                                label="Price"
                                type="number"
                                fullWidth
                                onChange={e => setfProductPrice(e.target.value)}
                            />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button color="primary" onClick={AddProduct}>
                            Add
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
    );
}