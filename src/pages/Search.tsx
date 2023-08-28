import { Box, Grid } from "@mui/material";
import CarouselCard from "../components/Cards/CarouselCard";

import cards from "../db/roomsDB.json";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Filters from "../components/Filters";

function Search() {
	const params = useParams();
	const [ filteredCards, setFilteredCards] = useState<string>("");

	useEffect(()=>{
		setFilteredCards(params.place!)
		console.log(params)
	},[params])

	function RenderCorrectCards(location: string) {
	  switch (location) {
	    case "Búsqueda flexible":
	      return (
	        <Grid container spacing={2} justifyContent="center">
	          {cards.map((location) => {
	            return (
	              <Grid key={location.id} item>
	                <CarouselCard location={location} />
	              </Grid>
	            );
	          })}
	        </Grid>
	      );
	    case "Europa":
	      return (
	        <Grid container spacing={2} justifyContent="center">
	          {cards.filter(e=> e.location === "Italia" || e.location === "España" || e.location === "Alemania" || e.location === "Irlanda" || e.location === "Polonia").map((location) => {
	            return (
	              <Grid key={location.id} item>
	                <CarouselCard location={location} />
	              </Grid>
	            );
	          })}
	        </Grid>
	      );
	    default:
	      return (
	        <Grid container spacing={2} justifyContent="center">
	          {cards.filter((e) => e.location === location).map((location) => {
	            return (
	              <Grid key={location.id} item>
	                <CarouselCard location={location} />
	              </Grid>
	            );
	          })}
	        </Grid>
	      );
	  }
	}


	return (
		<>
		<Filters/>
		<Box sx={{ mx: 2, maxWidth: 2000, m:"auto" }}>
	      {RenderCorrectCards(filteredCards)}
    	</Box>
    </>
	)
}

export default Search