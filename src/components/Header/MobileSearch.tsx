import IconButton from '@mui/material/IconButton';
import { FaSearch } from 'react-icons/fa';
import { VscSettings } from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField } from '@mui/material';
import { useState } from 'react';

const MobileSearch = () => {

  const [ textFieldValue, setTextFieldValue ] = useState("");

  const navigate = useNavigate();

  function handleOnClickSearch(){
    navigate(`/search/${textFieldValue? textFieldValue : "Busqueda Flexible"}/1/1/1`)
  }

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value !== textFieldValue) {
      setTextFieldValue(e.target.value);
    }
  }
  return (
    <Box
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        minWidth: "80vw",
        maxWidth: 400,
        border: '1px solid #ccc',
        borderRadius: 20,
      }}
    >
      <IconButton sx={{ p: '10px' }}>
        <FaSearch />
      </IconButton>
      <TextField
          value={textFieldValue}
          variant="standard"
          sx={{
            background: "none",
            width: "100%",
          }}
          type="text"
          placeholder="A donde?!"
          onChange={handleOnChange}
        />
      <Button onClick={()=>handleOnClickSearch()} sx={{ fontSize: "1.4rem"}}>
        <VscSettings />
      </Button>
    </Box>
  );
};

export default MobileSearch;