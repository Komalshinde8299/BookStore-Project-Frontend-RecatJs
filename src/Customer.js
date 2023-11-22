import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Cart from './Cart';
import Card from '@mui/material/Card'; 
import CardMedia from '@mui/material/CardMedia'; 
import { Button } from '@mui/material';
import { Unstable_Popup as Popup } from '@mui/base/Unstable_Popup';
import { styled } from '@mui/system';

export default function Customer(){
  
    return(
            <>
            
            <Cart/>
            <Card
              sx={{
                // leftmargin: "50px",
                marginLeft:"130px",
                
                width: "75%",
                height:"75%",
                display: "flex",
                flexDirection:"column",
                justifyContent:"center",
                border: "solid grey 2px",
              }}
            >
             
                <Box marginLeft={4}
                marginTop={2}
                marginBottom={1} >
            Customer Details
            </Box>
            <div>
      
    </div>
            
          
               
            <Box
            //   component="form"
              sx={{
                '& > :not(style)': { m: 1.5, width: '30ch'},
             
              }}
            //   noValidate
            //   autoComplete="off"
            >
              <TextField id="outlined-basic" label="Name" variant="outlined" />
              <TextField id="outlined-basic" label="Phone No" variant="outlined" />
              <TextField id="outlined-basic" label="Pin Code" variant="outlined" />
              <TextField id="outlined-basic" label="Locality" variant="outlined" />
              
            </Box>
            <Box
              sx={{
                '& > :not(style)': { m: 1.5, width: '70ch',},
                
              }}>
            <TextField id="outlined-basic" label="Address" variant="outlined" />
            </Box>
            <Box
            //   component="form"
              sx={{
                '& > :not(style)': { m: 1.5, width: '30ch'},
             
              }}
            //   noValidate
            //   autoComplete="off"
            >
              <TextField id="outlined-basic" label="City/Town" variant="outlined" />
              <TextField id="outlined-basic" label="Landmark" variant="outlined" />
              </Box>
              <Box
            //   component="form"
              sx={{
                '& > :not(style)': { m: 1.5, width: '30ch'},
             
              }}
            //   noValidate
            //   autoComplete="off"
            >
                <Button type='radio'>Home</Button>
            </Box>


            </Card>
            </>
          );
        }
        
    
