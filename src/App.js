import { ThemeProvider } from '@mui/material/styles'
import { Typography } from '@mui/material'

import { theme } from './components/Theme'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Typography variant="h1">Almost before we knew it, we had left the ground.</Typography>
            <Typography variant="h2" color="primary">
                Almost before we knew it, we had left the ground.
            </Typography>
            <Typography variant="subtitle1" color="secondary">
                Almost before we knew it, we had left the ground.
            </Typography>
            <Typography>Almost before we knew it, we had left the ground.</Typography>
        </ThemeProvider>
    )
}

export default App
