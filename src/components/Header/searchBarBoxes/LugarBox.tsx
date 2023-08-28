import { Box, Grid, Typography } from "@mui/material"

import flexibleImg from "../../../assets/images/searchBoxes/world.jpg";
import europeImg from "../../../assets/images/searchBoxes/europe.webp";
import spainImg from "../../../assets/images/searchBoxes/spain.webp";
import usaImg from "../../../assets/images/searchBoxes/usa.webp";
import italyImg from "../../../assets/images/searchBoxes/italy.webp";
import middleEastImg from "../../../assets/images/searchBoxes/middle-east.webp";


const boxesData = [
	{text: "Búsqueda flexible", img: flexibleImg},
	{text: "Europa", img: europeImg},
	{text: "España", img: spainImg},
	{text: "Estados Unidos", img: usaImg},
	{text: "Italia", img: italyImg},
	{text: "Oriente Medio", img: middleEastImg},
]

const boxStyle = {
	    width: '122px',
	    height: '122px',
	    display: 'flex',
	    justifyContent: 'center',
	    alignItems: 'center',
	    fontSize: '16px',
	    fontWeight: 'bold',
	    background: '#f0f0f0',
	  };

type LugarBoxType = {
	handleOnClickBox: (text: String) => void
}

function lugarBox({handleOnClickBox}: LugarBoxType) {

	return (
		<Box
		sx={{
			position: 'absolute',
			top: '100px', 
			left: 0,
			width: '466px',
			height: '478px', 
			backgroundColor: '#fff', 
			zIndex: 100,
			borderRadius: "18px",
		}}>
			<Typography sx={{
				px: 4,
				py: 3,
				fontSize: "1rem",
				fontWeight: "600"
			}}>
				Búsqueda por región
			</Typography>
			<Grid 	
				sx={{
					justifyContent: "center",
				}}
				container 
				spacing={2}>
				{boxesData.map((item,i)=>(
					<Grid item key={i}>
						<Box sx={{
							...boxStyle,
							border: '1px solid transparent',
							borderRadius: "18px",
						    transition: 'border-color 0.2s',
						    '&:hover': {
						      borderColor: '#000',
						    },}}
						    onClick={()=>handleOnClickBox(item.text)}>
							<img
					            src={item.img}
					            alt={item.text}
					            style={{ 
					            	maxWidth: '100%', 
					            	maxHeight: '100%',
					            	borderRadius: "18px"
					            }}/>
						</Box>
						<Typography>
							{item.text}
						</Typography>
					</Grid>
				))}
			</Grid>
		</Box>
		)
}

export default lugarBox