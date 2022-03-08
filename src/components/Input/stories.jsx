import React from 'react'

import TextField from '@mui/material/TextField'
import { FieldWithCounter, SearchField } from '.'

export default {
    title: 'components/atoms/Input',
    component: TextField,
    argTypes: {
        multiline: {
            options: [true, false],
            control: { type: 'radio' },
            defaultValue: false,
        },
        maxRows: {
            control: { type: 'number' },
            defaultValue: 4,
        },
        label: {
            control: { type: 'text' },
            defaultValue: 'Label',
        },
        placeholder: {
            control: { type: 'text' },
            defaultValue: 'Placeholder',
        },
    },
}

export const Template = (args) => <TextField {...args} />

Template.args = {}

export const Search = (args) => <SearchField />

export const WithCounter = (args) => <FieldWithCounter limit={100} />
