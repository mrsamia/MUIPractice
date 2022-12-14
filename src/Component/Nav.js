import { AppBar, Button, Container, CssBaseline, Grid, Toolbar, Typography } from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import React from 'react';
import CarD from './CarD';
import Styles from '../CSS/Styles';

function Nav(props) {
   const classes = Styles();
    return (
        <div>
            <CssBaseline />
            <AppBar position='relative'>
                <Toolbar>
                    <PhotoCameraIcon className={classes.icon} />
                    <Typography variant='h6'>Photo Album</Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div>
                    <Container maxWidth='sm'>
                        <Typography variant='h2' gutterBottom className={classes.sectionMT}>Album layout</Typography>
                        <Typography variant='h6' color="textSecondary">Something short and leading about the collection below—its contents, the creator, etc.
                            Make it short and sweet, but not too short so folks don't simply skip over it entirely.</Typography>
                        <Grid container spacing={2} justifyContent="center" className={classes.MT} gutterBottom>
                            <Grid item>
                                <Button variant='contained' gutterBottom>Main Call to Action</Button>
                            </Grid>
                            <Grid item>
                                <Button variant='outlined'>Main Call to Action</Button>
                            </Grid>
                        </Grid>
                        <CarD />
                    </Container>
                </div>
            </main>
        </div>
    );
}

export default Nav;