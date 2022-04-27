import { makeStyles } from '@material-ui/core';


const useStyle = makeStyles((theme)=>{
    return {
        content:{
            textAlign: "center",
            width: "100%"
        },
        selectField:{
            width: "50%",
            textAlign: "left"
        },
        insertDataOptionText:{
            marginTop: "5%"
        },
        textField:{
            height: "20%",
            marginTop : 20,
            marginBottom: 20,
            display: 'block',
        },
        crudContent:{
            marginTop: "5%",
            width: '100%'
        },
        tableCell:{  
            display: "block",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis"
        },
        alert:{
            marginTop: "5%",
            marginBottom: "5%"
        }
    }
})

export { useStyle }