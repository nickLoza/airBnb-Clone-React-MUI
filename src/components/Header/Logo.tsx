import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// react icons
import { FaAirbnb } from 'react-icons/fa';
import { flexCenter } from '../../themes/commonStyles';
import { pink } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';

const Logo = () => {
  const navigate = useNavigate();

  function handleOnClick(){
    navigate("/")
  }
  return (
    <Box sx={{
      ...flexCenter,
      cursor: "pointer"
    }}
    onClick={()=>handleOnClick()}>
      <FaAirbnb size={40} color={pink[500]} />
      <Typography
        sx={{
          ml: 1,
          color: (theme) => theme.palette.secondary.main,
          fontSize: '20px',
          fontWeight: 'bold',
          display: {xs: "none", lg: "block"},
        }}
        component="h3"
      >
        airBnB
      </Typography>
    </Box>
  );
};

export default Logo;