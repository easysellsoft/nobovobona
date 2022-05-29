import React from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        backgroundColor: "#1BB096",
        color: "#fff",
        fontSize: "1.5rem",
      }}
    >
      <Typography variant="subtitle2" align="center" sx={{
        ml: "4rem",
      }}>
        &copy; 2018 ghorami.com. All rights reserved.
      </Typography>
      <Typography variant="subtitle2" F align="center">
        Developed by{" "}
        <a
          href="https://ghoramitechnology.com/"
          style={{
            color: "#000",
            textDecoration: "none",
            fontWeight: "bold",
          }}
          rel="noopener noreferrer"
          target="_blank"
        >
          Ghorami Technology
        </a>
      </Typography>
    </Box>
  );
};

export default Footer;
