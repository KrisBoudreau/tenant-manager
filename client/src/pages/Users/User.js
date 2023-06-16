import React from 'react'
import { Button, Paper } from '@mui/material'
import axios from 'axios'
import {useForm} from 'react-hook-form'
import { useState, useEffect } from 'react'
import EditUserForm from './EditUserForm'

export default function User( { name, role, email, currentUserRole } ) {

  const [editForm, setEditForm] = useState(false);
  const {register, handleSubmit } = useForm();

  useEffect(() => {
          

  }, [editForm])

  return (
    <Paper sx={{border:1, margin:1}}>
        Name: { name } <br/>
        Role: { role } <br/>
        Emails: { email } <br/>
        
        <Button onClick={() => {
          setEditForm(b => !b);
        }}> 
          Edit User
        </Button>
        <Button> Delete Building </Button>
        <br/>

        {editForm ? 
        <EditUserForm/> : ''}
        



    </Paper>
  )
}
