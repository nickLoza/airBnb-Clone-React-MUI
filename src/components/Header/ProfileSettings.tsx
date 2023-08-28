import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
// react icons
import { BsGlobe } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaRegUserCircle } from 'react-icons/fa';
import { flexCenter } from '../../themes/commonStyles';

const ProfileSettings = () => {
  return (
    <Box sx={flexCenter}>
      <Box sx={{
        fontSize: 16,
        fontWeight: 600
      }}>
        <Link href="#"> Poné tu Airbnb</Link>
      </Box>
      <Stack>
        <Button>
          <BsGlobe size={19} />
        </Button>
        <Button
          sx={{
            borderRadius: 10,
            border: '1px solid #ddd',
          }}
        >
          <Stack>
            <AiOutlineMenu size={19} />
            <FaRegUserCircle size={19} />
          </Stack>
        </Button>
      </Stack>
    </Box>
  );
};

export default ProfileSettings;