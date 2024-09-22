import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { useTranslation } from "react-i18next";

// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchImages } from "../store/productSlice";
import {
  Box,
  Grid2,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button
} from "@mui/material";

const fakeProducts = [
  {
    id: 1,
    name: "Top 1",
    price: "$30",
    image: "https://via.placeholder.com/200/300",
  },
  {
    id: 2,
    name: "Top 2",
    price: "$40",
    image: "https://via.placeholder.com/200/300",
  },
  {
    id: 3,
    name: "Pant 1",
    price: "$50",
    image: "https://via.placeholder.com/200/300",
  },
  {
    id: 4,
    name: "Pant 2",
    price: "$60",
    image: "https://via.placeholder.com/200/300",
  },
  {
    id: 5,
    name: "Pant 3",
    price: "$50",
    image: "https://via.placeholder.com/200/300",
  },
  {
    id: 6,
    name: "Pant 4",
    price: "$60",
    image: "https://via.placeholder.com/200/300",
  },
];


const ProductGrid = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

//   const { images, loading, error } = useSelector((state) => state.products);

//   useEffect(() => {
//     dispatch(fetchImages());
//   }, [dispatch]);

//   if (loading) {
//     return <Typography>Loading...</Typography>;
//   }

//   if (error) {
//     return <Typography>Error: {error}</Typography>;
//   }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: 2,
        backgroundColor: "#f5f5f5",
      }}
    >
      <Grid2
        container
        spacing={2}
        sx={{ width: "90%" }}
        justifyContent="center"
      >
        {fakeProducts.map((product) => (
          <Grid2 item xs={12} sm={6} md={3} lg={4} key={product.id}>
            <Card>
              <CardMedia
                component="img"
                height="350"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.price}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => dispatch(addToCart(product))}
                >
                  {t("Add_to_Cart")}
                </Button>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default ProductGrid;
