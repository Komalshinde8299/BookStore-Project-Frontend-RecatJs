import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Cart from './Cart';
import CardMedia from '@mui/material/CardMedia';
import { styled } from '@mui/system';
import { useState } from 'react';
import { Collapse, Button, Card } from 'reactstrap';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';

const ResponsiveCard = styled(Card)({
  marginLeft: "130px",
  width: "75%",
  height: "75%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  border: "solid grey 2px",
  '@media (max-width: 768px)': {
    marginLeft: "10px",
    width: "90%",
  },
});

export default function Customer() {
  return (
    <>
      <Cart />
      <ResponsiveCard>
        <Box marginLeft={4} marginTop={2} marginBottom={1}>
          Customer Details
        </Box>
       
          <Grid ><TextField sx={{width:'20ch'}} id="outlined-basic" label="Name" variant="outlined" /></Grid>
          <Grid><TextField id="outlined-basic" label="Phone No" variant="outlined" /></Grid>
          <Grid item xs={12} md={6}>
            <div>
          <Box
          sx={{
            '& > :not(style)': { m: 1.5, width: '70ch' },
          }}
        >
          
          
          
            <TextField id="outlined-basic" label="Locality" variant="outlined" />
            </Box>
            </div>
          </Grid>
          
        
        <Box
          sx={{
            '& > :not(style)': { m: 1.5, width: '70ch' },
          }}
        >
          <TextField id="outlined-basic" label="Address" variant="outlined" />
        </Box>
        <Box
          sx={{
            '& > :not(style)': { m: 1.5, width: '30ch' },
          }}
        >
          <TextField id="outlined-basic" label="City/Town" variant="outlined" />
          <TextField id="outlined-basic" label="Landmark" variant="outlined" />
        </Box>
        <Box
          sx={{
            '& > :not(style)': { m: 1.5, width: '30ch' },
          }}
        >
          <Button type='radio'>Home</Button>
        </Box>
      </ResponsiveCard>
    </>
  );
}
