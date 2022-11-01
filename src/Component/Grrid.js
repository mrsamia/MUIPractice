import { ClassNames } from '@emotion/react';
import { Divider, Grid, Typography, } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';

function Grrid(props) {
    return (
        < div className='pt-5'>
            <Grid container spacing={3} sx={{backgroundColor:'green'}}>
                <Grid item xs={7} sx={{marginLeft:"70px"}}>
                    <Typography variant='h6' align='start' color="white"> The rowSpacing</Typography>
                </Grid>
                <Grid item xs={4} sx={{marginRight:"70px" }}>
                    <Typography variant='h6' align='end' color="white">Logout</Typography>
                </Grid>
            </Grid>
            <Divider></Divider>
            <Container className='pt-5 pb-5'>
                <Grid container spacing={3} >

                    <Grid item xs={6}>
                        <Typography align='start'>
                            The rowSpacing and columnSpacing props allow forThis is a media card. You can use this section to describe the content.This is a media card. You can use this section to describe the content. specifying the row and column gaps independently. It's similar to the row-gap and column-gap properties of CSS Grid.It's similar to the row-gap and column-gap properties of CSS Grid.It's similar to the row-gap and column-gap properties of CSS Grid.It's similar to the row-gap and column-gap properties of CSS Grid.
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography align='start'>
                            The rowSpacing and columnSpacing props allow for specifying the row and column gaps independently. It's similar to the row-gap and column-gap properties of CSS Grid.
                            The rowSpacing and columnSpacing props allow for specifying the row and column gaps independently. It's similar to the row-gap and column-gap properties of CSS Grid.
                            The rowSpacing and columnSpacing props allow for specifying the row and column gaps independently. It's similar to the row-gap and column-gap properties of CSS Grid.</Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Grrid;