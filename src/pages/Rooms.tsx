import { Box, Button, Container, Typography, Grid } from "@mui/material";
import { AiOutlineHeart, AiOutlineUpload } from "react-icons/ai";
import { useParams } from "react-router-dom";
import cards from "../db/roomsDB.json";
import { useMemo } from "react";

function Room() {

	const params = useParams();

	const currentCard = useMemo(() => {
    	return cards.find(card => String(card.id) === params.id);
  }, [cards, params.id]);

	if (!currentCard) {
    	return <div>No card found for the given ID.</div>;
  	}


	return (
		<Container sx={{
			my: 2
		}} maxWidth="xl">
			<Box sx={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "flex-end",
				py: 1
			}}>
				<Box>
					<Typography sx={{
						fontSize: "1.8rem",
						fontWeight: "600"
					}}>
						{currentCard.name}
					</Typography>
					<Typography sx={{
						fontSize: "1.1rem"
					}}>
						{currentCard.location}
					</Typography>
				</Box>

				<Box>
					<Button startIcon={<AiOutlineUpload />}>
					Compartir
					</Button>
					<Button startIcon={<AiOutlineHeart />}>
						Guardar
					</Button>
				</Box>
			</Box>

			<Gallery images={currentCard.images}/>

			<Box sx={{
				mt: 3,
				display: "flex",
				justifyContent: "space-between"
			}}>
				<Box>
					<Box>
					<Typography sx={{
						fontSize: {xs: "1.5rem", md: "1.9rem"}
					}}>
					Anfitrión: Rafael
					</Typography>
					<Typography sx={{
						fontSize: {xs: "1rem", md: "1.2rem"},
						color: "#555"
					}}>
						2 huéspedes - 1 dormitorio - 1 cama - 1 baño
					</Typography>
					</Box>
					<Box>
						<Typography sx={{
							fontSize: {xs: "1.2rem", md: "1.5rem"},
							mt: 2
						}}>
							{currentCard.description}
						</Typography>
					</Box>
					</Box>

				<Box sx={{
					bg: "#fff",
					border: "1px solid #000",
					p: 2,
					borderRadius: "17px",
					textAlign: "center",
					minWidth: {xs: 150, md: 300},
					height: 100
				}}>
					<Typography sx={{
						fontSize: {xs: "1.4rem", md: "1.7rem"}
					}}>
						${currentCard.price} USD
					</Typography>

					<Button size="large" variant="outlined" sx={{
						backgroundColor: "#E41D57",
						color: "#fff",
						fontSize: "1.2rem",
						"&:hover":{
							backgroundColor: "#F63F79",
						}
					}}>
						Reservar
					</Button>

				</Box>
			</Box>


		</Container>
	)
}

export default Room

type GalleryTypes = {
	images: string[]
}

function Gallery({images}: GalleryTypes) {
  return (
    <Grid container spacing={2} justifyContent="center">
      {/* First Image (Bigger) */}
      <Grid item xs={6} md={8}>
        <img
          src={images[0]}
          alt="Image 1"
          style={{ width: '100%' , height: "100%", objectFit: "cover"}}
        />
      </Grid>

      {/* Second and Third Images */}
      <Grid item xs={6} md={4}>
        <Grid container spacing={2}>
          {/* Second Image */}
          <Grid item xs={12}>
            <img
              src={images[1]}
              alt="Image 2"
              style={{ width: '100%', height: "100%", objectFit: "cover" }}
            />
          </Grid>
          
          {/* Third Image */}
          <Grid item xs={12}>
            <img
              src={images[2]}
              alt="Image 3"
              style={{ width: '100%', height: "100%", objectFit: "cover" }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}