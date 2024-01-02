import * as React from 'react';
import { styled, alpha, createTheme } from '@mui/material/styles';
import { ClickAwayListener } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { ThemeProvider } from '@emotion/react';
import { Grid } from '@mui/material';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';


import { Link } from 'react-router-dom';
import education from './images/education.png'
import { Button } from 'reactstrap';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import { DataContext1 } from './Data/DataProvider1';

const Search = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  placeholder: "Search…",
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: 'white',

  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));
const SearchContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  backgroundColor:'white'
});
const customTheme = createTheme({
  palette: {
    primary: {
      main: '#A52A2A',
    },
  },
});


const SearchIconWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  // padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'black'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'black',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(2)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    // [theme.breakpoints.up('sm')]: {
    //   width: '12ch',
    //   '&:focus': {
    //     width: '20ch',
    //   },
    // },
  },
}));
// function showItem(){
//   const data = JSON.parse(localStorage.getItem('addedItem'));
//   // console.log(data)
// }

export default function CartBar() {

  const [search, setSearch] = useState('');
  // const [items, setItems] = useState([]);
  const { items, setItems } = useContext(DataContext1);
  const {items1, setItems1} = useContext(DataContext1);

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


  useEffect(() => {
    // setItems1(items);
  }, [])
  console.log(items);
  console.log(items1);

  const handelSearch = (e1) => {
    // console.log(items1);

    // setResult(items1.filter((e) => e.title.toLowerCase().includes(e1.toLowerCase())))

    // setItems(result);

    // console.log(e1);
    if(!e1){
      setItems(items1)
    }else {
      setItems(items1.filter(item => item.bookName.toLowerCase().includes(e1)))
    }
  };

  const handleClickAway = () => {
    if(!items1){
      setItems1(items);
      console.log(items1);
    }
  }


  return (
    <Grid container  sx={{}}>
    <ThemeProvider theme={customTheme}>
      <AppBar position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
     
         <Grid item xs={2} md={1} sx={{ display: 'flex', alignItems: 'center' }}>
          
        <img src={education} alt="Bookstore Logo" style={{ marginLeft:'153%', width:'40%'}} />
            
          </Grid>
        
          <Grid item xs={6} md={3} sx={{size:'larger'}}>
          
          <Link to='/books' style={{ textDecoration: 'none',color:'white' }}> <Typography sx={{marginLeft:'35%',fontSize:'150%'}}>
                Bookstore
              </Typography>
              </Link>
              
          </Grid>
          <Grid item xs={12} md={6} sx={{ flexGrow: 1 }}>
            <SearchContainer>
              <SearchIcon style={{ position: 'auto',color:'grey' }} />
              <StyledInputBase
  placeholder="Search…"
  inputProps={{ 'aria-label': 'search', color: 'black' }}
  sx={{
    width: '100%',
    // [customTheme.breakpoints.up('sm')]: {
    //   width: 'auto',
    // },
  }}
  onChange={(event) => {
    handelSearch(event.target.value);
  }}
/>
            </SearchContainer>
          </Grid>
          <Grid item xs={12} md={2}  sx={{ marginRight:'0.5%',display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            <Typography >Login </Typography>
            </Grid>
            {/* <Grid item xs={12} md={2} sx={{ marginLeft: '0.5%', }}> */}
            <Link to={'/login'}>
              <AccountCircleIcon fontSize="large"  style={{color:'white'}}  />
            </Link>
          {/* </Grid> */}
          <Grid item xs={2} md={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end',marginLeft: '', marginRight: '5%',  }}>
            <Typography >Cart </Typography>
            {/* <Grid> */}
            <Link to={'/cart'}>
              <AddShoppingCartRoundedIcon fontSize="medium" style={{ color: 'white' }} />
              
            </Link>
            {/* </Grid> */}
          </Grid>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  </Grid>
  );
}
