import { palette } from '../palette'

export const MuiOutlinedInput = {
    styleOverrides: {
        root: {
            borderRadius: 14,
            backgroundColor: palette.background.main,
        },
        input: {
            color: palette.text.main,
            fontFamily: 'Roboto',
            fontWeight: 500,
        },
    },
}
