import React from 'react';
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';
import Page1 from "./Page1";
import Page2 from "./Page2";
import SignUp from "./SignUp";
import NavBar from "./NavBar"




function Routes() {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route exact path="/1" component={Page1}/>
                <Route exact path="/2" component={Page2}/>
                <Route exact path="/sign-up" component={SignUp}/>
                <Redirect to="/1"/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;