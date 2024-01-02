import React, { useContext, useState } from 'react';
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
import Paper from '@mui/material/Paper';
import './Books.css'
import { Row } from 'reactstrap';
import DataProvider1, { DataContext1 } from './Data/DataProvider1';


const selectStyle = {
    height: '30px', 
  };
  
  
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
  const {items, setItems} = useContext(DataContext1);
  const [cartBook, setCartBook] = useState([]);

  const [age, setAge] = React.useState('');

  // useEffect(() => {
  
  //   axios.get('http://localhost:8083/bookStore/all')
  //     .then((response) => {
        
  //       const fetchedItems = response.data.obj.map((item) => ({
  //         title: item.bookName,
  //         author: item.bookAuthor,
  //         price: item.bookPrice,
  //         id: item.bookId,
  //         img:item.imageUrl,
  //       }));
        
  //       setItems(fetchedItems);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, []);
  // const handelSearch = () => {
  //   const result = items.filter((e) =>
  //     e.title.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  //   console.log(result);
    
  // };
  
 
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
    console.log("response check " + localStorage.getItem("customerToken"));

    const config = { headers: { token: localStorage.getItem("customerToken") } };

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
    sortedItems.sort((a, b) => a.bookPrice - b.bookPrice);
    setItems(sortedItems);
  };
  
  const hightoLow = () => {
    const sortedItems = [...items];
    sortedItems.sort((a, b) => b.bookPrice - a.bookPrice);
    setItems(sortedItems);
  };
  const handleChange = (event) => {
    setAge(event.target.value);
  };


  // useEffect(() => {
    
  //   localStorage.setItem('cartItems', JSON.stringify(itemData));
  //   const storedData = JSON.parse(localStorage.getItem('cartItems'));
  //   console.log('Data:', storedData);
  //  }, []);
  return (
    
    <div>
            <Grid >
                <Grid>
                    <CartBar />
                </Grid>
                <Grid item xs={12}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <h2>Books</h2>
                        <Grid sx={{ minWidth: '15%' }}>
  <FormControl sx={{ width: '100%' }}>
                        <InputLabel id="demo-simple-select-autowidth-label">Sort by relevance</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="Sort by relevance"
        >
                                <MenuItem onClick={lowtoHigh}>Price: Low to High</MenuItem>
                                <MenuItem onClick={hightoLow}>Price: High to Low</MenuItem>
                                <MenuItem>Newest Arrivals</MenuItem>
                            </Select>
                        </FormControl>
                        </Grid>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className='main'>
                        {items.map((item) => (
                            <Box
                                key={item.id}
                                sx={{
                                    marginRight: 1,
                                    '& > :not(style)': {
                                        m: 1,
                                        height: 100,
                                    },
                                }}
                            >
                                <Paper elevation={7} id='paper-book'>
                                    <Grid>
                                        <Grid className='img-div'>
                                            <img src={item.imageUrl} className='img-book' alt={item.bookName} />
                                        </Grid>
                                        <Grid className='description-book'>
                                            <Grid><b>{item.bookName}</b></Grid>
                                            <Grid className='author'>{item.bookAuthor}</Grid>
                                            <Grid className='price-b'>
                                                <Grid><b>Rs. {item.bookPrice}</b></Grid>
                                            </Grid>
                                            <Grid sx={{
  display: 'flex',
  flexDirection: { xs: 'row', md: 'row' },
  alignItems: 'center',
  
}}>
  <Button sx={{ marginRight: '3%', backgroundColor: 'brown', whiteSpace: 'nowrap' }} variant="contained" onClick={() => { handleCart(item.bookName); }}>ADD TO BAG</Button>

  <Button sx={{  color: 'brown', borderColor: 'brown', marginLeft: { xs: 0, md: '4%' } }} variant="outlined">WISHLIST</Button>
</Grid>
                                        </Grid>
                                        </Grid>
                                </Paper>
                            </Box>
                        ))}
                    </div>
                </Grid>
            </Grid>
        </div>
    )
        }