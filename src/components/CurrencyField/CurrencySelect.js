import styled from '@emotion/styled'
import { Select, MenuItem } from '@mui/material'

import React from 'react'

const StyledSelect = styled(Select)`
    fieldset {
        border: none;
    }
    ,
    svg {
        color: #fff;
    }
`

export const CurrencySelect = ({ options, ...props }) => {
    return (
        <StyledSelect {...props}>
            {options.map(({ value, label }) => (
                <MenuItem key={value} value={value}>
                    {label}
                </MenuItem>
            ))}
        </StyledSelect>
    )
}
