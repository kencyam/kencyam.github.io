import Card from "@mui/material/Card";
import CardPrimaryContent from "@mui/material/Card";
import Headline6 from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Subtitle2 from "@mui/material/Card";
import Body2 from "@mui/material/Card";
import CardActions from "@mui/material/Card";
import CardActionButtons from "@mui/material/Card";
import IconButton from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardActionIcons from "@mui/material/Card";
import MaterialIcon from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

//Can I move this into Cards.tsx and generate when with each?
import Grid from "@mui/material/Grid";

type Props = {
  gridsize?: number;
  title: string;
  description: string;
  url: string;
  buttontext: string;
  author?: string;
  image?: string;
  children?: React.ReactNode;
};

const CustomCard: React.FC<Props> = ({
  gridsize = 4,
  title,
  description,
  image,
  url,
  buttontext,
  author,
  children,
}) => {
  return (
    <Grid size={gridsize}>
      <Card sx={{ maxWidth: 345, mx: "auto" }}>
        <CardMedia component="img" height="140" image={image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <a href={url} rel="noopener noreferrer" target="_blank">
              {buttontext}
            </a>
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CustomCard;
