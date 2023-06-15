import React from 'react'
import BuildingForm from './BuildingForm';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Building from './Building';
import { Button } from '@mui/material'


export default function Buildings( {name, role, email} ) {

  const [displayForm, setDisplayForm] = useState(false);

  // axios({
  //   method: 'post',
  //   url: 'http://localhost:3001/buildings',
  //   data: {
  //     title: 'Big red',
  //     email: 'hey ur leasu Up!',
  //     notes: 'this buyuilding do be big and red tho'
  //   }
  // });

  return (
    <div>


      
      <Button onClick={() => {
        setDisplayForm((b) => !b); 
        
      }}> add building </Button> 
      {displayForm ? <BuildingForm ss={setDisplayForm} userName={name}/>: ''}
      

      <br/>
      <br/>
      <br/>
      <br/>

      
      <Building />
      

    </div>
  )
}


