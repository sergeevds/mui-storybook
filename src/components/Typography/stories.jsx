import React from 'react'

import Typography from '@mui/material/Typography'

import { colorOptions, color } from '../stories/argTypes'

export default {
    title: 'components/atoms/Typography',
    component: Typography,
    argTypes: {
        color,
        variant: {
            options: ['h1', 'h2', 'h3', 'h4', 'h5', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption'],
            control: { type: 'radio' },
        },
        children: {
            control: { type: 'text' },
            defaultValue: 'Almost before we knew it, we had left the ground.',
        },
    },
}

export const Template = (args) => <Typography {...args} />

export const Variants = (args) => {
    const variants = ['h1', 'h2', 'h3', 'h4', 'h5', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption']
    return variants.map((variant) => <Typography variant={variant} {...args} />)
}

export const Colors = (args) => {
    return colorOptions.map((color) => <Typography color={color} {...args} />)
}
