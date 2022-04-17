import { Container, Typography } from "@material-ui/core";
import React from "react";
import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";
import { useStyle } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { changeOptionValue } from "./insertDataSlice";
import { StoreCrudPage } from "./StoreCrudPage";
import { UserCrudPage } from "./UserCrudPage";
import { ItemCrudPage } from "./ItemCrudPage";
import { Grid } from '@mui/material';

const InsertData = ()=>{
    const classes = useStyle()
    const optionValue = useSelector(state => state.insertData.optionValue)
    const dispatch = useDispatch(changeOptionValue)
    const crudOptions = [
        "Stores",
        "Users",
        "Items"
    ]
    const optionChangeHandler = (e)=>{
        dispatch(changeOptionValue(e.target.value))
    }
    return (
        <div className={classes.content}>
            <Container>
                <Grid container columnSpacing={6}>
                    <Grid item xs = {4}>
                        <Typography variant="h6" component="div" className={classes.insertDataOptionText}>
                            Select what to insert
                        </Typography>
                    </Grid>
                    <Grid  item xs = {8}>
                        <FormControl fullWidth>
                            <InputLabel id="crupOptionsLabel">options</InputLabel>
                            <Select
                                name="crupOptions"
                                labelId="crupOptionsLabel"
                                id="crupOptionsLabel"
                                value={optionValue}
                                label="options"
                                onChange={optionChangeHandler}
                                className={classes.selectField}
                            >
                                {crudOptions.map(option => {
                                    return(
                                        <MenuItem key={option} value={option}>{option}</MenuItem>
                                    )
                                })}
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                { optionValue === "Stores" && <StoreCrudPage/>}
                { optionValue === "Users" && <UserCrudPage/>}
                { optionValue === "Items" && <ItemCrudPage/>}
            </Container>
        </div>
    )
}

export {InsertData}