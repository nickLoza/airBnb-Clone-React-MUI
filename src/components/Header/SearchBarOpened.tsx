import { useState } from "react";
import { Box, Button, Collapse, TextField, Typography } from "@mui/material";
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs'; // Import Day.js library
import { useStateStore } from "../../store/stateStore";
import { flexCenter } from "../../themes/commonStyles";
import LugarBox from "./searchBarBoxes/LugarBox";
import { useNavigate } from "react-router-dom";

function SearchBarOpened() {
  const [textFieldValue, setTextFieldValue] = useState<String>("");
  const [viajerosValue, setViajerosValue] = useState<String>("");
  const isSearchOpen = useStateStore((state) => state.toggleSearch);
  const toggleSearch = useStateStore((state) => state.toggleFn);

  const [clickedButton, setClickedButton] = useState("");
  const [showAbsoluteBox, setShowAbsoluteBox] = useState(false);

  const [dataForm, setDataForm] = useState({
    dateFrom: dayjs(),
    dateTo: dayjs(),
    selected: -1,
  });

  const navigate = useNavigate();

  function handleOnClick(text: string) {
  setClickedButton((prevClickedButton) => {
    if (text !== prevClickedButton) {
      setShowAbsoluteBox(true);
    }
    return text
  });
}


  function handleOnClickBox(text:String) {
    if (text !== textFieldValue) {
      setTextFieldValue(text);
    }
  }
  function handleClickOutside() {
    setShowAbsoluteBox(false);
    toggleSearch();
    setClickedButton("");
  }

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value !== textFieldValue) {
      setTextFieldValue(e.target.value);
    }
  }
  function handleOnChangeViajeros(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value !== viajerosValue) {
      setViajerosValue(e.target.value);
    }
  }
  function handleOnClickSearch(){
  	navigate(`/search/${textFieldValue? textFieldValue : "Busqueda Flexible"}/${dataForm.dateFrom}/${dataForm.dateTo}/${viajerosValue? viajerosValue : 1}`)
  	handleClickOutside()
  }
  const buttonsData = [
    {
    	id: "1",
      labelText: "Lugar",
      placeholderText: "Explorar destinos",
      element: (
        <TextField
          value={textFieldValue}
          variant="standard"
          sx={{
            background: "none",
            width: "100%",
          }}
          type="text"
          placeholder="Lugar"
          onChange={handleOnChange}
        />
      ),
    },
    {
    	id: "2",
      element: (
        <DatePicker
          label="Check-in"
          minDate={dayjs()}
          value={dataForm.dateFrom ?? dayjs()}
          onChange={(newValue) => {
            setDataForm({ ...dataForm, dateFrom: newValue ?? dayjs() });
          }}
        />
      ),
    },
    {
    	id: "3",
      element: (
        <DatePicker
          label="Check-out"
          minDate={dataForm.dateFrom}
          value={dataForm.dateTo ?? dayjs()}
          onChange={(newValue) => {
            setDataForm({ ...dataForm, dateTo: newValue ?? dayjs() });
          }}
        />
      ),
    },
    {
    	id: "4",
      labelText: "Viajeros",
      placeholderText: "¿Cuántos?",
      element: <TextField
			          value={viajerosValue}
			          variant="standard"
			          sx={{
			            background: "none",
			            width: "100%",
			          }}
			          type="number"
			          placeholder="0"
			          onChange={handleOnChangeViajeros}
			        />
    },
  ];

  return (
    <Collapse in={isSearchOpen} timeout={isSearchOpen ? 300 : 0}>
      <Box
        sx={{
        	position: "relative",
          maxHeight: 100,
          ...flexCenter,
          gap: 1,
          borderRadius: "50px",
          mb: 2,
          pr: 12,
          zIndex: 1000
        }}
        bgcolor="#F7F7F7"
      >
        {buttonsData.map((item, i) => (
          <Box
            key={i}
            sx={{
              position: "relative",
              width: i === 0 ? 250 : 120,
              ...flexCenter,
              flexDirection: "column",
              alignItems: "flex-start",
              borderRadius: "50px",
              cursor: "pointer",
              backgroundColor: clickedButton === item.id ? "#FFFFFF" : "#F7F7F7",
              boxShadow: clickedButton === item.id ? "0px 3px 6px rgba(0, 0, 0, 0.3)" : "",
              transition: "box-shadow 0.3s",
            }}
            px={2}
            py={2}
            onClick={() => handleOnClick(item.id)}
          >
          	{i === 0 && clickedButton === "1" && showAbsoluteBox && <LugarBox handleOnClickBox={handleOnClickBox}/>}
            <Typography
              sx={{
                cursor: "pointer",
                fontWeight: 600,
                fontSize: ".8rem",
              }}
            >
              {item.labelText}
            </Typography>
            {item.element}
          </Box>
        ))}
        <Button sx={{
        	position: "absolute",
        	right: 0,
        	top: 0,
        	fontSize: "1.1rem",
        	px: 2,
        	color: "#fff",
        	height: "100%",
        	backgroundColor: "#E91E63",
        	borderRadius: "50px",
        	"&:hover":{
        		backgroundColor: "#FA2D74",
        	}
        }}
        onClick={handleOnClickSearch}>
	      	Search
	      </Button>
      </Box>
      <Box
        onClick={handleClickOutside}
        sx={{
          position: 'fixed',
          left: 0,
          width: '100vw',
          height: 'calc(100vh)',
          backgroundColor: '#00000080',
          zIndex: 50,
        }}
      />
      
    </Collapse>
  );
}

export default SearchBarOpened;
