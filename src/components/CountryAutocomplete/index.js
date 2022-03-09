import Autocomplete from '@mui/material/Autocomplete'

import { RenderOption } from './RenderOption'
import { RenderInput } from './RenderInput'
import { countries } from '../../constants/countries'

export const CountryAutocomplete = ({ defaultValue, ...props }) => {
    return (
        <Autocomplete
            autoHighlight
            getOptionLabel={(option) => option.label}
            options={countries}
            renderInput={RenderInput}
            renderOption={RenderOption}
            defaultValue={defaultValue}
            {...props}
        />
    )
}
