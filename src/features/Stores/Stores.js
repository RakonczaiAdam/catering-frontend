import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStoresById } from "./storeSlice";
import { Card, CardContent, CardActions, Grid } from '@mui/material';
import { Typography, Button } from '@material-ui/core'
import { useStyle } from "./style";

const Stores = ()=>{
    const classes = useStyle()
    const dispatch = useDispatch()
    const stores = useSelector(state => state.store.stores)
    useEffect(()=>{
        dispatch(fetchStoresById())
    }, [dispatch])
    return (
        <div>
        <Grid container columnSpacing={2} rowSpacing={2}>

            {stores?.map(store => {
                return(
                    <Grid item xs={3}  key={store.id}>
                        <Card variant="outlined" className={classes.card} boxShadow={3}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Click to store
                                </Typography>
                                <Typography variant="h5" component="div">
                                    {store.storeName}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    {store.city} {store.address}
                                </Typography>
                                <Typography variant="body2">
                                    
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button 
                                    size="small"
                                    color='primary'
                                    variant='contained'
                                >
                                    Continue
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    // <div>
                    //     
                    // </div>
                )
            })}
        </Grid>
        </div>
    )
}

export {Stores}