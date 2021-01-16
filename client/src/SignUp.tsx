import React, { useState } from 'react'
import axios from 'axios'
import {setUpJWT} from './services/authService';
import { Link } from "react-router-dom";
import { FormGroup, FormControl, InputLabel, Input, FormHelperText, Button } from '@material-ui/core';

function SignUp(props: any) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

    const { history } = props

    const handleSubmit = (event: any) => {
        if (password === passwordConfirmation) {
        axios({
            url: '/auth/signup',
            method: 'POST',
            data: {
                'username': username,
                'password': password
            }
        })
            .then(res => {
                setUpJWT(res.data);
                history.push('/1')
            })
            .catch(error => alert(error))
    } else {
        alert('Passwords do not match')
    }
} 
    // settled - done
    // resolved/fulfilled - succeeeded
    // rejected - failed

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
                    <Input id="password" type="password" aria-describedby="my-helper-text" onChange={event => setPassword(event.target.value)} />
                    <FormHelperText id="my-helper-text">Make your password unique</FormHelperText>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Password Confirmation</InputLabel>
                    <Input id="my-input" type="password" aria-describedby="my-helper-text" onChange={event => setPasswordConfirmation(event.target.value)} />
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