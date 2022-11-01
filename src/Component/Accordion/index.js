import AccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordion from '@mui/material/Accordion';
import React from 'react';
import { AccordionSummary, Typography } from '@mui/material';
import accordionStyles from './style';
import { Container } from '@mui/system';

function Accordion(props) {
    const classes = accordionStyles()
    return (
       <Container>
         <MuiAccordion  classes={classes}>
            <AccordionSummary>
               <Typography variant='h6'>Accordion Component</Typography>
            </AccordionSummary>
            <AccordionDetails>This is a media card. You can use this section to describe the content.</AccordionDetails>
        </MuiAccordion>
       </Container>
    );
}

export default Accordion;