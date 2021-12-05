import { AppBar, Box, MenuIcon, Container, IconButton, Toolbar, Typography } from '@material-ui/core';
import React from 'react'

const MainLayout = ()=>{

    return(
        <div>
            <Container>
                <Box sx={{flexGrow: 1}}>
                    <AppBar position='static'>
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
                        </Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Profile
                        </Typography>
                    </AppBar>
                </Box>
            </Container>
        </div>
    );
}

export { MainLayout }