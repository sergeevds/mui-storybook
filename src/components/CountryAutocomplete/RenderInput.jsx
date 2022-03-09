import TextField from '@mui/material/TextField'

export const RenderInput = ({ inputProps = {}, ...props }) => (
    <TextField
        label="Choose a country"
        inputProps={{
            ...inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
        }}
        {...props}
    />
)
