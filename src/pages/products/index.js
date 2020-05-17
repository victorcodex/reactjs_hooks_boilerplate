import React from "react";

import Button from '@material-ui/core/Button';

import ProductsTable from "./product-table";
import AddProduct from "./add-product";
import { useGlobalStateContext } from "./../../context/globalContext";

import "./product.scss";

export default function Products() {
    const { products } = useGlobalStateContext();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <div className="table-heading">
                <span>Products</span>
                <Button variant="contained" color="primary" size="small" className="add-product" onClick={handleClickOpen}>
                    Add product
                </Button>
            </div>
            <hr />
            <ProductsTable products={products} />
            <AddProduct open={open} handleClose={handleClose} />
        </div>
    );
}