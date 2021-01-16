import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, IconButton, Typography, Toolbar  } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

function NavBar () {
    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <IconButton edge="start"  color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit">
                    Budget Buddy
                    <Link to="/sign-up">Sign-Up</Link>
                    <Link to="/sign-in">Sign-In</Link>
                    <Link to="/star-wars">Star Wars</Link>
                    <Link to="/picture">Picture</Link>
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar

