import { Rating, Typography } from '@mui/material';
import React, { useState } from 'react';

function Ratting(props) {

const [value,setValue]=useState(2)

function onChangeHandler(event,newValue){
    setValue(newValue);
}

    return (
        <div className='pt-5 pb-5'>
            <Typography variant='h6'>Rating Star</Typography>
           <div className='pt-5'>
           <Typography >deafult Star</Typography>
           <Rating/>
            <Typography >large Star</Typography>
            <Rating size='large'/>

            <Typography >Controlled</Typography>
            <Rating size='large' onChange={onChangeHandler} value={value}/>
           </div>
        </div>
    );
}

export default Ratting;