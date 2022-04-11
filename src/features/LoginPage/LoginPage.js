import React, { useEffect } from "react";
import { Container, TextField, Button, Typography } from '@material-ui/core';
import { useStyle } from './style';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Box, Card, CardContent, CardActions } from "@mui/material";
import { Grid } from '@mui/material';
import { useNavigate } from "react-router-dom";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft'
import { useDispatch, useSelector } from "react-redux";
import { dataChangeHandler, fetchCompanies, userLogin } from "./loginSlice";

const LoginPage = ()=>{
    const classes = useStyle()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const loginData = useSelector(state => state.login)

    useEffect(()=>{
        dispatch(fetchCompanies())
    }, [dispatch])

    const changeHandler = (e)=>{
        dispatch(dataChangeHandler({name: e.target.name, value: e.target.value}))
    }

    return (
        <Container sx={{ textAlign: 'center', width: '100%'}}>

            <Box 
                component="span"
                sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)',  minWidth: '30%' ,  maxWidth: '30%' , paddingLeft:'35%'}}
            >
                <Card variant="outlined">
                    <CardContent>
                        <Typography
                            variant='h6'
                            color='textSecondary'
                            gutterBottom
                        >
                            Login as a user
                        </Typography>
                        <Typography
                            color='primary'
                            gutterBottom
                        >
                            After company registration a user automatically created with the name of the company
                        </Typography>
                        <form>

                            <TextField 
                                name="company" 
                                label="Outlined" 
                                variant="outlined" 
                                select
                            />

                            <TextField 
                                name="userName"
                                onChange={changeHandler}
                                variant='outlined'
                                label='username' 
                                className={classes.field}
                            />
                        
                            <TextField 
                                name="password"
                                onChange={changeHandler}
                                variant='outlined'
                                label='password' 
                                className={classes.field}
                            />
                        </form>
                    </CardContent>
                    <CardActions>
                        <Grid container columnSpacing={2}>
                            <Grid item>
                                <Button
                                    color='primary'
                                    variant='contained'
                                    endIcon={<ArrowLeftIcon color='primary' fontSize='small'/>}
                                    onClick={
                                        ()=>{
                                            navigate("/")
                                        }
                                    }
                                >
                                    Back
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    type="submit"
                                    color='primary'
                                    variant='contained'
                                    endIcon={<ArrowRightIcon color='primary' fontSize='small'/>}
                                    onClick={
                                        ()=>{
                                            dispatch(userLogin(loginData))
                                        }
                                    }
                                >
                                    Login
                                </Button>
                            </Grid>
                        </Grid>
                    </CardActions>
                </Card>
            </Box>
        </Container>
    )
}

export { LoginPage }