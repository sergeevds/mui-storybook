import React from 'react'

import { Autocomplete } from '.'

export default {
    title: 'components/molecules/Autocomplete',
    component: Autocomplete,
    decorators: [
        (Story) => (
            <div style={{ width: 400 }}>
                <Story />
            </div>
        ),
    ],
}

const options = [
    { value: 1, label: 'Option 1' },
    { value: 2, label: 'Option 2' },
    { value: 3, label: 'Option 3' },
]
export const Template = (args) => <Autocomplete getOptionLabel={(option) => option.label} options={options} {...args} />

Template.args = {}
