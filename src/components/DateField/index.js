import React, { useState } from 'react'

import DesktopDatePicker from '@mui/lab/DesktopDatePicker'
import DateAdapter from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'

import TextField from '@mui/material/TextField'

export const RenderInput = (props) => <TextField {...props} />

export const DateField = (props) => {
    const [dateValue, setDateValue] = useState(new Date())

    const handleDateChange = (newValue) => {
        setDateValue(newValue)
    }

    return (
        <LocalizationProvider dateAdapter={DateAdapter}>
            <DesktopDatePicker
                inputFormat="MM/dd/yyyy"
                value={dateValue}
                onChange={handleDateChange}
                renderInput={RenderInput}
            />
        </LocalizationProvider>
    )
}
