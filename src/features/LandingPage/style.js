import { makeStyles } from '@material-ui/core';
import Image from '../../assets/landingpage-bg-2.jpg'; 

const useStyle = makeStyles({
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
        height: "100%"
    },
});

export { useStyle }