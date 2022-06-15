import React from "react";
import { useLocation } from "react-router-dom";
import { useStyle } from "./style";

const Tables = ()=>{
    const classes = useStyle()
    const location = useLocation()
    const props = location.state
    return(
        <div className={classes.content}>
            Tables
            <p>{props.store.storeName}</p>
        </div>
    )
}

export {Tables}