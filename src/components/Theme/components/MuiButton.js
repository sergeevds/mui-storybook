export const MuiButton = {
    styleOverrides: {
        root: {
            textTransform: 'none',
            padding: '12px 24px',

            borderRadius: 14,
            minWidth: 140,

            '@media (max-width:900px)': {
                borderRadius: 10,
                minWidth: 100,
            },
        },
    },
}
