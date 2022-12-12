import { Grid, Typography } from "@mui/material";
import React from "react";

const dashboard = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ height: `calc(100vh - 64px)` }}
    >
      <Typography variant="h1">Welcome!</Typography>
    </Grid>
  );
};

export default dashboard;
