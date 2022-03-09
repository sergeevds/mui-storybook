import { Box } from '@mui/material'
import { FlagImage } from '../Images/FlagImage'

export const RenderOption = (props, option) => (
    <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
        <FlagImage code={option.code} />
        {option.label} ({option.code}) + {option.phone}
    </Box>
)
