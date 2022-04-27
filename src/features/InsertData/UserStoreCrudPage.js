import React, { useEffect } from "react";
import { Alert, Grid, IconButton, Table, TableBody, TableCell, TableContainer, TableRow, FormControl, Select, MenuItem, InputLabel } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux';
import { useStyle } from "./style";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { fetchStoresById, insertUserStoreChangeHandler, fetchUsersByCompany, fetchUserStoreByCompany, createUserStoreInstance, deleteUserStore } from './insertDataSlice';
import { http_status } from '../../config';
import { CircularProgress } from '@material-ui/core';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const UserStoreCrudPage = ()=>{
    const classes = useStyle()
    const insertUserStoreChangeData = useSelector(state => state.insertData.insertUserStoreChangeData)
    const {users, stores, userStores} = useSelector(state=> state.insertData)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchUserStoreByCompany())
        dispatch(fetchStoresById())
        dispatch(fetchUsersByCompany())
    }, [dispatch])
    const changeHandler = (e)=>{
        dispatch(insertUserStoreChangeHandler({name: e.target.name, value: e.target.value}))
    }
    return (
        <div className={classes.crudContent}>
            {insertUserStoreChangeData.insertState === http_status.FULFILLED && 
                <Alert severity='success' spacing = {2} className={classes.alert}>
                    User store data inserted correctly 
                </Alert>
            }
            {insertUserStoreChangeData.insertState === http_status.REJECTED &&
                <Alert severity='error' spacing = {2} className={classes.alert}>
                    Error during user store data insert
                </Alert>
            }
            
            {insertUserStoreChangeData.deleteState === http_status.FULFILLED && 
                <Alert severity='success' spacing = {2} className={classes.alert}>
                    User store data deleted 
                </Alert>
            }
            {insertUserStoreChangeData.deleteState === http_status.REJECTED &&
                <Alert severity='error' spacing = {2} className={classes.alert}>
                    Error during user store data delete
                </Alert>
            }
            <form>
                <Grid container columnSpacing={2}>

                    <Grid item xs={3}>
                        <FormControl fullWidth>
                            <InputLabel id="userLabel" size="small">user</InputLabel>
                            <Select
                                size="small"
                                name="user"
                                labelId="userLabel"
                                id="userLabel"
                                value={insertUserStoreChangeData.user}
                                label="user"
                                onChange={changeHandler}
                            >
                                {users.map(user => {
                                    return(
                                        <MenuItem key={user.id} value={user.id}>{user.userName}</MenuItem>
                                    )
                                })}
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={3}>
                        <FormControl fullWidth>
                            <InputLabel id="storeLabel" size="small">store</InputLabel>
                            <Select
                                size="small"
                                name="store"
                                labelId="storeLabel"
                                id="storeLabel"
                                value={insertUserStoreChangeData.store}
                                label="store"
                                onChange={changeHandler}
                            >
                                {stores.map(store => {
                                    return(
                                        <MenuItem key={store.id} value={store.id}>{store.storeName}</MenuItem>
                                    )
                                })}
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={4}></Grid>

                    <Grid item xs={1}>
                        <IconButton
                            component="span"
                            onClick={
                                ()=>{
                                    dispatch(createUserStoreInstance(insertUserStoreChangeData))
                                    dispatch(fetchUserStoreByCompany())
                                }
                            }
                        >
                            <ArrowCircleRightIcon color='primary'/>
                        </IconButton>
                    </Grid>
                </Grid>
            </form>
            { insertUserStoreChangeData.fetchState === http_status.PENDING && <CircularProgress/>}
            { insertUserStoreChangeData.fetchState === http_status.FULFILLED &&
            <TableContainer>
                <Table>
                    <TableBody>
                        {userStores?.map(userStore=>{
                            return(
                                <TableRow key={userStore.id}>
                                    <Grid container>
                                        <Grid item xs={3}>
                                            <TableCell className={classes.tableCell}>{userStore.user}</TableCell>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <TableCell className={classes.tableCell}>{userStore.store}</TableCell>
                                        </Grid>
                                        <Grid item xs={4}></Grid>
                                        <Grid item xs={1}>
                                            <IconButton
                                                component="span"
                                                onClick={
                                                    ()=>{
                                                        dispatch(deleteUserStore(userStore.id))
                                                        dispatch(fetchUserStoreByCompany())
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

export {UserStoreCrudPage}
