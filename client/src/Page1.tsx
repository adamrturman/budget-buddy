import React from 'react'
import {Link} from "react-router-dom";

function Page1() {
    return (
        <div>
            <h1>Page 1</h1>
            <Link to="/2">Go to page 2</Link>
            <Link to="/private">Protected Route</Link>
        </div>
    );
}

export default Page1;
