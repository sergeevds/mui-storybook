import { TextField, Typography } from '@mui/material'

import Search from '@mui/icons-material/Search'
import { useState } from 'react'

export const SearchField = ({ InputProps, ...props }) => (
    <TextField
        InputProps={{
            startAdornment: <Search />,
            ...InputProps,
        }}
        {...props}
    />
)

export const FieldWithCounter = ({
    defaultValue = '',
    limit,
    onChange,
    inputProps = {},
    InputProps = {},
    ...props
}) => {
    const [value, setValue] = useState(defaultValue)

    const onChangeHandler = (event) => {
        setValue(event.target.value)
        if (onChange) {
            onChange(event)
        }
    }

    return (
        <TextField
            value={value}
            inputProps={{
                maxLength: limit,
                ...inputProps,
            }}
            InputProps={{
                endAdornment: (
                    <Typography sx={{ color: '#fff' }}>
                        {value.length}/{limit}
                    </Typography>
                ),
                ...InputProps,
            }}
            onChange={onChangeHandler}
            {...props}
        />
    )
}
