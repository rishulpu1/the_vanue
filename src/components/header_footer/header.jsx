import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import SideDrawer from './SideDrawer';
const Header = ()=> {
    return (
    <>
        <AppBar
                position='fixed'
                style={{
                    backgroundColor: '#2f2f2f',
                    boxShadow: 'none',
                    padding: '10px 0'
                }} 
            >
            <Toolbar>
                <div className='header_logo'>
                    <div className='font_righteous header_logo_venue'>The Venue</div>
                    <div className='header_logo_title'>Musical Events</div>
                </div>
                <IconButton
                    aria-label='Menu'
                    color='inherit'
                >
                    <MenuIcon />
                </IconButton>
                <SideDrawer />
            </Toolbar>
        </AppBar>
        
    </>
    )
        
    
}

export default Header;