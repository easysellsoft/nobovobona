import React from "react";
import { Box } from "@mui/material";
import ButtonComp from "./../../Shared/Button/Button";


const AdminHome = () => {
  return (
    <Box
      sx={[
        {
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "start",
          mt: 2,
          flexWrap: "wrap",
        },
      ]}
    >
      <ButtonComp
        title="Refresh"
        color="warning"
        refreshIco
      />
      <ButtonComp title="Add" color="success" add />
      <ButtonComp title="Search" color="info" search />
      <ButtonComp title="Delete" color="error" deleteIco />
      <ButtonComp
        title="Export"
        color="primary"
        exportIco
      />
    </Box>
  );
};

export default AdminHome;
