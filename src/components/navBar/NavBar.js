import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


export default function NavBar({ logOut }) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ bgcolor: "#768433" }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        WebChat
                    </Typography>
                    <Button color="inherit" onClick={() => logOut()}>LogOut</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}