import React from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import { FormGroup, FormControl, InputLabel, Input, FormHelperText, Button } from '@material-ui/core';


function SignUp () {
    //  make post ajax request
    

    const handleSubmit = (event:any) => {
        //  hardcode the username and password
        axios({
            url: '/auth/signup',
            method: 'POST',
            data: {
                'username': 'Adam',
                'password': 'password'
            }
        })
    }
    
    return (
<div>
    <FormGroup>
        <FormControl>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl>
            <InputLabel htmlFor="my-input">Password</InputLabel>
            <Input id="my-input"  type="password" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text">Make your password unique</FormHelperText>
        </FormControl>
        <FormControl>
            <InputLabel htmlFor="my-input">Password Confirmation</InputLabel>
            <Input id="my-input"  type="password" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text">Passwords must match</FormHelperText>
        </FormControl>
        <Button onClick={handleSubmit}>Submit</Button>
    </FormGroup>
    <div>
        <Link to="/sign-in">Already have an account? Sign in here!</Link>
    </div>
    <div>
        <Link to="/1">Go to page 1</Link>
    </div>
    <div>
        <Link to="/2">Go to page 2</Link>
    </div>
</div>
    )
}

export default SignUp