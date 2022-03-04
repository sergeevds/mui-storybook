export const typography = {
    fontFamily: [
        'Montserrat',
        'Roboto',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    allVariants: {
        fontWeight: 800,
    },
    h1: {
        fontFamily: 'Montserrat',
        fontSize: 64,
        lineHeight: 1.25,
        '@media (max-width:900px)': {
            fontSize: 32,
            lineHeight: 2.125,
        },
    },
    h2: {
        fontFamily: 'Montserrat',
        fontSize: 50,
        lineHeight: 1.28,
        '@media (max-width:900px)': {
            fontSize: 28,
            lineHeight: 2.28,
        },
    },
    h3: {
        fontFamily: 'Montserrat',
        fontSize: 42,
        lineHeight: 1.333,
        '@media (max-width:900px)': {
            fontSize: 24,
            lineHeight: 2.333,
        },
    },
    h4: {
        fontFamily: 'Montserrat',
        fontSize: 34,
        lineHeight: 1.235,
        '@media (max-width:900px)': {
            fontSize: 20,
            lineHeight: 2.1,
        },
    },
    h5: {
        fontFamily: 'Montserrat',
        fontSize: 24,
        lineHeight: 1.333,
        '@media (max-width:900px)': {
            fontSize: 18,
            lineHeight: 1.777,
        },
    },
    subtitle1: {
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: 32,
        lineHeight: 1.125,
        '@media (max-width:900px)': {
            fontSize: 20,
            lineHeight: 1.8,
        },
    },
    subtitle2: {
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: 24,
        lineHeight: 1.28,
        '@media (max-width:900px)': {
            fontSize: 18,
            lineHeight: 1.66,
        },
    },
    body1: {
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: 20,
        lineHeight: 1.4,
        '@media (max-width:900px)': {
            fontSize: 16,
            lineHeight: 1.71,
        },
    },
    body2: {
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 1.5,
        '@media (max-width:900px)': {
            fontSize: 14,
            lineHeight: 1.71,
        },
    },
    caption: {
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.43,
        '@media (max-width:900px)': {
            fontSize: 12,
            lineHeight: 2,
        },
    },
    button: {
        fontFamily: 'Roboto',
        fontSize: 20,

        '@media (max-width:900px)': {
            fontSize: 16,
        },
    },
}
