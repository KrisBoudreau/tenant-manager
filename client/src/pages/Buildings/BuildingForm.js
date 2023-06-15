import React from 'react'
import { Button } from '@mui/material'
import {useForm} from 'react-hook-form'
import axios from 'axios'


export default function BuildingForm( {ss, userName} ) {

  const {register, handleSubmit, control} = useForm()

  return (
    <div>
      
      <form onSubmit={handleSubmit(
        (data)=> {
          alert(JSON.stringify(data));
          axios({
            method: 'post',
            url: 'http://localhost:3001/Buildings',
            data: {
              name: data.name,
              creator: userName,
              notes: 'this is a building'
            }
          });
        }
        
      )}>
        <label>
          Building Name 
          <input {...register("name")}/>

        </label>

        <input type="submit" value="submit"/>
      
      </form>
          

  
      
      
      
    </div>
  )
}
