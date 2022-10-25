import { Container, Grid } from '@mui/material';
import React from 'react';
import CardData from './CardData';
import CardItems from './CardItems';

function CardMaping(props) {
    return (
        // <Container>
        //     <div className='row'>
        //         {
        //             CardData.map((e) => {
        //                 return (
        //                     <div className='col-4'>
        //                         <CardItems
        //                             Heading={e.heading}
        //                             content={e.content}
        //                             name={e.name}
        //                         />
        //                     </div>
        //                 );
        //             })
        //         }
        //     </div>
        // </Container>

        <Container>
            <Grid container spacing={4}>
                {
                    CardData.map((e) => {
                        return (
                            <Grid item xs={4}>
                                <CardItems
                                    Heading={e.heading}
                                    content={e.content}
                                    name={e.name}
                                />
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Container>
    )
}

export default CardMaping;