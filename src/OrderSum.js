import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button'; 

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import CartBar from './CartBar';
import CounterItem from './CounterItem';
import { Link } from 'react-router-dom';
import Customer from './Customer';
import { Unstable_Popup as Popup } from '@mui/base/Unstable_Popup';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { Collapse, CardBody } from 'reactstrap';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import axios from 'axios';
import Cart from './Cart';
import { grey } from '@mui/material/colors';



export default function OrderSum({ calculateTotalPrice,customerDetailsFilled }) {
    const [book, setBook] = useState([]);
    const [addedItem, setAddedItem] = useState([]);
    useEffect(() => {
        const config = { headers: { token: localStorage.getItem("customerToken") } };
        axios
          .get("http://localhost:8083/user/showCart", config)
          .then((response) => {
            setBook(response.data.cartBookList);
            console.log("books in cart :" );
            console.log( "total price in order sum is"+calculateTotalPrice());
            // response.data.cartBookList.forEach((book) => {
            //   console.log(`Book Name: ${book.bookName}, Book Price: ${book.bookPrice}, Book Quantity: ${book.bookQuantity}`);
            // });
          })
          .catch((error) => {
            console.log(error.cause);
          });
      }, []);
     
    
    
    
      console.log('customerDetailsFilled:', customerDetailsFilled);
    
      console.log(addedItem);
      
    
  return (
    <Grid
    sx={{
      // height:'35ch',
      margin: "15px",
      width: "76%",
      display: "flex",
      // flexDirection:"column",
      border: "solid grey 2px",
      marginLeft:'12%'
    }}
  >
        

    <div>
        <Accordion defaultExpanded={false} TransitionProps={{ direction: 'down' }}>
    <AccordionSummary 
     
     aria-controls="panel2a-content">
      
      
    
      <Typography>Order Summery</Typography>
    </AccordionSummary>
    <AccordionDetails >
    {book.map((item) => (
                  <div key={item.imageUrl} style={{display:'flex', alignItems:'row', marginLeft:'2ch'}} >
                   <Paper elevation={4} style={{ width: '20%', height: '20%', marginLeft: '' }}>
                    <Grid style={{ backgroundColor: 'rgb(225, 225, 225)' }} className='img-div' >
  <img style={{ padding: '10%', marginLeft: '10%', width: '60%', height: '60%' }} src={item.imageUrl} alt={item.bookName} />
</Grid>
</Paper>

                 <div style={{marginLeft:'3ch', marginTop:'5ch'}}>
                   <Box>
                    <div>
                    <span> {item.bookName}</span>
                    </div>
                    <div style={{color:'grey'}}>
                    <span >by: {item.bookAuthor}</span>
            
                    </div>
                    <div>
                    <span>Price: {calculateTotalPrice()}</span>
                    </div>
                    </Box>
                    </div>
                    
                    {customerDetailsFilled ? (
                  <Link to={'/image'}>
                    <Button variant="contained" sx={{marginLeft:'50ch', marginTop:'20ch'}}>Checkout</Button>
                  </Link>
                ) : (
                  <div style={{ color: 'red',marginLeft:'45ch', marginTop:'18ch' }}>
                    Please add address details before checkout.
                    </div>
                )}
              </div>
            ))}
          </AccordionDetails>
        </Accordion>
      </div>
    </Grid>
  );
}
 