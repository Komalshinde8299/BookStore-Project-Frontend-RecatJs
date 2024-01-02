import { useState } from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
// import EditIcon from '@mui/icons-material/Subst';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import axios from "axios";

function CounterItem(){
    const [count, setCount] = useState(1);
    


    const increment=() => 
    setCount(count+1);
    // axios.get("localhost:8083/user/addValue?bookName=${bookName")
    console.log("incresed book vaule");

    const decrement=()=>{
    if (count>0){
      // axios.get("localhost:8083/user/reduceValue?bookName=Maths")
      console.log("reduce book vaule");

    
    setCount(count-1)
    }}
    return (
        <div style={{ display: "flex", flexDirection: "row"}}
        >
          
         <Fab onClick={decrement}  sx={{ width: 26, height: 20, marginRight: 1,}} >
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
        
        >{count}
        </Box>
      <Fab onClick={increment} sx={{ width: 26, height: 20, marginLeft:1 }} >
        +
      </Fab>

          
      
        </div>
      );
    }

export default CounterItem;