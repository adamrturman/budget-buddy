import React from 'react';
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';
import Home from "./Home";
import Page1 from "./Page1";
import Page2 from "./Page2";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import NavBar from "./NavBar";
import Private from './AuthExample'



function Routes() {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home}/>  
                <Route exact path="/1" component={Page1}/>
                <Route exact path="/2" component={Page2}/>
                <Route exact path="/sign-up" component={SignUp}/>
                <Route exact path="/sign-in" component={SignIn}/>
                <Route path="/private" component={Private}/>
                <Redirect to="/1"/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;