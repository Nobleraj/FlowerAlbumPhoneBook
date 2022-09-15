import React from "react";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import PhoneBook from "./PhoneBook";
import Flowers from "./Flowers";

const Layout = () => {
  const [value, setValue] = React.useState("2");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Flower Album" value="3" />
            {/* <Tab label="Color Picker" value="1" /> */}
            <Tab label="Phone Book" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1"></TabPanel>
        <TabPanel value="2">
          <PhoneBook />
        </TabPanel>
        <TabPanel value="3">
          <Flowers />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default Layout;
