import React from 'react'
import BuildingForm from './BuildingForm';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Building from './Building';
import { Button, Box, Card } from '@mui/material';



export default function Buildings( {name, role, email} ) {

  const [displayForm, setDisplayForm] = useState(false);
  const [refreshForNewBuilding, setRefreshForNewBuilding ]= useState(false);


  //get all buildings
  const [buildings, setBuildings] = useState('none');
  useEffect(() => {
    async function fetchBuildings() {
      const request  = await axios.get('http://localhost:3001/buildings')
      setBuildings(r => request.data);
    }
    fetchBuildings();
    setRefreshForNewBuilding(r => false);

  }, [refreshForNewBuilding]);
  if (buildings === 'none'){
    return <h1>loading</h1>
  }


  return (
    <div>
      
      <Box sx={{backgroundColor: 'lightgoldenrodyellow', margin: 3}}>
        <Button 
          onClick={() => {setDisplayForm((b) => !b);}}
          sx={{
            backgroundColor: 'lightgrey',
            margin: 1,
          }}
        > 
          {displayForm ? 'Close form': 'Create building'} 
        </Button> 
        {displayForm ? <BuildingForm userName={name} setRefreshForNewBuilding={setRefreshForNewBuilding}/>: ''}
      </Box>


      { buildings.map(building => {
        console.log(building);
          return (
            <Building name={name} buildingName={building.name} id={building._id}/>
          )
      })}

    </div>
  )
}


