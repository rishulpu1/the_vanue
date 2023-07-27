import React,{useState, useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import SideDrawer from './SideDrawer';
const Header = ()=> {
    const [openDrawer, setOpenDrawer] = useState(false);
    const [headerShow, setHeaderShow] = useState(false);
    const toggleDrawer = ()=> {
        setOpenDrawer(prevState => !prevState)
    }
    const handleScroll = ()=> {
        if(window.scrollY > 0){
            setHeaderShow(true);
        } else {
            setHeaderShow(false);
        };
    }
    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
    },[])
    return (
    <>
        <AppBar
                position='fixed'
                style={{
                    transition:'all 0.5s ease-in-out',
                    backgroundColor: headerShow ? '#2f2f2f' : 'transparent',
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
                    onClick={toggleDrawer}
                >
                    <MenuIcon />
                </IconButton>
                <SideDrawer open={openDrawer} onClose={toggleDrawer} />
            </Toolbar>
        </AppBar>
        
    </>
    )
        
    
}

export default Header;