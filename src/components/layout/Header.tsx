import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "../../../styles/Home.module.css";
import { deleteCookie } from "cookies-next";
import { getUserIdFromCookie } from "../helper";

const Header = () => {
  const router = useRouter();
  const userId = getUserIdFromCookie();

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
          onClick={() => {
            router.push(userId ? "/dashboard" : "/");
            document.cookie = `user=""`;
          }}
        >
          <ShoppingCart sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Ecommerce app
          </Typography>
        </Box>
        <Link href="/about" className={styles.link}>
          <Button color="inherit">About</Button>
        </Link>
        {userId && (
          <>
            <Link href="/products" className={styles.link}>
              <Button color="inherit">Products</Button>
            </Link>
            <Button
              color="inherit"
              onClick={() => {
                deleteCookie("user");
                router.push("/");
              }}
            >
              Logout
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
