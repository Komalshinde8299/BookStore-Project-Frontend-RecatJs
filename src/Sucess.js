import React from 'react'
import CongoImage from'./images/CongoImage.png'
import CartBar from './CartBar';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function generateRandomOrderId() {
  const randomId = Math.floor(10000 + Math.random() * 90000); // Generates a random 5-digit number
  return `#${randomId}`;
}
function Sucess() {
  const orderId = generateRandomOrderId();
  return (
    <div>
      <CartBar/>
    <div style={{display:'flex',justifyContent:'center'}}><img style={{marginTop:'0', width:'50ch'}} src={CongoImage}/>
    
    </div>
    <div >
    <div style={{display:'flex',justifyContent:'center'}}>hurry!!!Order is confirmed </div>
    <div style={{display:'flex',justifyContent:'center'}}>the order id is #{orderId} save the order id for</div>
    <div style={{display:'flex',justifyContent:'center'}}>further communication</div>
    </div>
    <div>
    <TableContainer component={Paper} sx={{ maxWidth: '80%',
     margin: 'auto', marginTop: '15px', }}>
      <Table>
      <TableHead>
          <TableRow>
            <TableCell sx={{ fontSize: '16px', width: '33%',
                    textAlign: 'center',border: '1px solid #000', borderRight: 'none',
                    backgroundColor:'#8080800d'}}>
                       
                    Email Us</TableCell>
            
            <TableCell sx={{ backgroundColor:'#8080800d',fontSize: '16px',width: '33%', border: '1px solid #000', borderRight: 'none',borderLeft: 'none',textAlign: 'center',}}>Contact Us</TableCell>
            <TableCell sx={{backgroundColor:'#8080800d', fontSize: '16px',border: '1px solid #000' ,width: '33%',border: '1px solid #000', borderLeft: 'none',textAlign: 'center',}}>Address</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow>
            <TableCell sx={{ fontSize: '16px',border: '1px solid #000',textAlign: 'center',}}>admin@bookstore.com</TableCell>
            
            <TableCell sx={{ fontSize: '16px',border: '1px solid #000',textAlign: 'center',}}>+918834275881</TableCell>
            <TableCell sx={{ fontSize: '16px',border: '1px solid #000',textAlign: 'center',}}>42, 14th Main, 15th Cross, Sector
               4, opp to BDA complex, near kumkaran restaurant, 
               HSR Layout, Banglore 560034

            </TableCell>
            
          </TableRow>
        </TableBody>
      </Table>
      </TableContainer>
    </div>
    <div style={{display:'flex',justifyContent:'center', marginTop:'2ch'}}>
    <Button variant="contained">continue shopping</Button>
    </div>
    </div>
    

  )
}

export default Sucess