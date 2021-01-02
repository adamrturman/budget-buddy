import React from 'react'
import {Link} from "react-router-dom";
import axios from 'axios'

function Page1() {

    axios('api/adam')

    return (
        <div>
            <h1>Page 1</h1>
            <Link to="/2">Go to page 2</Link>
        </div>
    );
}

export default Page1;
