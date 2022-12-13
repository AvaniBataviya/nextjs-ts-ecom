import { Box, Grid, Paper, styled, Typography } from "@mui/material";
import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { apiBaseEndPoint } from "../../src/components/helper";

export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

const Item = styled(Paper)(({ theme }) => ({
  color: theme.palette.text.secondary,
  position: "relative",
  borderRadious: "5px",
  img: {
    borderTopLeftRadius: "5px",
    borderTopRightRadius: "5px",
  },
}));

const Products = ({ products }: { products: IProduct[] }) => {
  const router = useRouter();

  return (
    <>
      <Typography variant="h2" align="center" sx={{ m: 2 }}>
        Product listing
      </Typography>
      <Grid container sx={{ paddingLeft: "20px", paddingRight: "20px" }}>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <Item>
                <Box
                  sx={{
                    position: "relative",
                    height: "200px",
                    width: "100%",
                  }}
                >
                  <Image src={product.thumbnail} alt={product.title} fill />
                </Box>
                <Box sx={{ p: 2 }}>
                  <Link
                    href={`/products/${product.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Typography
                      variant="h6"
                      component="h2"
                      noWrap
                      color="secondary"
                    >
                      {product.title}
                    </Typography>
                  </Link>
                  <Typography variant="subtitle1">{product.brand}</Typography>
                  <Typography variant="subtitle1">{`${product.price} rs`}</Typography>
                  <Typography variant="subtitle2">{`${product.brand}`}</Typography>
                  <Typography variant="subtitle2">{`Ratting ${product.rating} / 5`}</Typography>
                </Box>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`${apiBaseEndPoint}/products`);
  const data = await res.json();
  return { props: { products: data?.products || [] } };
};

export default Products;
