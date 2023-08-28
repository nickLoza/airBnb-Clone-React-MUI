import { Box, Button, Container, Tab } from "@mui/material";
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import { locationsTab } from "./constants/constants";
import { FaFilter } from "react-icons/fa";
import { useState } from "react";

const index = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth={false} sx={{
    	m: "auto",
    	maxWidth: 2520,
    }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: "center",
          maxWidth: 2520,
          flexGrow: 1,
          px: { xs: 0, md: 2 },
          alignItems: 'center',
          mt: 2,
          mb: 2,
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          sx={{
            [`& .${tabsClasses.scrollButtons}`]: {
              '&.Mui-disabled': { opacity: 0.3 },
            },
          }}
        >
          {locationsTab.map((tab) => {
            return <Tab sx={{fontSize:".9rem"}} key={tab.id} icon={tab.icon} label={tab.label} />;
          })}
        </Tabs>
        <Button
          sx={{
            display: { xs: 'none', md: 'block' },
            border: '1px solid #ddd',
            minWidth: 90,
            justifyContent: 'space-between',
            borderRadius: 2,
            textTransform: 'capitalize',
            py: 1,
            color: 'theme.palette.text.primary',
          }}
        >
          <FaFilter /> Filters
        </Button>
      </Box>
    </Container>
  );
};

export default index;