import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";
type Props = {
  gridsize?: number;
  children: React.ReactNode;
  
}
const CustomCardGrid: React.FC<Props> = ({ gridsize,children }) => {
  return (
    <Box sx={{ flexGrow: 1}}>
        <Grid container spacing={2}>
            {children}
        </Grid>
    </Box>
  )
}
export default CustomCardGrid