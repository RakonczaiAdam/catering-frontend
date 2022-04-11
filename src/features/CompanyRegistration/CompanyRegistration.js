import React from 'react';
import { Container, TextField, Button, Typography } from '@material-ui/core';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft'
import { useStyle } from './style';
import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { dataChangeHandler, registerCompany, validatePassword } from './companySlice';
import { useNavigate } from 'react-router-dom';
import { Alert } from '@mui/material';
import { validation_errors } from '../../config';


const CompanyRegistration = ()=>{
    const classes = useStyle();
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const companyRegistrationData = useSelector(state => state.company)

    const changeHandler = (e)=>{
        dispatch(dataChangeHandler({name: e.target.name, value: e.target.value}))
        if(companyRegistrationData.passwordAgain.length > 0){
            dispatch(validatePassword())
        }
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
            {companyRegistrationData.validate === validation_errors.PASSWORD_ERROR &&
                <Alert severity='error' spacing = {2}>
                    The password again field has to be the same as the password
                </Alert>
            }
            {companyRegistrationData.validate === validation_errors.UNIQUE_FIELD_CONFLICT &&
                <Alert severity='error' spacing = {2}>
                    This company name is already exsist
                </Alert>
            }
            {companyRegistrationData.validate === validation_errors.EMPTY_FIELD &&
                <Alert severity='error' spacing = {2}>
                    All field has to be filled
                </Alert>
            }
            <form>
                <Grid container columnSpacing={6}>
                    <Grid item xs={6}>
                        <TextField 
                            required
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
                            required
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
                            required
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
                            required
                            name="phoneNumber"
                            onChange={changeHandler}
                            fullWidth
                            variant='outlined'
                            label='Phone Number' 
                            className={classes.field}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField 
                            required
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
                            required
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
                            required
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
                            required
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
                            required
                            name="taxNumber"
                            onChange={changeHandler}
                            fullWidth
                            variant='outlined'
                            label='Tax Number' 
                            className={classes.field}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField 
                            required
                            type="password"
                            name="passwordAgain"
                            onChange={changeHandler}
                            fullWidth
                            variant='outlined'
                            label='Password Again' 
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
                                if(companyRegistrationData.validate !== validation_errors.PASSWORD_ERROR &&
                                    companyRegistrationData.validate !== validation_errors.EMPTY_FIELD){
                                    dispatch(registerCompany(companyRegistrationData)).unwrap().then(()=>{
                                        if(companyRegistrationData.validate === validation_errors.VALID){
                                            navigate("/login")
                                        }
                                    })
                                }
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