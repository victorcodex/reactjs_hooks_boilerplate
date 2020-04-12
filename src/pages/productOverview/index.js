import React from "react";
import { useGlobalStateContext } from "./../../context/globalContext";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default function ProductOverview() {
    const { products } = useGlobalStateContext();

    return (
        <div>
            <h1>Products</h1>
            <hr />
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="right">Product</TableCell>
                        <TableCell align="right">Category</TableCell>
                        <TableCell align="right">Price</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {products.map((row) => (
                        <TableRow key={row.id}>
                        <TableCell component="th" scope="row">
                            {row.id}
                        </TableCell>
                        <TableCell align="right">{row.product}</TableCell>
                        <TableCell align="right">{row.category}</TableCell>
                        <TableCell align="right">€{row.price}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={products.length}
                rowsPerPage={10}
                page={0}
            />
        </div>
    );
}