import CardMedia from '@mui/material/CardMedia'

export const Image = ({ loading = 'lazy', ...props }) => <CardMedia loading={loading} component="img" {...props} />
