import React from "react";

export default function Home() {
    return (
        <div>
            <h1>Home</h1>
            <p>
                On the Product page, you can add new product by clicking the "Add product" button. 
                The new data is added into the products state. 
            </p>
            <p>The badge at the top right of the page keeps tracks of the current amount of products in the state</p>
            <p>No Redux, just Context API <span role="img" aria-label="smile">😊</span></p>
        </div>
    );
}