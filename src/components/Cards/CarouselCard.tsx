import { useState } from 'react'; 
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { AiFillStar, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { FaRegHeart } from 'react-icons/fa';
import {
  flexBetween,
  dFlex,
  fixedIcon,
} from '../../themes/commonStyles';
import { CardsDBType } from '../../modules/types';

const CarouselCard = ({ location }: { location: CardsDBType }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredItem, setHoveredItem] = useState<number|null>(0);

  function nextImg(e: React.MouseEvent){
    if(activeStep < 2){
      setActiveStep(activeStep+1)
    }else{
      setActiveStep(0)
    }
    e.stopPropagation();
  }
  function prevImg(e: React.MouseEvent){
    if(activeStep > 0){
      setActiveStep(activeStep-1)
    }else{
      setActiveStep(2)
    }
    e.stopPropagation();
  }

  function hanleOnMouseOver(index:number){
    setHoveredItem(index)
  }

  function handleOnMouseOut(){
    setHoveredItem(null)
  }

  function handleOnClickCard(id:number){
    const newWindow = window.open(`/rooms/${id}`, '_blank');
    if (newWindow) {
      newWindow.focus();
    }
  }

  return (
    <Box
      className="carouselCard"
      sx={{
        flexGrow: 1,
        position: 'relative',
        width: {xs: "80%", sm: "240px", md: "260px"},
        m: "auto",
        userSelect: 'none',
        cursor: "pointer"
      }}
      onMouseOver={()=>hanleOnMouseOver(location.id)}
      onMouseLeave={()=>handleOnMouseOut()}
    >
      <Box sx={fixedIcon}>
        <FaRegHeart size={24} color="#fff" />
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          height: 257
        }}
        onClick={()=>handleOnClickCard(location.id)}
      >
        {location.images.map((item,i)=>(
          <img key={i} style={{
            display: activeStep === i ? "block" : "none",
            borderRadius: 18,
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }} src={item} alt={location.location} height={250}/>
        ))}
      </Box>
      {/*swap images*/}
      <Box sx={{
        position: "absolute",
        width: "90%",
        bottom: 'calc(55%)',
        left: "5%",
        display: {
          xs: "flex",
          md: "none",
        },
        ...(hoveredItem === location.id && { display: "flex" }),
        justifyContent: "space-between"
      }}>
        <Box sx={{
          display: "flex",
          alignItems: "center",
          color: "#fff",
          backgroundColor: "#00000090",
          borderRadius: "18px",
          p: 1,
          "&:hover":{
            color: "#000"
          }
        }}onClick={prevImg}>
          <AiOutlineLeft size={25}/>
        </Box>
        <Box sx={{
          display: "flex",
          alignItems: "center",
          color: "#fff",
          backgroundColor: "#00000090",
          borderRadius: "18px",
          p: 1,
          "&:hover":{
            color: "#000"
          }
        }}onClick={nextImg}>
          <AiOutlineRight size={25} />
        </Box>
      </Box>
      <Box sx={flexBetween}>
        <Box sx={{ mt: 2 }}>
          <Typography component="h3" sx={{
            fontSize: "1rem",
            fontWeight: 600
          }}> {location.location}</Typography>
          <Typography component="h4" sx={{
            color: "#444"
          }}> A 22 kilómetros de distancia</Typography>
          <Typography component="h5" sx={{
            fontSize: "1rem",
            fontWeight: 600
          }}> ${location.price} </Typography>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Box sx={dFlex}>
            <AiFillStar size={18} />
            <Typography component="h5"> {location.rating}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CarouselCard;
