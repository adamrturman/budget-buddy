import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { Button } from '@material-ui/core';
import {doSignOut, isSignedIn} from './services/authService';

function Private (props:any)  {
    const [verification, setVerification] = useState({})

    const handleSubmit = (event:any) => {
       axios({
            url: '/api/adam',
            method: 'GET'
        })
        .then(res => setVerification(res.data))
    }

    const handleSignOut = (event:any) => {
        doSignOut();        
        props.history.push('/');
        // this removes the Jwt from local storage, but nothing else
        //  refactor to separate SignOut component and inject it into this view
        //  Need a useEffect hook to trigger re-render 
        // so we will hit the redirect to the homepage on line 39
    }

    return isSignedIn() ? (
        <div>
            <h1>You are signed in</h1>
            <Button onClick={handleSubmit}>Click Me</Button>
            <div>{verification.hasOwnProperty('hi') ? 'After axios' : 'Before axios'}</div>
            <div>{verification.hasOwnProperty('hi') ? <Button onClick={handleSignOut}>Sign Out</Button> : ''}</div>
        </div>
    ) : (
        <Redirect to='/' />
    )
}

export default Private
