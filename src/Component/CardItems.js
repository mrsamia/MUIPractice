import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

function CardItems(props) {
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
                    <Typography variant='h5' align='start'>{props.Heading}</Typography>
                    <Typography align='start'>{props.content}</Typography>
                </CardContent>
                <CardActions>
                    <Button>{props.name}</Button>
                    <Button>{props.name}</Button>
                </CardActions>
            </Card>
        </div>
    );
}

export default CardItems;