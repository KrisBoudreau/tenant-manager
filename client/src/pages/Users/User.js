import React from 'react'
import { Button } from '@mui/material'

export default function User( { aname, arole, aemail, urole } ) {
  return (
    <div>
        { aname } <br/>
        { arole } <br/>
        { aemail } <br/>
        <Button> Edit role as {urole}</Button>
        <Button> Edit name </Button>
        <Button>delete User </Button>
        


    </div>
  )
}
