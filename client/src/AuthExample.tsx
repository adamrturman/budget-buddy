import React from 'react'
import { Redirect } from 'react-router-dom'

const Private = () => {

    const isAuthenticated = localStorage.getItem('Jwt')
    console.log(isAuthenticated)

    return isAuthenticated ? (
        <div>
            <h1>You are signed in</h1>
        </div>
    ) : (
        // <h1>You are not signed in</h1>
        <Redirect to='/' />
    )

}


export default Private
