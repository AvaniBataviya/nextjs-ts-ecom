import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <ShoppingCart sx={{ mr: 2 }} />
        <Typography variant="h6" color="inherit" noWrap>
          Ecommerce app
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
