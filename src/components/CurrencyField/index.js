import React, { useState } from 'react'

import TextField from '@mui/material/TextField'

import { currencies } from './currencies'
import { CurrencySelect } from './CurrencySelect'

export const CurrencyField = ({
    defaultValue = 'EUR',
    placeholder = '0',
    options = currencies,
    InputProps = {},
    ...props
}) => {
    const [currency, setCurrency] = useState(defaultValue)

    const handleCurrencyChange = (event) => {
        setCurrency(event.target.value)
    }

    return (
        <TextField
            type="number"
            InputProps={{
                startAdornment: (
                    <CurrencySelect defaultValue={defaultValue} options={options} onChange={handleCurrencyChange} />
                ),
                ...InputProps,
            }}
            {...props}
        />
    )
}
