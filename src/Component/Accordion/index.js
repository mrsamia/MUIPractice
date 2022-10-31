import AccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordion from '@mui/material/Accordion';
import React from 'react';
import { AccordionSummary } from '@mui/material';
import accordionStyles from './style';

function Accordion(props) {
    const classes = accordionStyles()
    return (
        <MuiAccordion expanded classes={classes}>
            <AccordionSummary>
                askdfjkkj
            </AccordionSummary>
            <AccordionDetails>OdfgsdfgsfdgsdfgK</AccordionDetails>
        </MuiAccordion>
    );
}

export default Accordion;