import React from "react";
import { A } from "hookrouter";

export default function NotFound() {
    return (
        <div>
            <h1>Page Not Found!</h1>
            <p><A href="/">Return to Home page</A></p>
        </div>
    );
}