import { createTheme } from '@mui/material/styles'

import { palette } from './palette'
import { typography } from './typography'
import { components } from './components'

export const themeOptions = {
    palette,
    typography,
    components,
}

export const theme = createTheme(themeOptions)
