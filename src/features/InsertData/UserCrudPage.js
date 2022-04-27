import { TextField } from '@material-ui/core';
import { Checkbox, FormControlLabel, Grid, IconButton, Table, TableBody, TableCell, TableContainer, TableRow, Alert } from '@mui/material'
import React, { useEffect } from 'react'
import { useStyle } from "./style";
import { useSelector, useDispatch } from 'react-redux';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { http_status } from '../../config';
import { CircularProgress } from '@material-ui/core';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { createUserInstance, deleteUser, fetchUsersByCompany, insertUsersChangeHandler } from './insertDataSlice';


const UserCrudPage = ()=>{
    const classes = useStyle()
    const users = useSelector(state => state.insertData.users)
    const insertUserChangeData = useSelector(state=> state.insertData.insertUserChangeData)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchUsersByCompany())
    }, [dispatch])
    const changeHandler = (e)=>{
        dispatch(insertUsersChangeHandler({name: e.target.name, value: e.target.value}))
    }
    return (
        <div className={classes.crudContent}>
            {insertUserChangeData.insertState === http_status.FULFILLED && 
                <Alert severity='success' spacing = {2} className={classes.alert}>
                    User data inserted correctly 
                </Alert>
            }
            {insertUserChangeData.insertState === http_status.REJECTED &&
                <Alert severity='error' spacing = {2} className={classes.alert}>
                    Error during user data insert
                </Alert>
            }
            {insertUserChangeData.deleteState === http_status.FULFILLED && 
                <Alert severity='success' spacing = {2} className={classes.alert}>
                    User data deleted 
                </Alert>
            }
            {insertUserChangeData.deleteState === http_status.REJECTED &&
                <Alert severity='error' spacing = {2} className={classes.alert}>
                    Error during user data delete
                </Alert>
            }

            <form>
                <Grid container columnSpacing={2}>

                    <Grid item xs={3}>
                        <TextField
                            size='small'
                            name="userName"
                            onChange={changeHandler}
                            variant='outlined'
                            label='user name'
                            className={classes.field}
                        />
                    </Grid>

                    <Grid item xs={3}>
                        <TextField
                            size='small'
                            name="password"
                            onChange={changeHandler}
                            variant='outlined'
                            label='password'
                            className={classes.field}
                        />
                    </Grid>


                    <Grid item xs={3}>
                        <FormControlLabel
                            name="isAdmin"
                            onChange={changeHandler}
                            value={insertUserChangeData.isAdmin}
                            control={<Checkbox />}
                            label="Admin?"
                            labelPlacement="end"
                        />
                    </Grid>

                    <Grid item xs={1}></Grid>

                    <Grid item xs={1}>
                        <IconButton
                            component="span"
                            onClick={
                                ()=>{
                                    dispatch(createUserInstance(insertUserChangeData)).unwrap().then(()=>{
                                        dispatch(fetchUsersByCompany())
                                    })
                                }
                            }
                        >
                            <ArrowCircleRightIcon color='primary'/>
                        </IconButton>
                    </Grid>
                </Grid>
            </form>
            { insertUserChangeData.fetchState === http_status.PENDING && <CircularProgress/>}
            { insertUserChangeData.fetchState === http_status.FULFILLED &&
            <TableContainer>
                <Table>
                    <TableBody>
                        {users?.map(user=>{
                            return(
                                <TableRow key={user.id}>
                                    <Grid container>
                                        <Grid item xs={3}>
                                            <TableCell className={classes.tableCell}>{user.userName}</TableCell>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <TableCell className={classes.tableCell}>{user.password.substring(0,20)}...</TableCell>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <TableCell className={classes.tableCell}>{user.isAdmin ? "true": "false"}</TableCell>
                                        </Grid>
                                        <Grid item xs={1}>
                                            <IconButton
                                                component="span"
                                                onClick={
                                                    async ()=>{
                                                        await dispatch(deleteUser(user.id))
                                                        dispatch(fetchUsersByCompany())
                                                    }
                                                }
                                            >
                                                <DeleteForeverIcon sx={{color:"red"}}/>
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            }
        </div>
    )
}

export {UserCrudPage}