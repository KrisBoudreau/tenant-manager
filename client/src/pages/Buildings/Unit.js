import React from 'react'
import { Paper, Card, Button } from '@mui/material'
import { Link } from "react-router-dom"
import { blue } from '@mui/material/colors'


export default function Unit( {unitNumber, tenantName} ) {
  return (
    <Paper elevation={2} 
      sx={{backgroundColor: 'lightgoldenrodyellow', margin: 1}}>

      Number: {unitNumber} <br/>
      Tenant Name: {tenantName}
      <br/>


      <Link to="/Units" style={{textDecoration: 'none'}}>
        Show Unit Unit Details
      </Link>

      <Button>edit</Button>
      <Button sx={{color: 'red', backgroundColor: 'navajowhite'}}>Delete</Button>
      
    </Paper>
  )
}
