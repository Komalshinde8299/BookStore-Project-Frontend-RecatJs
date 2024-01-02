
import axios from 'axios';
import React, { useState } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import CartBar from './CartBar';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import education from './images/education.png'
import Background from './images/Background.png'
import './login.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginErrorMessage, setLoginErrorMessage] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handelSignUp = async () => {
    let valid = true;

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

    try {

      const response = await axios.get('http://localhost:8083/user/getToken', {
        headers: {
          'Content-Type': 'application/json',
        },


        params: { email, password }
      });
      
      console.log("Response " + response.data);
      localStorage.setItem('customerToken', response.data);
      setLoginSuccess(true);
      setLoginErrorMessage('');
    }
    catch (error) {
      console.error('Error:', error);
      setLoginSuccess(false);
      setLoginErrorMessage('Invalid email or password. Please try again.');
    }


  }



  return (
    <div style={{ height: '70ch' }}>
      <CartBar />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5ch', }}>

        <Card className='card' style={{ height: '50ch', width: '50ch' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Avatar sx={{ marginTop: '2ch', bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />

            </Avatar>

          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <h2 style={{ marginTop: '0.3ch' }}>
              Sign In
            </h2>
          </div>


          <Form >
            <div >
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <TextField style={{ width: '40ch', marginTop: '1.5ch', marginBottom: '3ch' }} id="outlined-basic" label=" Email Address*" variant="outlined" onChange={(e) => setEmail(e.target.value)} 
                error={!!emailError} helperText={emailError}
                     />
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3ch', }}>
                <TextField style={{ width: '40ch' }} id="outlined-basic" label=" Password*" variant="outlined" onChange={(e) => setPassword(e.target.value)} error={!!passwordError} helperText={passwordError}/>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', }}>
                <Button style={{ width: '40ch' }} variant="contained" disableElevation onClick={handelSignUp}>

                  Sign In
                </Button>
                </div>
                <div>
                {loginSuccess && (
                <div style={{ display: 'flex', justifyContent: 'center', color: 'green', marginTop: '2ch' }}>
                  Login successful.
                </div>
              )}
              {loginErrorMessage && (
                <div style={{ display: 'flex', justifyContent: 'center', color: 'red', marginTop: '2ch' }}>
                  {loginErrorMessage}
                </div>
              )}
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2ch' }}>
                Don't have account?<div style={{marginLeft:'1ch'}}></div><Link to={'/signup'}> SignUp
                </Link>
              </div>

            </div>


          </Form>
        </Card>



      </div>



    </div>
  )
}
export default Login;