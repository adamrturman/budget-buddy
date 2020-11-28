import React from 'react'
import { AppBar, IconButton, Typography, Toolbar, Button  } from '@material-ui/core';
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
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar

