import React, { useState } from 'react'
import axios from 'axios'
import { Button, FormGroup, FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';
import { Link } from "react-router-dom";
import {setUpJWT} from './services/authService';

function SignIn (props: any) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { history } = props

    const handleSubmit = (event: any) => {
        axios({
            url: '/auth/signin',
            method: 'POST',
            data: {
                'username': username,
                'password': password
            }
        })
        //  Need to check if this user/password combination exists & matches in the DB before authenticating them with JWT
        .then(res => {
            setUpJWT(res.data);
            history.push('/1')
        })
        .catch(error => alert(error))
    }
    
    return (
        <div>
            <FormGroup>
                <FormControl>
                    <InputLabel htmlFor="my-input">Email address</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" onChange={event => setUsername(event.target.value)} />
                    <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Password</InputLabel>
                    <Input id="my-input"  type="password" aria-describedby="my-helper-text" onChange={event => setPassword(event.target.value)} />
                    <FormHelperText id="my-helper-text">Make your password unique</FormHelperText>
                </FormControl>
                <Button onClick={handleSubmit}>Submit</Button>
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