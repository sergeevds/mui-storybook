import React from 'react'
import Button from '@mui/material/Button'

import { colorOptions, color } from '../stories/argTypes'
import { OverviewBox } from '../stories/overviewBox'

export default {
    title: 'components/atoms/Button',
    component: Button,
    argTypes: {
        color,
        variant: {
            options: ['contained', 'outlined', 'text'],
            control: { type: 'radio' },
        },
        size: {
            options: ['small', 'medium', 'large'],
            control: { type: 'radio' },
        },
        children: {
            control: { type: 'text' },
            defaultValue: 'button',
        },
    },
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
    color: 'primary',
    children: 'Template Button',
}

const ButtonOverviewList = ({ propKey, propValues, children, ...args }) => {
    return propValues.map((prop) => (
        <OverviewBox key={prop}>
            <Button {...{ [propKey]: prop, ...args }}>
                {prop} {children}
            </Button>
        </OverviewBox>
    ))
}

export const Variants = ({ variant, ...args }) => {
    const variants = ['contained', 'outlined', 'text']
    return <ButtonOverviewList propKey="variant" propValues={variants} {...args} />
}

export const Colors = ({ color, ...args }) => {
    return <ButtonOverviewList propKey="color" propValues={colorOptions} {...args} />
}

Colors.args = {
    variant: 'contained',
}

export const Sizes = ({ size, ...args }) => {
    const sizes = ['small', 'medium', 'large']
    return <ButtonOverviewList propKey="size" propValues={sizes} {...args} />
}

Sizes.args = {
    variant: 'contained',
    color: 'primary',
}
