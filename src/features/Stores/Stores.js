import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStoresById } from "./storeSlice";
import { Card, CardContent, CardActions, Grid, Box } from '@mui/material';
import { Typography, Button } from '@material-ui/core'
import { useStyle } from "./style";
import { useNavigate } from "react-router-dom";

const Stores = ()=>{
    const classes = useStyle()
    const dispatch = useDispatch()
    const stores = useSelector(state => state.store.stores)
    const navigate = useNavigate()
    useEffect(()=>{
        dispatch(fetchStoresById())
    }, [dispatch])
    return (
        <div>
        <Grid container columnSpacing={2} rowSpacing={2}>

            {stores?.map(store => {
                return(
                    <Grid item xs={3}  key={store.id}>
                        <Card variant="outlined" className={classes.card}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Click to store
                                </Typography>
                                <Box sx={{backgroundColor: "#f5f7fc", borderBottom: "2px solid #f7f5f5"}}  >
                                    <Typography variant="h5" component="div">
                                            {store.storeName}
                                    </Typography>
                                </Box>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    {store.city} {store.address}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button 
                                    size="small"
                                    color='primary'
                                    variant='contained'
                                    onClick= {()=>{
                                        navigate('/tables', {state: {store: store}})
                                    }}
                                >
                                    Continue
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                )
            })}
        </Grid>
        </div>
    )
}

export {Stores}