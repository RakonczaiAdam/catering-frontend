import React from 'react';
import { Container, TextField, Button, Typography } from '@material-ui/core';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft'
import { useStyle } from './style';
import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { dataChangeHandler, registerCompany } from './companySlice';
import { useNavigate } from 'react-router-dom';


const CompanyRegistration = ()=>{
    const classes = useStyle();
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const companyRegistrationData = useSelector(state => state.company)

    const changeHandler = (e)=>{
        dispatch(dataChangeHandler({name: e.target.name, value: e.target.value}))
    }

    return (
        <Container>
            <Typography
                variant='h6'
                color='textSecondary'
                gutterBottom
            >
                Company Registration 
            </Typography>
            <form>
                <Grid container columnSpacing={6}>
                    <Grid item xs={6}>
                        <TextField 
                            name="country"
                            onChange={changeHandler}
                            fullWidth
                            variant='outlined'
                            label='Country' 
                            className={classes.field}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField 
                            name="companyName"
                            onChange={changeHandler}
                            fullWidth
                            variant='outlined'
                            label='Company Name' 
                            className={classes.field}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField 
                            name="region"
                            onChange={changeHandler}
                            fullWidth
                            variant='outlined'
                            label='Region' 
                            className={classes.field}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField 
                            type="email"
                            name="email"
                            onChange={changeHandler}
                            fullWidth
                            variant='outlined'
                            label='Email Address' 
                            className={classes.field}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField 
                            name="city"
                            onChange={changeHandler}
                            fullWidth
                            variant='outlined'
                            label='City' 
                            className={classes.field}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField 
                            type="password"
                            name="password"
                            onChange={changeHandler}
                            fullWidth
                            variant='outlined'
                            label='Password' 
                            className={classes.field}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField 
                            name="address"
                            onChange={changeHandler}
                            fullWidth
                            variant='outlined'
                            label='Address' 
                            className={classes.field}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField 
                            type="password"
                            name="passwordAgain"
                            onChange={changeHandler}
                            fullWidth
                            variant='outlined'
                            label='Password Again' 
                            className={classes.field}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField 
                            name="taxNumber"
                            onChange={changeHandler}
                            fullWidth
                            variant='outlined'
                            label='Tax Number' 
                            className={classes.field}
                        />
                    </Grid>
                </Grid>
            </form>

            <Grid container columnSpacing={4}>
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
                                dispatch(registerCompany(companyRegistrationData)).unwrap().then((responseData)=>{
                                    navigate("/login")
                                })
                            }
                        }
                    >
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </Container>
    )
}

export {CompanyRegistration}