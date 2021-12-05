import React from "react";
import { useStyle } from "./style";
import { AppBar, Box, Button, Container, Toolbar, Typography } from '@material-ui/core';


const HomePage = () =>{
    const classes = useStyle();
    return(
            <Container>
                <Box sx={{flexGrow: 1}}>
                    <AppBar position='static' className={classes.header}>
                        <Toolbar>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className={classes.headerText}>
                                Log in as a 
                            </Typography>
                            <Button variant='contained' className = {classes.headerButton}>
                                company
                            </Button>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className={classes.headerText}>
                                ,or as a 
                            </Typography>
                            <Button variant='contained'  className = {classes.headerButton}>
                                worker
                            </Button>
                        </Toolbar>
                    </AppBar>
                </Box>
                <div className={classes.mainContent}>
                    <h1>Catering Software</h1>
                    <h3>About us</h3>
                </div>
            </Container>
    )
}

export {HomePage}