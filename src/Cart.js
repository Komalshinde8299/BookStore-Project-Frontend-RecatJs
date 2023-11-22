import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button'; 

import Grid from '@mui/material/Grid';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import CartBar from './CartBar';
import CounterItem from './CounterItem';
import { Link } from 'react-router-dom';
import Customer from './Customer';
import { Unstable_Popup as Popup } from '@mui/base/Unstable_Popup';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';





export default function Cart() {
  const navigate = useNavigate();

  const [addedItem, setAddedItem] = useState([]);
  const [book, setBook] = useState([]);
  // const data = JSON.parse(localStorage.getItem('addedItem'));
  
  const cartItems = JSON.parse(localStorage.getItem('cartItems'));
  useEffect(() => {
    const config = { headers: { token: localStorage.getItem("token") } };
    axios
      .get("http://localhost:8083/user/showCart", config)
      .then((response) => {
        setBook(response.data.cartBookList);
        console.log("books in cart :" );
        response.data.cartBookList.forEach((book) => {
          console.log(`Book Name: ${book.bookName}, Book Price: ${book.bookPrice}, Book Quantity: ${book.bookQuantity}`);
        });
      })
      .catch((error) => {
        console.log(error.cause);
      });
  }, [book]);



  

  console.log(addedItem);


  return (
    <>

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

          {book.map((item) => (

            <Card
              sx={{
                margin: "15px",
                width: "75%",
                display: "flex",
                // flexDirection:"column",
                border: "solid grey 2px",
              }}
            >
              <Box /*sx={{ border: "solid grey 2px", width: 150 }}*/>
                My Cart
                <CardMedia sx={{ height: 100, width: 100 }} image={item.imageUrl} />
              </Box>

              <Box
                sx={{
                  //  width: 200,
                  height: 200,
                  // backgroundColor: 'white',
                  // '&:hover': {
                  //   backgroundColor: 'gray',

                  // }, 
                }}
              >


                <ImageListItem key={item.imageUrl}>
                  <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    // height: 200,
                  }}>
                    {/* <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          /> */}
                    <ImageListItemBar

                      // sx={{ padding: '30Px', Width: 150, Height: 200 }}
                      // title={item.bookName}
                      // subtitle={<span>by: {item.bookAuthor}</span>}
                      
                      position="below"
                    />
                    <span> {item.bookName}</span>
                    <span>by: {item.bookAuthor}</span>
                    <span>Price: {item.bookPrice}</span>
                    
                    {/* <Button onClick={Counter
          } >Sub</Button>
          <Box> </Box>
          <Button > add</Button> */}


                   
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "flex-end",
                      }}
                    > <div>
                    <CounterItem />
                  </div>
                      {/* <Link to ={'/customer'}>
        <Button  size='small' variant="contained" >PLACE ORDER</Button>
        </Link> */}
                      <div>
                        {/* <Link to ={'/customer'}> */}
                        {/* <Button  type="button" onClick={()=> navigate("/customer")}>
        Toggle Popup
      </Button> */}
                        {/* </Link> */}
                        <Popup  >
                          <PopupBody>

                            {/* <Link to = {'/customer'}></Link> */}
                          </PopupBody>
                        </Popup>
                      </div>
                    </div>
                  </div>

                </ImageListItem>
              </Box>
            </Card>
          ))}

        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            border: "solid grey 2px",
            margin: "20px",
            width: "50%",
            height: "40px",
            marginLeft: "12%",
            // padding:"30%"
          }}
        >

          <Box marginLeft={4}>
            < Link to={'/customer'}>
              Customer Details
            </Link>
          </Box>

        </div>
        <div
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
        </div>
      </div>
    </>
  );
}
const grey = {
  50: '#f6f8fa',
  200: '#d0d7de',
  500: '#6e7781',
  700: '#424a53',
  900: '#24292f',
};

const blue = {
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
};

const PopupBody = styled('div')(
  ({ theme }) => `
  width: max-content;
  padding: 12px 16px;
  margin: 8px;
  border-radius: 8px;
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  background-color: ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
  box-shadow: ${theme.palette.mode === 'dark'
      ? `0px 4px 8px rgb(0 0 0 / 0.7)`
      : `0px 4px 8px rgb(0 0 0 / 0.1)`
    };
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  z-index: 1;
`,
);

const Button = styled('button')`
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  background-color: ${blue[500]};
  color: white;
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  transition: all 150ms ease;
  border: none;

  &:hover {
    background-color: ${blue[600]};
  }

  &:active {
    background-color: ${blue[700]};
  }
`;
