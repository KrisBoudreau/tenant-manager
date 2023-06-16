import React from 'react'
import { Button } from '@mui/material'
import {useForm} from 'react-hook-form'
import axios from 'axios'

export default function UnitForm( { userName, buildingName, setRefreshForNewUnit }) {


    const {register, handleSubmit } = useForm();

    return (
        <div>
            <form onSubmit={handleSubmit(
                (data)=> {
                    axios({
                        method: 'post',
                        url: `http://localhost:3001/Units`,
                        data: {
                        buildingName: buildingName,
                        creator: userName,
                        unitNumber: data.unitNumber,
                        tenantName: data.tenantName
                        }
                    });
                    setRefreshForNewUnit(r => true);

                }
            )}>

            <label>
                Unit number
                <input {...register("unitNumber")}/>
            </label>

            <label>
                Tenant name
                <input {...register("tenantName")}/>
            </label>

            <input type="submit" value="submit"/>
        </form>
            
            
            
        </div>
    )
}
