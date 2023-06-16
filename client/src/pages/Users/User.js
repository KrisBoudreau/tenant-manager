import React from 'react'
import { Button, Paper } from '@mui/material'

export default function User( { name, role, email, currentUserRole } ) {
  return (
    <Paper sx={{border:1, margin:1}}>
        { name } <br/>
        { role } <br/>
        { email } <br/>
        <Button> Edit User</Button>
        <Button> Delete User </Button>
    </Paper>
  )
}
