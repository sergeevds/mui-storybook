import React from 'react'

import Select from '@mui/material/Select'
import { MenuItem } from '@mui/material'

const options = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
]

export default {
    title: 'components/atoms/Select',
    component: Select,
    argTypes: {},
}

export const Template = (args) => (
    <Select defaultValue={options[0].value} {...args}>
        {options.map((option) => (
            <MenuItem value={option.value}>{option.label}</MenuItem>
        ))}
    </Select>
)

Template.args = {}

export const NoDefaultValue = (args) => (
    <Select {...args}>
        {options.map((option) => (
            <MenuItem value={option.value}>{option.label}</MenuItem>
        ))}
    </Select>
)
