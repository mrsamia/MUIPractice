import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

function CarD(props) {
    return (
        <div>
            <Card sx={{ maxWidth: 400 }}>
                <CardMedia
                    component="img"
                    height="500"
                    image={require("../images/Cardphoto.jpg")}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant='h5' align='start'>Heading</Typography>
                    <Typography align='start'>This is a media card. You can use this section to describe the content.</Typography>
                </CardContent>
                <CardActions>
                    <Button>View</Button>
                    <Button>Edit</Button>
                </CardActions>
            </Card>
        </div>
    );
}

export default CarD;