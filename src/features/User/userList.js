import { Button, Typography } from "@material-ui/core";
import { Box, Card, CardActions, CardContent, Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const UserList = ()=>{
    const  {usersData}  = useSelector((state) => state.users)
    return(
        <Box>
            <Grid container spacing = {2}>
                {
                    usersData?.map((u)=>(
                        // <p>{u.name}, {u.password}</p>
                        <Grid item xs={3}>
                            <Card variant="outlined">
                                <CardContent>
                                    <Typography variant="h6">{u.name}</Typography>
                                    <Typography>pw: {u.password}</Typography>
                                </CardContent>
                                <CardActions>
                                    <Button variant='contained'>
                                        Delete
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    )
}

export {UserList}