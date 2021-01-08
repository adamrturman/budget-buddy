import React from 'react'
import {Link} from "react-router-dom";


function Home() {

    return (
        <div>
            <h1>Home</h1>
            <Link to="/1">Go to page 1 </Link>
            {/* <Link to="/private">Protected Route</Link> */}
        </div>
    );
}

export default Home;