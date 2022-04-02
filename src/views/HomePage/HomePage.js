import React from "react";
import { useStyle } from "./style";
import { AppBar, Button, Container, Toolbar, Typography } from '@material-ui/core';


const HomePage = () =>{
    const classes = useStyle();
    return(
            <Container>
                {/* <Box sx={{flexGrow: 1}}> */}
                    <AppBar className={classes.header}>
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
                            <Button variant='contained'  className = {classes.headerButton}>
                                Sing Up
                            </Button>
                        </Toolbar>
                    </AppBar>
            </Container>
    )
}

export {HomePage}