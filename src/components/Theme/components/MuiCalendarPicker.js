import { palette } from '../palette'

export const MuiCalendarPicker = {
    styleOverrides: {
        root: {
            backgroundColor: 'transparent',
            '& .MuiButtonBase-root': {
                backgroundColor: 'inherit',
                color: '#fff',
            },
            '& .MuiTypography-root': {
                color: palette.text.main,
            },
        },
    },
}
