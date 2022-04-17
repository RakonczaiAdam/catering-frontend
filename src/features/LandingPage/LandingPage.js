import React from "react";
import { useStyle } from "./style";
import { AppBar, Button, Toolbar, Typography,  } from '@material-ui/core';
import { useNavigate } from 'react-router-dom'

const LandingPage = () =>{
    const classes = useStyle();
    const navigate = useNavigate()
    return(
            <div className={classes.mainContent} xs={{height: "100%"}}>
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
                <div>
                    <div className={classes.toolbar}></div>
                    <Typography className={classes.intro} variant="h6" component="div">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed risus urna, dictum eget sem eu, semper volutpat turpis. Ut luctus volutpat nulla, ac tincidunt nisl egestas a. Mauris et massa bibendum, blandit velit in, tempus dui. Praesent elementum arcu lobortis, placerat lectus non, iaculis eros. Proin fermentum et erat vitae facilisis. Fusce quam diam, pharetra non volutpat sit amet, porta sit amet nisl. Sed a est et nisl commodo faucibus ut at enim.
                    </Typography>
                </div>
            </div>
    )
}

export { LandingPage }