import { useState } from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
// import EditIcon from '@mui/icons-material/Subst';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';

function CounterItem(){
    const [count, setCount] = useState(1);


    const increment=() => 
    setCount(count+1);

    const decrement=()=>{
    if (count>0){

    
    setCount(count-1)
    }}
    return (
        <div style={{ display: "flex", flexDirection: "row"}}
        >
          
         <Fab onClick={decrement} size="small"  sx={{ width: 30, height: 20, marginRight: 1 }} >
        -
      </Fab>
      <Box   sx={{
        width: 50,
        height: 30,
        border: "solid grey 2px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",}}
        >{count}
        </Box>
      <Fab onClick={increment} size="small" sx={{ width: 30, height: 20, marginLeft:1 }} >
        +
      </Fab>

          
      
        </div>
      );
    }

export default CounterItem;