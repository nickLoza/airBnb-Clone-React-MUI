import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {
  flexBetweenCenter,
  displayOnDesktop,
  flexBetween,
} from '../../themes/commonStyles';
// components
import Logo from './Logo';
import LocationSearch from './LocationSearch';
import ProfileSettings from './ProfileSettings';
import MobileSearch from './MobileSearch';
import SearchBarOpened from './SearchBarOpened';

const index = () => {
  return (
    <Box
      sx={{
        ...flexBetweenCenter,
        minHeight: 70,
        flexDirection: 'column',
        borderBottom: '1px solid #ddd',
        pt: 1,
        position: "fixed",
        width: "100%",
        zIndex: 1000,
        top: 0,
        left: 0,
        backgroundColor: "#fff"
      }}
    >
      <Container sx={{
      	maxWidth: 2520
      }} maxWidth={false}>
        <Box
          sx={{
            ...flexBetween,
            alignItems: "center",
            px: 2
          }}
        >
          <Box sx={displayOnDesktop}>
            <Logo />
          </Box>
          <Box sx={displayOnDesktop}>
            <LocationSearch />
          </Box>
          <Box sx={displayOnDesktop}>
            <ProfileSettings />
          </Box>
          <Box sx={{ 
            display: { xs: 'flex', md: 'none' },
            mx: "auto"
           }}>
            <MobileSearch />
          </Box>
        </Box>
      </Container>
      <Box sx={displayOnDesktop}>
            <SearchBarOpened/>
      </Box>
    </Box>
  );
};

export default index;