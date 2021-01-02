import React from 'react'
import { FormGroup, FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';
import { Link } from "react-router-dom";

function SignIn () {
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
            </FormGroup>
            <div>
                <Link to="/sign-up">Don't have an account? Sign Up Here!</Link>
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

export default SignIn