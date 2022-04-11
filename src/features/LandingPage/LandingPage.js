import React from "react";
import { useStyle } from "./style";
import { AppBar, Button, Container, Toolbar, Typography,  } from '@material-ui/core';
import { useNavigate } from 'react-router-dom'
import { Box } from "@mui/material";


const LandingPage = () =>{
    const classes = useStyle();
    const navigate = useNavigate()
    return(
            <Container>
                {/* <Box sx={{flexGrow: 1}}> */}
                <AppBar className={classes.header}>
                    <Toolbar >
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className={classes.headerText}>
                            Log in 
                        </Typography>
                        <Button 
                            color="primary"
                        variant='contained' 
                        className = {classes.headerButton}
                        onClick={
                            ()=>{
                                navigate("/login")
                            }
                        }>
                            here
                        </Button>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className={classes.headerText}>
                            or 
                        </Typography>
                        <Button 
                            color="primary"
                            variant='contained'  
                            className = {classes.headerButton}
                            onClick={
                                ()=>{
                                    navigate("/company-registration")
                                }
                            }
                        >
                            sign up
                        </Button>
                        <Typography variant="h3" component="div" sx={{flexGrow: 2}} className={classes.appName}>
                            Catering Software
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Box className={classes.mainContent}>
                    asdsdaaaaaaaaaaaaaaaaaaaaaaaaaa
                </Box>
            </Container>
    )
}

export { LandingPage }