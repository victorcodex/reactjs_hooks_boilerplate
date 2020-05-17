import React from "react";

import { useGlobalStateContext } from "../context/globalContext";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import { A } from "hookrouter";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

export default function Nav() {
    const classes = useStyles();
    const { products } = useGlobalStateContext();
    return (
        <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                <div className="nav">
                        <A href="/">
                          Home
                        </A>
                        <A href="/products">
                          Products
                        </A>
                    </div>
                </Typography>
                <Badge badgeContent={products.length} color="secondary">Total Products</Badge>
            </Toolbar>
        </AppBar>
        </div>
    );
}