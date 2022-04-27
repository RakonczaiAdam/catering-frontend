import React, { useEffect } from "react";
import { TextField } from '@material-ui/core';
import { Alert, Grid, IconButton, Table, TableBody, TableCell, TableContainer, TableRow, FormControl, Select, MenuItem, InputLabel } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux';
import { useStyle } from "./style";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { fetchStoresById, createItemInstance, insertItemChangeHandler, fetchItemByCompany, deleteItem } from './insertDataSlice';
import { http_status } from '../../config';
import { CircularProgress } from '@material-ui/core';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const ItemCrudPage = ()=>{
    const classes = useStyle()
    const insertItemChangeData = useSelector(state => state.insertData.insertItemChangeData)
    const stores = useSelector(state=> state.insertData.stores)
    const items = useSelector(state=> state.insertData.items)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchStoresById())
        dispatch(fetchItemByCompany())
    }, [dispatch])

    const changeHandler = (e)=>{
        dispatch(insertItemChangeHandler({name: e.target.name, value: e.target.value}))
    }
    return (
        <div className={classes.crudContent}>
            {insertItemChangeData.insertState === http_status.FULFILLED && 
                <Alert severity='success' spacing = {2} className={classes.alert}>
                    Item data inserted correctly 
                </Alert>
            }
            {insertItemChangeData.insertState === http_status.REJECTED &&
                <Alert severity='error' spacing = {2} className={classes.alert}>
                    Error during item data insert
                </Alert>
            }
            {insertItemChangeData.deleteState === http_status.FULFILLED && 
                <Alert severity='success' spacing = {2} className={classes.alert}>
                    Item data deleted correctly 
                </Alert>
            }
            {insertItemChangeData.deleteState === http_status.REJECTED &&
                <Alert severity='error' spacing = {2} className={classes.alert}>
                    Error during item data delete
                </Alert>
            }
            <form>
                <Grid container columnSpacing={2} rowSpacing={2}>

                    <Grid item xs={2}>
                        <TextField 
                            size='small'
                            name="itemName"
                            onChange={changeHandler}
                            variant='outlined'
                            label='item name' 
                            className={classes.field}
                        />
                    </Grid>

                    <Grid item xs={1}>
                        <TextField 
                            size='small'
                            name="price"
                            onChange={changeHandler}
                            variant='outlined'
                            label='price' 
                            className={classes.field}
                        />
                    </Grid>

                    <Grid item xs={2}>
                        <FormControl fullWidth>
                            <InputLabel id="storeLabel" size="small">store</InputLabel>
                            <Select
                                size="small"
                                name="store"
                                labelId="storeLabel"
                                id="storeLabel"
                                value={insertItemChangeData.store}
                                label="store"
                                onChange={changeHandler}
                            >
                                <MenuItem key={0} value={null}>All store</MenuItem>
                                {stores.map(store => {
                                    return(
                                        <MenuItem key={store.id} value={store.id}>{store.storeName}</MenuItem>
                                    )
                                })}
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={1}>
                        <FormControl fullWidth>
                            <InputLabel id="logicalPrinterLabel" size="small">logical printer</InputLabel>
                            <Select
                                size="small"
                                name="logicalPrinter"
                                labelId="logicalPrinterLabel"
                                id="logicalPrinterLabel"
                                value={insertItemChangeData.logicalPrinter}
                                label="logicalPrinter"
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

                    <Grid item xs={1}>
                        <FormControl fullWidth>
                            <InputLabel id="vatLabel" size="small">vat</InputLabel>
                            <Select
                                size="small"
                                name="vat"
                                labelId="vatLabel"
                                id="vatLabel"
                                value={insertItemChangeData.vat}
                                label="vat"
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

                    <Grid item xs={1}>
                        <TextField 
                            size='small'
                            name="stock"
                            onChange={changeHandler}
                            variant='outlined'
                            label='stock' 
                            className={classes.field}
                        />
                    </Grid>

                    <Grid item xs={1}>
                        <TextField 
                            size='small'
                            name="unit"
                            onChange={changeHandler}
                            variant='outlined'
                            label='unit' 
                            className={classes.field}
                        />
                    </Grid>

                    <Grid item xs={1}>
                    </Grid>

                    <Grid item xs={1}>
                        <IconButton 
                            component="span" 
                            onClick={
                                ()=>{
                                    dispatch(createItemInstance(insertItemChangeData))
                                    dispatch(fetchItemByCompany())
                                }
                            }
                        >
                            <ArrowCircleRightIcon color='primary'/>
                        </IconButton>
                    </Grid>
                </Grid>
            </form>
            { insertItemChangeData.fetchState === http_status.PENDING && <CircularProgress/>}
            { insertItemChangeData.fetchState === http_status.FULFILLED &&
                <TableContainer>
                    <Table>
                        <TableBody>
                            {items?.map(item=>{
                                return(
                                    <TableRow key={item.id}>
                                        <Grid container>
                                            <Grid item xs={2}>
                                                <TableCell className={classes.tableCell}>{item.itemName}</TableCell>
                                            </Grid>
                                            <Grid item xs={1}>
                                                <TableCell className={classes.tableCell}>{item.price}</TableCell>
                                            </Grid>
                                            <Grid item xs={2}>
                                                <TableCell className={classes.tableCell}>{item.store}</TableCell>
                                            </Grid>
                                            <Grid item xs={1}>
                                                <TableCell className={classes.tableCell}>{item.logicalPrinter}</TableCell>
                                            </Grid>
                                            <Grid item xs={1}>
                                                <TableCell className={classes.tableCell}>{item.vat}</TableCell>
                                            </Grid>
                                            <Grid item xs={2}>
                                                <TableCell className={classes.tableCell}>{item.stock} {item.unit}</TableCell>
                                            </Grid>
                                            <Grid item xs={1}></Grid>
                                            <Grid item xs={1}>
                                                <IconButton 
                                                    component="span" 
                                                    onClick={
                                                        ()=>{
                                                            dispatch(deleteItem(item.id))
                                                            dispatch(fetchItemByCompany())
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

export {ItemCrudPage}