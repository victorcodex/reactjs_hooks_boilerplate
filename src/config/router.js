import React from "react";

import { useRoutes } from "hookrouter";

import Nav from "./../nav";

import Home from "../pages/home";
import Products from "../pages/products";
import NotFound from "../pages/notfound";

const routes = {
    '/': () => <Home />,
    '/products': () => <Products />
};

export default function Router() {
    const routeResult = useRoutes(routes);
    return (
        <div>
            <Nav />
            <div className="container">
                {routeResult || <NotFound />}
            </div>
        </div>
    );
}