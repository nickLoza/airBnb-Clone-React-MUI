import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CarouselCard from './CarouselCard';
import cards from "../../db/roomsDB.json";

const index = () => {

  return (
    <Box sx={{ mx: 2, maxWidth: 2000, m:"auto" }}>
      <Grid container spacing={2} justifyContent="center">
        {cards.map((location) => {
          return (
            <Grid key={location.id} item>
              <CarouselCard location={location} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default index;
