import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Typography } from '@mui/material';

const TopFlims = [{
    name: "The Godfather",
    year: 1972
},
{
    name: "12 Angry Men",
    year: 1964
},
{
    name: "Fight Club",
    year: 1940
},
{
    name: "Inception",
    year: 1960
},
{
    name: "Goodfellas",
    year: 1977
}
];

function AutoComplete(props) {
    return (
        <div className='container pt-4 pb-5'>
            <Typography variant='h6'>AutoComplete</Typography>
            <div className='d-flex justify-content-center'>
                <Autocomplete 
                    getOptionLabel={(option) => option.name + "  " + option.year}
                    options={TopFlims}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Movie" />}
                />
            </div>
        </div>
    );
}

export default AutoComplete;