import { Alert } from '@mui/material'
import React from 'react'

const Alerts = ({massage,varient}) => {
  return (
    <div>
        <Alert severity={'info' || varient}>
            {massage}
        </Alert>
    </div>
  )
}

export default Alerts