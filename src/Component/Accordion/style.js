import { makeStyles } from "@mui/styles";

const accordionStyles = makeStyles({
    root: {
        color: 'red !important'
    },
    disabled: {
        color: 'white !important',
        backgroundColor: 'red !important'
    },
    expanded: {
        color: 'yellow !important'
    }
})

export default accordionStyles