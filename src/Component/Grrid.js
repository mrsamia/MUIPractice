import { Divider, Grid, Typography, } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';

function Grrid(props) {
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={8}>
                    <Typography variant='h6' align='start'> The rowSpacing</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant='h6' align='end'>Logout</Typography>
                </Grid>
            </Grid>
            <Divider></Divider>
            <Container>
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
        </>
    );
}

export default Grrid;