import React, { useEffect } from "react";
import { Container, TextField, Button, Typography } from '@material-ui/core';
import { useStyle } from './style';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Box, Card, CardContent, CardActions, FormControl, Select, MenuItem, InputLabel, Alert } from "@mui/material";
import { Grid } from '@mui/material';
import { useNavigate } from "react-router-dom";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft'
import { useDispatch, useSelector } from "react-redux";
import { dataChangeHandler, fetchCompanies, refreshLoginState, userLogin, validateEmptyFields } from "./loginSlice";
import { http_status, validation_errors } from "../../config";

const LoginPage = ()=>{
    const classes = useStyle()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const loginData = useSelector(state => state.login)

    useEffect(()=>{
        dispatch(refreshLoginState())
        dispatch(fetchCompanies())
    }, [dispatch])

    const changeHandler = (e)=>{
        dispatch(dataChangeHandler({name: e.target.name, value: e.target.value}))
        dispatch(validateEmptyFields())
    }
    const handleNavigation =()=>{
        if(loginData.validate === validation_errors.VALID){
            navigate("/stores")
        }
    }

    return (
        <Container sx={{ textAlign: 'center', width: '100%'}}>

            {loginData.validate === validation_errors.EMPTY_FIELD &&
                <Alert severity='error' spacing = {2}>
                    Empty fields not allowed
                </Alert>
            }

            {loginData.loginState === http_status.REJECTED &&
                <Alert severity='error' spacing = {2}>
                    Wrong input properties
                </Alert>
            }

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
                            
                            <FormControl fullWidth>
                                <InputLabel id="companyLabel">companies</InputLabel>
                                <Select
                                    name="company"
                                    labelId="companyLabel"
                                    id="companyLabel"
                                    value={loginData.companyId}
                                    label="companies"
                                    onChange={changeHandler}
                                    className={classes.selectField}
                                >
                                    {loginData.companies.map(company => {
                                        return(
                                            <MenuItem key={company.id} value={company.id}>{company.companyName}</MenuItem>
                                        )
                                    })}
                                </Select>
                            </FormControl>

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
                                        async ()=>{
                                            if(loginData.validate === validation_errors.VALID){
                                                await dispatch(userLogin(loginData))
                                                handleNavigation()
                                            }
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