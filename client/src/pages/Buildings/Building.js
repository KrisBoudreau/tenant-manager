import React from 'react'
import { Accordion, AccordionSummary, Typography, AccordionDetails, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import UnitForm from './UnitForm';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Unit from './Unit';
import { Paper } from '@mui/material';
import { grey } from '@mui/material/colors';






export default function Building( {name, buildingName, id} ) {


  const [unitForm, setUnitForm] = useState(false);
  const [refreshForNewUnit, setRefreshForNewUnit] = useState(false);
  const [units, setUnits] = useState('none');

  useEffect(() => {
    async function fetchUnits() {
      const request  = await axios.get(`http://localhost:3001/units/${buildingName}`)
      setUnits(r => request.data);
    }
    fetchUnits();
    setRefreshForNewUnit(r => false);

  }, [refreshForNewUnit]);
  if (units === 'none'){
    return <h1>loading</h1>
  }

  return (


    <div>
       
      <Accordion 
        sx={
          {backgroundColor: 'lightblue',
          border: 1,
          m: 1
      }}
      >

        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant='h6'>{buildingName}</Typography>
        </AccordionSummary>


        <AccordionDetails>
          <Typography>
            Units
          </Typography>

          <Button onClick={() => {
            setUnitForm((b) => !b); 
        
          }}> {unitForm ? 'Close form': 'Create Unit'} </Button> 
          {unitForm ? <UnitForm buildingName={buildingName} creator={name} setRefreshForNewUnit={setRefreshForNewUnit}/> : ''}


          
          { units.map(unit => {
            
            return (
              <Unit unitNumber={unit.unitNumber} tenantName={unit.tenantName}/>
            )
          })}

        </AccordionDetails>

        <Button 
          onClick={() => {
            axios.delete(`http://localhost:3001/buildings/${id}`);
            setRefreshForNewUnit(r => true);
          }}

          sx={{color: 'red', backgroundColor: 'navajowhite', margin: 2}}> 
          
        Delete Building </Button>


      </Accordion>
      



    </div>

  )
}
