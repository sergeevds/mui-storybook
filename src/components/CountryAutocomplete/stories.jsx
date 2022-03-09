import React from 'react'

import { CountryAutocomplete } from '.'
import { countries } from '../../constants/countries'

export default {
    title: 'components/molecules/Autocomplete/Countries',
    component: CountryAutocomplete,
    decorators: [
        (Story) => (
            <div style={{ width: 400 }}>
                <Story />
            </div>
        ),
    ],
}

export const Template = (args) => <CountryAutocomplete {...args} />

Template.args = {
    defaultValue: countries[0],
}
