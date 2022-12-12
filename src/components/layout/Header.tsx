import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "../../../styles/Home.module.css";

const Header = () => {
  const router = useRouter();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Box
          sx={{
            cursor: "pointer",
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
          }}
          onClick={() => router.push("/")}
        >
          <ShoppingCart sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Ecommerce app
          </Typography>
        </Box>
        {true && (
          <>
            <Link href="/products" className={styles.link}>
              <Button color="inherit">Products</Button>
            </Link>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
