import { makeStyles } from "@mui/styles";

const accordionStyles = makeStyles({
    root: {
        color: 'White !important',
        backgroundColor:'#2e7d32!important'
    },
    disabled: {
        color: 'white !important',
        backgroundColor: 'red !important'
    },
    expanded: {
        color: 'green !important',
        backgroundColor:'white!important'
    },
    sectionMT:{
        marginTop:"50px!important"
    }
})

export default accordionStyles