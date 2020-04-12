import React from "react";

import { useRoutes } from "hookrouter";

import Nav from "../pages/nav";

import Home from "../pages/home";
import About from "../pages/about";
import ProductOverview from "../pages/productOverview";
import ProductDetails from "../pages/productDetails";
import NotFound from "../pages/notfound";

const routes = {
    '/': () => <Home />,
    '/about': () => <About />,
    '/products': () => <ProductOverview />,
    '/products/:id': ({id}) => <ProductDetails id={id} />
};

export default function Router() {
    const routeResult = useRoutes(routes);
    return (
        <div>
            <Nav />
            {routeResult || <NotFound />}
        </div>
    );
}