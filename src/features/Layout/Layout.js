import React, { useEffect } from "react";
import { useStyle } from './style';
import {  Drawer, Typography, List, ListItem, ListItemIcon, ListItemText, IconButton } from "@mui/material";
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import LogoutIcon from '@mui/icons-material/Logout';
import { useLocation, useNavigate } from "react-router-dom";
import { AppBar, Toolbar } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { findLoggedUser, findUserCompany } from './layoutSlice';

const Layout = ({ children })=>{
    const classes = useStyle()
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()
    const loginData = useSelector(state => state.layout)

    useEffect(()=>{
        dispatch(findUserCompany())
        dispatch(findLoggedUser())
    }, [dispatch])
    const menuItems = [
        {
            text: "Stores",
            icon: <StoreMallDirectoryIcon color="secondary"/>,
            path: "/stores"
        },
        {
            text: "Insert Data",
            icon: <AddCircleIcon color="secondary"/>,
            path: "/insert-data"
        },
        {
            text: "Statistics",
            icon: <InsertChartIcon color="secondary"/>,
            path: "/statistics"
        },
        {
            text: "Coupons",
            icon: <ConfirmationNumberIcon color="secondary"/>,
            path: "/coupons"
        },
        {
            text: "Licences",
            icon: <LoyaltyIcon color="secondary"/>,
            path: "/licences"
        }
    ]
    return(
        <div className={classes.root}>
            {/* Appbar */}
            <AppBar 
                className={classes.appbar}
            >
                <Toolbar>
                    <Typography className={classes.companyData}>
                        company: {loginData.userCompany?.companyName}
                    </Typography>
                    <Typography>
                        {loginData.loggedUser?.userName}
                    </Typography>
                    <IconButton 
                        sx={{color: "white"}} 
                        component="span" 
                        onClick={()=>{
                            window.localStorage.removeItem("refreshToken")
                            window.localStorage.removeItem("accessToken")
                            navigate("/")
                        }}
                    >
                        <LogoutIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* Sidebar */}
            <Drawer
                className={classes.drawer}
                variant="permanent"
                anchor="left"
                classes={{ paper: classes.drawerPaper }}
            >
                <div>
                    <Typography 
                        className={classes.title} 
                        variant="h6"
                    >
                        Catering Software
                    </Typography>
                </div>

                <List>
                    {menuItems.map(item =>{
                        return(
                            <ListItem 
                                key={item.text}
                                button
                                onClick={
                                    ()=>{
                                        navigate(item.path)
                                    }
                                }
                                selected={location.pathname === item.path}
                            >
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.text}/>
                            </ListItem>
                        )
                    })}
                </List>
            </Drawer>
            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                {children}
            </div>
        </div>
    )
}

export { Layout }