import { ThemeProvider } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import { theme } from '@components/Theme'

function App() {
    const onClickHandler = () => {
        throw 'ON CLICK ERROR'
    }

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
            <Button color="primary" onClick={onClickHandler}>
                CLICK ME
            </Button>
        </ThemeProvider>
    )
}

export default App
