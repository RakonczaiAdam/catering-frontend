import { makeStyles } from '@material-ui/core/styles';
import Image from '../../assets/homepage-bg-1.jpg'; 

const useStyle = makeStyles(theme =>({
    header: {
        backgroundColor: "#d1d1d1",
    },
    headerButton : {
        color : 'white',
        backgroundColor: "#42a4ff",
        margin: '2%',
        '&:hover': {
            backgroundColor: '#0084ff',
        },
    },
    headerText: {
        color: "black"
    },
    mainContent: {
        backgroundImage: `url(${Image})`
    },
}))

export { useStyle }