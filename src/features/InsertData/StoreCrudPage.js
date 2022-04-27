import { TextField } from '@material-ui/core';
import { Alert, Grid, IconButton, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useStyle } from "./style";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { insertStoreChangeHandler, createStoreInstance, deleteStore } from './insertDataSlice';
import { fetchStoresById } from './insertDataSlice';
import { http_status } from '../../config';
import { CircularProgress } from '@material-ui/core';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const StoreCrudPage = ()=>{
    const classes = useStyle()
    const stores = useSelector(state => state.insertData.stores)
    const insertStoreChangeData = useSelector(state => state.insertData.insertStoreChangeData)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchStoresById())
    }, [dispatch])
    const changeHandler = (e)=>{
        dispatch(insertStoreChangeHandler({name: e.target.name, value: e.target.value}))
    }
    return (
        <div className={classes.crudContent}>
            {insertStoreChangeData.insertState === http_status.FULFILLED && 
                <Alert severity='success' spacing = {2} className={classes.alert}>
                    Store data inserted correctly 
                </Alert>
            }
            {insertStoreChangeData.insertState === http_status.REJECTED &&
                <Alert severity='error' spacing = {2} className={classes.alert}>
                    Error during store data insert
                </Alert>
            }
            {insertStoreChangeData.deleteState === http_status.FULFILLED && 
                <Alert severity='success' spacing = {2} className={classes.alert}>
                    Store data deleted correctly 
                </Alert>
            }
            {insertStoreChangeData.deleteState === http_status.REJECTED &&
                <Alert severity='error' spacing = {2} className={classes.alert}>
                    Error during store data delete
                </Alert>
            }
            <form>
                <Grid container columnSpacing={2}>
                    <Grid item xs={2}>
                        <TextField 
                            size='small'
                            name="storeName"
                            onChange={changeHandler}
                            variant='outlined'
                            label='store name' 
                            className={classes.field}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <TextField 
                            size='small'
                            name="country"
                            onChange={changeHandler}
                            variant='outlined'
                            label='country' 
                            className={classes.field}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <TextField 
                            size='small'
                            name="region"
                            onChange={changeHandler}
                            variant='outlined'
                            label='region' 
                            className={classes.field}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <TextField 
                            size='small'
                            name="city"
                            onChange={changeHandler}
                            variant='outlined'
                            label='city' 
                            className={classes.field}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <TextField 
                            size='small'
                            name="address"
                            onChange={changeHandler}
                            variant='outlined'
                            label='address' 
                            className={classes.field}
                        />
                    </Grid>

                    <Grid item xs={1}>
                        <IconButton 
                            component="span" 
                            onClick={
                                async ()=>{
                                    await dispatch(createStoreInstance(insertStoreChangeData))
                                    dispatch(fetchStoresById())
                                }
                            }
                        >
                            <ArrowCircleRightIcon color='primary'/>
                        </IconButton>
                    </Grid>
                </Grid>
            </form>
            { insertStoreChangeData.fetchState === http_status.PENDING && <CircularProgress/>}
            { insertStoreChangeData.fetchState === http_status.FULFILLED &&
            <TableContainer>
                <Table>
                    <TableBody>
                        {stores?.map(store=>{
                            return(
                                <TableRow key={store.id}>
                                    <Grid container>
                                        <Grid item xs={2}>
                                            <TableCell className={classes.tableCell}>{store.storeName}</TableCell>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <TableCell className={classes.tableCell}>{store.country}</TableCell>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <TableCell className={classes.tableCell}>{store.region}</TableCell>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <TableCell className={classes.tableCell}>{store.city}</TableCell>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <TableCell className={classes.tableCell}>{store.address}</TableCell>
                                        </Grid>
                                        <Grid item xs={1}>
                                            <IconButton 
                                                component="span" 
                                                onClick={
                                                    async ()=>{
                                                        await dispatch(deleteStore(store.id))
                                                        dispatch(fetchStoresById())
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

export {StoreCrudPage}