import { makeStyles } from '@material-ui/core';

const drawerWidth = "15%";

const useStyle = makeStyles((theme)=>{
    return {
        page: {
            backgroundColor: "#fffff5",
            width: "100%",
            padding: theme.spacing(3)
        },
        drawer: {
            width: drawerWidth
        },
        drawerPaper: {
            width: drawerWidth
        },
        root: {
            display: "flex"
        },
        active: {
            backgroundColor: "blue"
        },
        title: {
            padding: theme.spacing(2)
        },
        appbar: {
            width: `calc(100% - ${drawerWidth})`
        },
        toolbar: theme.mixins.toolbar,
        companyData: {
            flexGrow: 1
        }
    }
})

export { useStyle }