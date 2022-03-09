import * as React from 'react'
import TextField from '@mui/material/TextField'
import MuiAutocomplete from '@mui/material/Autocomplete'
import { Box } from '@mui/material'

export const Autocomplete = (props) => {
    return (
        <MuiAutocomplete
            autoHighlight
            getOptionLabel={(option) => option.label}
            renderInput={(params) => <TextField {...params} />}
            renderOption={(props, option) => (
                <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                    {option.label}
                </Box>
            )}
            {...props}
        />
    )
}
