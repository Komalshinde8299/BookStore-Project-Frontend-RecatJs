import React, { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Box from '@mui/material/Box'; 
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect } from 'react';
import CartBar from './CartBar';
import axios from 'axios';
import { Link } from 'react-router-dom';


const selectStyle = {
    height: '30px', 
  };
  const token = "eyJhbGciOiJIUzI1NiJ9.eyJwYXNzd29yZCI6IktvbWFsQDU2NTY3IiwiZW1haWwiOiJrb21hbHNoaW5kZTI3MjJAZ21haWwuY29tIn0.PMMFOHRpoxz4Q68QDyys380XjEBMH0DlJAFFL7B1SmI";
  localStorage.setItem("token", token);
  
 function addToCart(item) {
    
    const existingItems = JSON.parse(localStorage.getItem('addedItem'));
    existingItems.push(item);
    localStorage.setItem('addedItem', JSON.stringify(existingItems));
    // console.log(existingItems)
  }
  


export default function Books() {
  // for( const i of itemData){
  //   console.log(i.price)
  // }

 
  //   const [sortOption, setSortOption] = useState('Price: Low to High');
  // const [items, setItems] = useState(itemData);

  const [sortOption, setSortOption] = useState('Price: Low to High');
  const [items, setItems] = useState([]);
  const [cartBook, setCartBook] = useState([]);

  useEffect(() => {
  
    axios.get('http://localhost:8083/bookStore/all')
      .then((response) => {
        
        const fetchedItems = response.data.obj.map((item) => ({
          title: item.bookName,
          author: item.bookAuthor,
          price: item.bookPrice,
          id: item.bookId,
          img:item.imageUrl,
        }));
        
        setItems(fetchedItems);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  
 
  // const addToCart = (item) => {
    
  //   const userToken = 'eyJhbGciOiJIUzI1NiJ9.eyJwYXNzd29yZCI6IktvbWFsQCIsImVtYWlsIjoiS29tYWxAMTIzIn0.Qxgvh20XJ3wyyktYWtr1AgrGwsSL3FvdNNX9le_SKdw';
  
  //   axios.put(`https://localhost:8083/user/addToCart?bookName=${item.bookName}&token=${userToken}`)
  //     .then((response) => {
  //       console.log("Heeee");
  //       console.log('Item added to cart:', response.data);
  //     })
  //     .catch((error) => {
        
  //       console.error('Error adding item to cart:', error);
  //     });
  // };
  const handleCart = (bookName) => {
    console.log("response check " + localStorage.getItem("token"));

    const config = { headers: { token: localStorage.getItem("token") } };

    console.log("book " + bookName);
    axios
      .put(
        "http://localhost:8083/user/addToCart?bookName=" + bookName,
        null,
        config
      )
      .then((response) => {
        setCartBook(response.data.obj);
      })
      .catch((error) => {
        console.log(error.cause);
      });
    console.log("cart check :" + cartBook);
  };
  

  const lowtoHigh = () => {
   // Event.preventDefault();
    
    const sortedItems = [...items];
    console.log(sortedItems);
    sortedItems.sort((a, b) => a.price - b.price);
    setItems(sortedItems);
  };
  
  const hightoLow = () => {
    const sortedItems = [...items];
    sortedItems.sort((a, b) => b.price - a.price);
    setItems(sortedItems);
  };


  // useEffect(() => {
    
  //   localStorage.setItem('cartItems', JSON.stringify(itemData));
  //   const storedData = JSON.parse(localStorage.getItem('cartItems'));
  //   console.log('Data:', storedData);
  //  }, []);
  return (
     
    <>  
      
                
    <CartBar/>
    
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
    <Grid>
    <h2>Books</h2>
    
    </Grid>
    
    <Grid item xs={12} >
    <FormControl sx={{ minWidth: 200}}>
    <InputLabel id="demo-simple-select-label">Sort by relevance</InputLabel>
    <Select  InputLabel="Sort by relevance"
    labelId="demo-simple-select-label"
    id="demo-simple-select"
  >
       
    <MenuItem onClick={()=>lowtoHigh()}>Price: Low to High</MenuItem>
    <MenuItem onClick={()=>hightoLow()}>Price: High to Low</MenuItem>
    <MenuItem>Newest Arrivals</MenuItem>
    </Select>
     </FormControl>
     </Grid>
     </div>
     {/* <Button variant="contained" onClick={lowtoHigh}>Price: Low to High</Button>
<Button variant="contained" onClick={hightoLow}>Price: High to Low</Button> */}
        
    
    <ImageList  cols={4} >
      { items.map((item) => ( 
    
        
        <Box
        sx={{
           width: 200,
           height: 300,
          backgroundColor: 'white',
          '&:hover': {
            backgroundColor: 'gray',
           
          }, 
        }}
        >
          
      <ImageListItem key={item.img}>
        {console.log("price" + " " + item.price)}
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
          sx={{ Width: 150, Height: 150 }}
          title={`${item.title} 
          - Price: ${item.price}`}
            subtitle={<span>by: {item.author}</span>}
            
            position="below"
          />
          {/* <ImageListItemBar
          // sx={{ Width: 150, Height: 150 }}
            subtitle={<span>Price: {item.price}</span>}
            position="below"
          /> */}
          
        </ImageListItem>
        <Grid container spacing={1} justifyContent="center">
        <Grid item>
          <Button size='small' variant="contained" onClick={() => { handleCart(item.title);}} >ADD TO BAG</Button>
        </Grid>
        <Grid item>
          <Button size='small' variant="outlined">WISHLIST</Button>
        </Grid>
      </Grid>
        
        </Box> 
        ))}
    </ImageList>
    
   
    </>
  );
}

// const itemData = [
//   {
    
//     img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    
//     title: 'price : 1500',
//     author: '@bkristastucchio',
//     price:1500,
//     id : 1200,
    

//   },
//   {
//     img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
//     title: 'price : 1200',
//     author: '@rollelflex_graphy726',
//     price:1200,
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
//     title: 'price : 1100',
//     author: '@helloimnik',
//     price : 1100
    
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
//     title: 'price : 1000',
//     author: '@nolanissac',
//     price : 1000
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
//     title: 'price : 1300',
//     author: '@hjrc33',
//     price : 1300
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
//     title: 'price : 1600',
//     author: '@arwinneil',
//     price : 1600
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
//     title: 'price : 1700',
//     author: '@tjdragotta',
//     price : 1700
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
//     title: 'price : 1800',
//     author: '@katie_wasserman',
//     price : 1800
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
//     title: 'price : 1900',
//     author: '@silverdalex',
//     price : 1900
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
//     title: 'price : 900',
//     author: '@shelleypauls',
//     price : 900
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
//     title: 'price : 500',
//     author: '@peterlaster',
//     price : 500
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
//     title: 'price : 1900',
//     author: '@southside_customs',
//     price : 1900
//   },
// ];
