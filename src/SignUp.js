import axios from 'axios';
import React, { useState } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

import CartBar from './CartBar';

import Card from '@mui/material/Card';
import education from './images/education.png'
import Background from './images/Background.png'

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contactNo, setContact] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [contactNoError, setContactNoError] = useState('');






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

    if (!email) {
      setEmailError('Email is required');
      valid = false;
    } else if (!/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      setEmailError("Email is invalid");
      valid = false;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('Password is required');
      valid = false;
    } else if (
      !/^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$&])[A-Za-z0-9@#$&]{8,}$/.test(password)
    ) {
      setPasswordError("Password is invalid");
      valid = false;
    }else {
      setPasswordError('');
    }

    if (!valid) {
      return; 
    }



    let user = {
      userName: name,
      email: email,
      password: password,
      contactNo: contactNo,
      adressList: [],
      orderBook: [],
      cart: {},


    }
    try {

      const response = await axios.post('http://localhost:8083/user/getUser', user
      );
      console.log('Response:', response);
      
      setRegistrationSuccess(true);
    }
    catch (error) {
      console.error('Error:', error);

    }


  }

  return (


    <div>
      <div style={{ height: '70ch' }}>
        <CartBar />
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3ch', }}>

          <Card className='card' style={{ height: '60ch', width: '50ch' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Avatar sx={{ marginTop: '0.5ch', bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />

              </Avatar>

            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <h2 style={{ marginTop: '0.1ch' }}>
                Sign Up
              </h2>
            </div>


            <Form >
              <div >
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <TextField style={{ width: '40ch', }} id="outlined-basic" label=" Enter Name*" variant="outlined"    onChange={(e) => setName(e.target.value)}
                    error={!!nameError}
                    helperText={nameError} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <TextField style={{ width: '40ch', marginTop: '2ch' }} id="outlined-basic" label=" Contact No*" variant="outlined"  
                  onChange={(e) => setContact(e.target.value)} error ={!!contactNoError} helperText={contactNoError}/>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <TextField style={{ width: '40ch', marginTop: '2ch' }} 
                  id="outlined-basic" label=" Email Address*" variant="outlined"  
                  onChange={(e) => setEmail(e.target.value)} 
                  error={!!emailError} helperText={emailError}/>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2ch'}}>
                  <TextField style={{ width: '40ch' }} id="outlined-basic" label=" Password*" variant="outlined" 
                  onChange={(e) => setPassword(e.target.value)} error={!!passwordError} helperText={passwordError}/>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', }}>
                  <Button style={{ width: '40ch',marginTop: '2ch' }} variant="contained" disableElevation onClick={handelSubmit}>

                    Sign Up
                  
                  </Button>
                </div>
                {registrationSuccess && (
              <div style={{ display: 'flex', justifyContent: 'center', color: 'green', marginTop: '1ch' }}>
                Congratulations! Registration successful.
              </div>
            )}

                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2ch' }}>
                  Already have an account?<div style={{marginLeft:'1ch'}}></div><Link to={'/login'}> SignIn
                  </Link>
                </div>

              </div>


            </Form>
          </Card>



        </div>



      </div>



      {/* <div>


        <Form>
          Resgister new User

          <FormGroup>
            <Label for="name">
              Enter Name
            </Label>

            <Input
              id="name"
              name="name"
              placeholder="Enter Name"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="contactNo">
              Enter Contact No
            </Label>

            <Input
              id="no"
              name="no"
              placeholder="Enter Contact No"
              type="text"
              onChange={(e) => setContact(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <Label for="name">
              Enter Email
            </Label>

            <Input
              id="email"
              name="email"
              placeholder="Enter Email"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">
              Set Password
            </Label>
            <Input
              id="password"
              name="password"
              placeholder="Enter Password"
              type="email"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
          <Button onClick={handelSubmit}>
            Submit
          </Button>


        </Form>

      </div> */}

    </div>


  )
}

export default SignUp