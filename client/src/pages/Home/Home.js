import React from "react";
import { Typography } from "@mui/material";

const Home = ( {name, role, email} ) => {
  return (
    <div>
        <Typography sx={{margin:4}}>
          <h1>Home</h1>
          <br/>
          { 'name: ' + name } <br/>
          {'role: ' + role } <br/>
          {'email: ' + email } 
        </Typography>
        
        
        
    </div>
  );
};

export default Home;