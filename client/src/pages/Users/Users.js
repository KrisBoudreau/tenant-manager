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
    <div>
      { users.map(user => {
          return (  
            <User 
              name={user.name} 
              email={user.email} 
              role={user.role} 
              currentUserRole={role}
            />
          )
        })}
    </div>
  )
}
