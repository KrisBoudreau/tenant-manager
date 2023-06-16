import React from 'react'
import { Paper, Card, Button } from '@mui/material'
import { Link } from "react-router-dom"


export default function Unit( {unitNumber, tenantName} ) {
  return (
    <Paper elevation={2} 
      sx={{backgroundColor: 'lightgoldenrodyellow', margin: 1/2}}>

      Number: {unitNumber} <br/>
      Tenant Name: {tenantName}

      <Link to="/Units">
        Show Unit Unit Details
      </Link>
      
    </Paper>
  )
}
