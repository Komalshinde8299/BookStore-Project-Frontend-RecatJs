import * as React from 'react';
import { styled, alpha,createTheme} from '@mui/material/styles';
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
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import { Link } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  display: 'flex',
 alignItems: 'center',
 placeholder:"Search…",
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
  color:'black'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'black',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '450px',
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


  return (
    <>
    
    <ThemeProvider theme={customTheme}>
    {/* <Box sx={{ flexGrow: 1 }} > */}
      <AppBar position="static">
        <Toolbar>
          
          {/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Bookstore
          </Typography>
           */}
           <h2>Bookstore</h2>
          
          <Search > 
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
             placeholder="Search…"
             inputProps={{ 'aria-label': 'search', color:'black' }}
             
              // inputProps={{ 'aria-label': 'search' }}
              
            />
          </Search>
          
          <Grid style={{ display: 'flex', alignItems: 'center' }}>
          <h4 >Cart </h4>
        

          <Link to={'/cart'}>
          <IconButton >
         
           <AddShoppingCartSharpIcon color="inherit" /> 
           </IconButton>
           </Link>
          
       
      </Grid>
          
        </Toolbar>
      </AppBar>
    {/* </Box> */}
    </ThemeProvider>
    </>
  );
}
