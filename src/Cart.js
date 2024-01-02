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
import Fab from '@mui/material/Fab';
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
import Colapse from './Colapse';
import OrderSum from './OrderSum';





export default function Cart() {
  const navigate = useNavigate();
  const [customerDetailsFilled, setCustomerDetailsFilled] = useState(false);

  const [addedItem, setAddedItem] = useState([]);
  const [book, setBook] = useState([]);
  const [count, setCount] = useState();
  const [bookCount, setBookCount] = useState(1);
  const[update, setUpdate] = useState();
    


  const increment= (bookName) => {
  setBookCount(bookCount+1);
  console.log(bookName);
  console.log("inside increment"+localStorage.getItem("customerToken"));
  axios.put(`http://localhost:8083/user/addValue/${localStorage.getItem("customerToken")}/${bookName}` )
  .then(response => {
    console.log("Increased book value");
    setUpdate(update+1);
  })
  .catch(error => {
    console.error("Error increasing book value:", error);
  });
  }


  const decrement=(bookName)=>{
  if (bookCount>1){
    console.log("inside decrement"+localStorage.getItem("customerToken"));
    axios.put(`http://localhost:8083/user/reduceValue/${localStorage.getItem("customerToken")}/${bookName}`)
  
    .then(response => {
    console.log("reduce book value");
    setUpdate(update-1);
  })
  .catch(error => {
    console.error("Error reducing book value:", error);
  });
  

  
  setBookCount(bookCount-1)
  }}
  
  // const [isOpen, setIsOpen] = React.useState('false'); 
  
  
  // const data = JSON.parse(localStorage.getItem('addedItem'));
  
  // const cartItems = JSON.parse(localStorage.getItem('cartItems'));
  useEffect(() => {
    const config = { headers: { token: localStorage.getItem("customerToken") } };
    // console.log("token inside remove"+localStorage.getItem("customerToken"));
    axios
      .get("http://localhost:8083/user/showCart", config)
      .then((response) => {
        setBook(response.data.cartBookList);
        console.log("books in cart :" );
        // response.data.cartBookList.forEach((book) => {
        //   console.log(`Book Name: ${book.bookName}, Book Price: ${book.bookPrice}, Book Quantity: ${book.bookQuantity}`);
        // });
      })
      .catch((error) => {
        console.log(error.cause);
      });
      setCount(1);
      setUpdate(1);
      

  }, [count,update]);
  const calculateTotalPrice = () => {
    return book.reduce((total, item) => total + item.bookPrice * item.bookQuantity, 0);
  };

  const handleRemove = (bookName) => {
    console.log("in remove method");
    axios
      .delete(`http://localhost:8083/user/remove/${localStorage.getItem("customerToken")}/${bookName}`)
      .then((response) => {
        console.log("Book removed successfully");
        console.log(response);
        setCount(count + 1);
      })
      .catch((error) => {
        console.log(error);
      });

  };


  

  console.log(addedItem);
  


  return (
    <div >

      <CartBar />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center"
            // border: "solid grey 2px",
            // margin: "20px",
            // width: "50%",
            // height: "auto",
            // marginLeft: "12%",
            // marginTop: "5%",
          }}
        >

          {/* <Grid sx={{width:'76%', marginLeft:'19.5ch', border: "solid grey 2px",}}> */}

            <Grid
              sx={{
                // height:'35ch',
                margin: "15px",
                width: "76%",
                display: "flex",
                // flexDirection:"column",
                border: "solid grey 2px",
                
                
              }}
            >
              <div>
              <div style={{display:'flex',flexDirection:'coloum', marginLeft:'4ch'}} >
                <h3 >
              My Cart
              </h3>
              </div>

            {book.map((item) => (
              
              
                  <div key={item.imageUrl} style={{marginBottom:'5ch',display:'flex',flexDirection:'row', marginLeft:'4ch',marginTop:'3ch'}} >
                    
                    <Paper elevation={4} style={{ width: '20%', height: '20%', marginLeft: '' }}>
                    <Grid style={{ backgroundColor: 'rgb(225, 225, 225)' }} className='img-div' >
  <img style={{ padding: '10%', marginLeft: '10%', width: '60%', height: '60%' }} src={item.imageUrl} alt={item.bookName} />
</Grid>
</Paper>

                 <div style={{marginLeft:'5ch', }}>
                   <Box>
                    <div>
                    <span> {item.bookName}</span>
                    </div>
                    <div style={{color:'grey'}}>
                    <span >by: {item.bookAuthor}</span>
            
                    </div>
                    <div>
                    <span>Rs: {calculateTotalPrice()}</span>
                    </div>
                    <div style={{display:'flex',flexDirection:'row',marginTop:'6ch'}}>
                    <div >
                    <div style={{ display: "flex", flexDirection: "row"}}
        >
          
         <Fab   onClick={()=>decrement(item.bookName)} sx={{ width: 26, height: 20, marginRight: 1,}} >
        -
      </Fab>
      <Box   sx={{
        width: 40,
        height: 25,
        border: "solid grey 2px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      marginTop:'0.5ch',
    borderColor:'rgb(225, 225, 225)'}}
        
        >{bookCount}
        </Box>
      <Fab  onClick={()=>increment(item.bookName)} sx={{ width: 26, height: 20, marginLeft:1 }} >
        +
      </Fab>

          
      
        </div>
                    </div>
                    <div style={{ marginLeft:'4ch'}}>
                    <Button variant="outlined" 
                    onClick={() => handleRemove(item.bookName)}sx={{
      color: 'black',       
      borderColor: 'rgb(225, 225, 225)',
      '&:hover': {
        backgroundColor: '', // Change background color on hover
        color: 'rgb(225, 225, 225)',
        borderColor: 'rgb(225, 225, 225)', }
      }}>Remove</Button>
                    </div>
                    </div>
                    </Box>

                    </div>
                    
                   
           
                    


                   
                  
                  </div>
                  
                   

                
              
              ))}
              </div>

              


            </Grid>
            {/* </Grid> */}
          

        </div>
        
        <Grid>
        <Colapse setCustomerDetailsFilled={setCustomerDetailsFilled}/>
        </Grid>
      
        <Grid>
          <OrderSum calculateTotalPrice={calculateTotalPrice} customerDetailsFilled={customerDetailsFilled} />
          </Grid>
        
        {/* <div
          style={{
            display: "flex",
            alignItems: "center",
            border: "solid grey 2px",
            margin: "10px",
            width: "50%",
            height: "40px",
            marginLeft: "12%",
          }}
        > <Box marginLeft={4}>
            Order Summary
          </Box>
        </div> */}
      </div>
      </div>
      
  );
}
