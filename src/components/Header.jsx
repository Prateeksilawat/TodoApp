import { Box, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  const currentDate = new Date();
  // const currentDate = new Date('2023-10-01T00:00:00Z') // Example date
  // convert to iso string
  // const isoString = currentDate.toISOString();
  // console.log('currentDate', isoString, typeof currentDate);

  const day = currentDate.getDate();
  const month = currentDate.toLocaleString("default", { month: "short" });
  const fullyear = currentDate.getFullYear();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        width: "80%",
        padding: 2,
        //  backgroundColor: '#e0f7fa',
        // backgroundColor:'#f5f5f5',
        margin: "0 auto",
      }}
    >
      <Typography variant="h4">Task MANAGER</Typography>
      <Typography variant="body1">{`${day} ${month} ${fullyear}`}</Typography>
    </Box>
  );
};

export default Header;
