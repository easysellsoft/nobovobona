import React, { useState } from "react";
import { Box } from "@mui/material";
import ButtonComp from "./../../Shared/Button/Button";


const AdminHome = ({ setPrevToggle, setRefreshToggle, setAddToggle }) => {
  const [show, setShow] = useState(false);
  const [refresh, setRefresh] = useState(false);
  console.log(show);
  setPrevToggle(show);
  setRefreshToggle(refresh);

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
        refresh={refresh}
        setRefresh={setRefresh}
      />

      <ButtonComp title="Add" color="success" add />
      <ButtonComp
        title="Search"
        color="info"
        search
        show={show}
        setShow={setShow}
      />
      <ButtonComp title="Delete" color="error" deleteIco show />
      <ButtonComp title="Export" color="primary" exportIco show />
    </Box>
  );
};

export default AdminHome;
