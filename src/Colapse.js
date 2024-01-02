import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button'; 

import Grid from '@mui/material/Grid';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
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



export default function Colapse({ setCustomerDetailsFilled }) {
  const [name, setName] = useState('');
  const [contactNo, setContact] = useState('');
  const [city, setCity] = useState('');
  const [landmark, setLandmark] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [locality, setLocality] = useState('');
  const [address, setAddress] = useState('');
  const[type, setType] = useState('Home');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  // const [customerDetailsFilled, setCustomerDetailsFilled] = useState(false);
  // const [pinCode, setPinCode] = useState('');
  


  const [nameError, setNameError] = useState('');
  const [cityError, setCityError] = useState('');
  const [landmarkError, setLandmarkError] = useState('');
  const [pinCodeError, setPinCodeError] = useState('');
  
  const [contactNoError, setContactNoError] = useState('');
  
  const [localityError, setLocalityError] = useState('');
  
  const [addressError, setAddressError] = useState('');
  const[typeError, setTypeError] = useState('');
  const handelSubmit = async () => {
    let valid = true;

    if (!name) {
      setNameError('Name is required');
      valid = false;
    } else if (!/^[A-Z]{1}[a-zA-Z\s]{2,}$/.test(name)) {
      setNameError("Name is invalid");
      valid = false;
    }else {
      setNameError('');
    }
    if (!contactNo) {
      setContactNoError('Contact No is required');
      valid = false;
    }else if (!/^\+?[0-9-]{10}$/.test(contactNo)) {
      setContactNoError("Contact No is invalid");
      valid = false;
    }else {
      setContactNoError('');
    }
    if (!city) {
      setCityError('City is required');
      valid = false;
    } else {
      setCityError('');
    }

    if (!landmark) {
      setLandmarkError('Landmark is required');
      valid = false;
    } else {
      setLandmarkError('');
    }

    if (!pinCode) {
      setPinCodeError('Pin Code is required');
      valid = false;
    } else {
      setPinCodeError('');
    }

    if (!locality) {
      setLocalityError('Locality is required');
      valid = false;
    } else {
      setLocalityError('');
    }

    if (!address) {
      setAddressError('Address is required');
      valid = false;
    } else {
      setAddressError('');
    }

    if (!type) {
      setTypeError('Type is required');
      valid = false;
    } else {
      setTypeError('');
    }
    if (!valid) {
      return; 
    }
    setRegistrationSuccess(true);
    setCustomerDetailsFilled(true);
  
  }
  return (
    
    <Grid
    sx={{
      // height:'35ch',
      // margin: "15px",
      width: "76%",
      display: "flex",
      // flexDirection:"column",
      border: "solid grey 2px",
      marginLeft:'12%'
    }}
  >

    <Grid>
        <Accordion defaultExpanded={false} TransitionProps={{ direction: 'down' }}>
    <AccordionSummary 
     
     aria-controls="panel2a-content">
      
      
    
      <Typography>Customer Details</Typography>
    </AccordionSummary>
    <AccordionDetails >
{/*       
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
  > */}
   

  

     
  <Box
  //   component="form"
    sx={{
      '& > :not(style)': { m: 1.5, width: '40ch'},
   
    }}
  //   noValidate
  //   autoComplete="off"
  >
    <TextField id="outlined-basic" label="Name" variant="outlined" onChange={(e) => setName(e.target.value)}
                    error={!!nameError}
                    helperText={nameError}  />
    <TextField id="outlined-basic" label="Phone No" variant="outlined"  onChange={(e) => setContact(e.target.value)} error ={!!contactNoError} helperText={contactNoError}/>
    
    <TextField id="outlined-basic" label="Pin Code" variant="outlined"  onChange={(e) => setPinCode(e.target.value)}
                error={!!pinCodeError}
                helperText={pinCodeError}/>
    <TextField id="outlined-basic" label="Locality" variant="outlined" onChange={(e) => setLocality(e.target.value)}
                error={!!localityError}
                helperText={localityError}/>
    
  </Box>
  <Box
    sx={{
      '& > :not(style)': { m: 1.5, width: '83ch'},
      
    }}>
  <TextField multiline   rows={4}  id="outlined-basic" label="Address" variant="outlined" onChange={(e) => setAddress(e.target.value)}
  error={!!addressError}
  helperText={addressError}/>
  </Box>
  <Box
  //   component="form"
    sx={{
      '& > :not(style)': { m: 1.5, width: '40ch'},
   
    }}
  //   noValidate
  //   autoComplete="off"
  >
    <TextField id="outlined-basic" label="City/Town" variant="outlined" onChange={(e) => setCity(e.target.value)} error={!!cityError}
                helperText={cityError}/>
    <TextField id="outlined-basic" label="Landmark" variant="outlined" onChange={(e) => setLandmark(e.target.value)}
                error={!!landmarkError}
                helperText={landmarkError} />
    </Box>
    <FormLabel sx={{color:'black', marginLeft:'2ch'}}>Type</FormLabel>
    <RadioGroup
        row
        sx={{color:'black', marginLeft:'2ch'}}
        value={type}
        onChange={(e) => setType(e.target.value)}
        error={!!typeError}
        // aria-labelledby="demo-row-radio-buttons-group-label"
        // name="row-radio-buttons-group"
      >
        <FormControlLabel value="Home" control={<Radio />} label="Home" />
        <FormControlLabel sx={{color:'black', marginLeft:'16ch'}}value="Work" control={<Radio />} label="Work" />
        <FormControlLabel sx={{color:'black', marginLeft:'16ch'}}value="other" control={<Radio />} label="Other" />
     </RadioGroup>
     <Grid sx={{marginLeft:'80%', marginBottom:'2%'}}>
     
                      
                    <Button variant="contained" onClick={handelSubmit}>Submit Details</Button>
                    {registrationSuccess && (
              <div style={{ display: 'flex', justifyContent: 'center', color: 'green', marginTop: '1ch' }}>
                Details added successfully.
              </div>)}
                    </Grid>
               








                  
                  
      
    </AccordionDetails >
  </Accordion></Grid>
  </Grid>
  )
}
