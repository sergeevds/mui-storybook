import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from '../src/components/Theme'

const withThemeProvider = (Story, context) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Story {...context} />
        </ThemeProvider>
    )
}

export const decorators = [withThemeProvider]

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}
