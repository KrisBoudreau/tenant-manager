import React, { useEffect, useState } from 'react'
import axios from 'axios';
import User from './User.js'
import { Paper } from '@mui/material'


export default function Users( {name, role, email} ) {



  const [users, setUsers] = useState('none');
  useEffect(() => {
    async function fetchUsers() {
      const request  = await axios.get('http://localhost:3001/users')
      setUsers(r => request.data);
    }
    fetchUsers();

  }, []);

  if (users === 'none'){
    return <h1>loading</h1>
  }

  return (
    <Paper sx={{border:1, margin:1}}>
      
      { users.map(user => {
          return (
            <Paper sx={{border:1, margin:1}}>
            <User aname={user.name} aemail={user.email} arole={user.role} urole={role}/>
            </Paper>
          )
        })}
    
    </Paper>
  )
}
