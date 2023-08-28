import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { IoSearchCircleSharp } from 'react-icons/io5';
import { pink } from '@mui/material/colors';
import { flexCenter } from '../../themes/commonStyles';

import { useStateStore } from '../../store/stateStore';

const choices = [
  { id: 1, text: 'A cualquier lugar' },
  { id: 2, text: 'semana (en cualquier fecha)' },
  { id: 3, text: '¿Cuántos?', withIcon: true },
];

const LocationSearch = () => {
  const isSearchOpen = useStateStore((state) => state.toggleSearch)
  const toggleSearch = useStateStore((state) => state.toggleFn);


  return (
      <>
        {!isSearchOpen && (
          <Button
            variant="outlined"
            onClick={toggleSearch}
            sx={{
              ...flexCenter,
              width: { xs: '42vw', lg: 476 },
              ml: { xs: 0, lg: 20 },
              borderRadius: 20,
              maxHeight: "100%",
              px: 2,
            }}
          >
            {choices.map((choice) => (
              <Box sx={{ ...flexCenter }} key={choice.id}>
                <Typography
                  sx={{
                    color: '#00000090',
                    fontWeight: '600',
                    fontSize: 14,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    maxWidth: { xs: 120, lg: 200 },
                  }}
                >
                  {choice.text}
                </Typography>
                {choice.withIcon ? (
                  <Box
                    sx={{
                      ml: 1,
                      mt: 1,
                      mr: 1,
                    }}
                  >
                    <IoSearchCircleSharp color={pink[500]} size={32} />
                  </Box>
                ) : (
                  <Box
                    sx={{
                      backgroundColor: '#000',
                      height: 24,
                      width: '1px',
                      mx: 1,
                    }}
                  />
                )}
              </Box>
            ))}
          </Button>
        )}
      </>
  );
};

export default LocationSearch;
