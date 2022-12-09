import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import { GetStaticPaths } from "next";
import Image from "next/image";
import React from "react";
import { IProduct } from ".";

const ProductDetail = ({ product }: { product: IProduct }) => {
  if (!product) {
    return "Loading...";
  }
  return (
    <Box sx={{ display: "flex", alignItem: "center", mt: 4 }}>
      <ImageList
        sx={{ width: 500, height: "auto", mt: 0 }}
        variant="quilted"
        cols={2}
        rowHeight={200}
      >
        {product.images?.map((image, index) => (
          <ImageListItem
            key={index}
            sx={{
              position: "relative",
              height: "200px",
              width: "100%",
              border: "1px solid lightgray",
            }}
          >
            <Image src={image} alt={product.title} fill />
          </ImageListItem>
        ))}
      </ImageList>
      <Box sx={{ paddingLeft: 4 }}>
        <Typography variant="h4" component="h2" noWrap>
          {product.title}
        </Typography>
        <Typography variant="subtitle1">{product.brand}</Typography>
        <Typography variant="subtitle1">{`Price: ${product.price} rs`}</Typography>
        <Typography variant="subtitle2">{`Brand: ${product.brand}`}</Typography>
        <Typography variant="body2">{`${product.description}`}</Typography>
        <Typography variant="subtitle2">{`Ratting: ${product.rating} / 5`}</Typography>
        <Typography variant="inherit">{`Disscount: ${product.discountPercentage}`}</Typography>
        <Typography variant="inherit">{`Stock: ${product.stock}`}</Typography>
      </Box>
    </Box>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  //assume first four product detail page will access more
  const res = await fetch(
    `https://dummyjson.com/products?limit=4&skip=0&select=id`
  );
  const data = await res.json();
  return {
    paths: data.products.map(({ id }: { id: number }) => ({
      params: { id: id.toString() },
    })),
    fallback: true,
  };
};

// export const getStaticProps: GetStaticProps = async (context: { params: { id: string } }) => {
export async function getStaticProps(context: { params: { id: string } }) {
  
  const {
    params: { id },
  } = context;

  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await res.json();
  return {
    props: { product },
  };
}

export default ProductDetail;
