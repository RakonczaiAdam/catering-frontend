import { makeStyles } from '@material-ui/core';
import Image from '../../assets/landingpage-bg-2.jpg'; 

const useStyle = makeStyles(theme=>{
    return{
        header: {
            backgroundColor: "#d1d1d1",
        },
        headerButton : {
            // color : 'white',
            // backgroundColor: "#42a4ff",
            margin: '2%',
            '&:hover': {
                backgroundColor: '#0084ff',
            },
        },
        headerText: {
            color: "black"
        },
        appName: {
            marginLeft: "10%"
        },
        mainContent: {
            backgroundImage: `url(${Image})`,
            backgroundSize: "cover",
            minHeight: "100%",
            padding: theme.spacing(3)
        },
        toolbar: theme.mixins.toolbar,
        intro:{
            marginTop: "10%",
            marginBottom: "15%",
            marginRight: "20%",
            backgroundColor: "rgba(133, 133, 133, 0.6)",
            color: "white",
            padding: "5%"
        }
    }
});

export { useStyle }