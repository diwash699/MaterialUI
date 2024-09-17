"use client";
import * as React from 'react';
import { Container, Typography, Box, Grid, Paper, Button, Card, CardContent, CardMedia, IconButton, Divider } from '@mui/material';
import { AddShoppingCart, FavoriteBorder } from '@mui/icons-material';

const product = {
  title: 'Nike',
  description: "The Nike Blazer Mid '77 channels the old-school look of Nike basketball with a vintage midsole finish. Throwback style with modern materials means you can run, skip and jump in comfort",
  price: '$85',
  image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2448aed2-3244-4f67-a136-84aa9c7f72e0/NIKE+BLAZER+MID+%2777+%28GS%29.png', // Replace with your product image URL
};

const ProductPage = () => {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h3" component="h1" gutterBottom>
          {product.title}
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardMedia
                component="img"
                height="400"
                image={product.image}
                alt={product.title}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <CardContent>
              <Typography variant="h4" component="h2" gutterBottom>
                {product.price}
              </Typography>
              <Typography variant="body1" paragraph>
                {product.description}
              </Typography>
              <Box mt={2}>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<AddShoppingCart />}
                  sx={{ mr: 2 }}
                >
                  Add to Cart
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  startIcon={<FavoriteBorder />}
                >
                  Add to Wishlist
                </Button>
              </Box>
            </CardContent>
          </Grid>
        </Grid>
      </Box>
      <Divider sx={{ my: 4 }} />
      <Box>
        <Typography variant="h5" component="h2" gutterBottom>
          Product Details
        </Typography>
        <Typography variant="body1" paragraph>
          Stay tuned for next items in the stock.
        </Typography>
      </Box>
    </Container>
  );
};

export default ProductPage;
