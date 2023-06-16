import React from 'react'
import { Link } from "react-router-dom"

export default function UnitDetails() {
  return (
    <div>
      UnitDetails
      <Link to="../Buildings" style={{textDecoration: 'none'}}>
        Back to buildings
      </Link>


    </div>
  )
}
