import { Image } from '.'

export const FlagImage = ({ code }) => (
    <Image
        sx={{ width: 20 }}
        src={`https://flagcdn.com/w20/${code.toLowerCase()}.png`}
        srcSet={`https://flagcdn.com/w40/${code.toLowerCase()}.png 2x`}
    />
)
