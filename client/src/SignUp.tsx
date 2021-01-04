import React, { useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import { FormGroup, FormControl, InputLabel, Input, FormHelperText, Button } from '@material-ui/core';


function SignUp (props:any) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = (event:any) => {
        console.log(username, password)
        axios({
            url: '/auth/signup',
            method: 'POST',
            data: {
                'username': username,
                'password': password
            }
        })
    }
    
    return (
<div>
    <FormGroup>
        <FormControl>
            <InputLabel htmlFor="my-input">Username</InputLabel>
            <Input id="username" aria-describedby="my-helper-text" onChange={event => setUsername(event.target.value)} />
            <FormHelperText id="my-helper-text">We'll never share your credentials.</FormHelperText>
        </FormControl>
        <FormControl>
            <InputLabel htmlFor="my-input">Password</InputLabel>
            <Input id="password"  type="password" aria-describedby="my-helper-text" onChange={event => setPassword(event.target.value)} />
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