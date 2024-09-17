"use client";
import * as React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, CardActions, Button, Divider } from '@mui/material';

const pricingPlans = [
  {
    title: 'Basic Plan',
    price: '$19.99/month',
    features: ['Access to Standard Products', 'Basic Customer Support', 'Limited Discount'],
  },
  {
    title: 'Pro Plan',
    price: '$49.99/month',
    features: ['Access to All Products', 'Priority Customer Support', 'Enhanced Discounts', 'Advanced Order Tracking'],
  },
  {
    title: 'Enterprise Plan',
    price: '$99.99/month',
    features: ['Custom Product Catalog', 'Dedicated Account Manager', 'Custom Pricing', 'Advanced Analytics', 'Free Shipping'],
  },
];

const PricingPage = () => {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h3" component="h1" gutterBottom>
          Pricing Plans
        </Typography>
        <Grid container spacing={4}>
          {pricingPlans.map((plan) => (
            <Grid item xs={12} sm={4} key={plan.title}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="h2" gutterBottom>
                    {plan.title}
                  </Typography>
                  <Typography variant="h6" component="h3" color="textSecondary" gutterBottom>
                    {plan.price}
                  </Typography>
                  <Box my={2}>
                    {plan.features.map((feature, index) => (
                      <Typography key={index} variant="body1">
                        {feature}
                      </Typography>
                    ))}
                  </Box>
                </CardContent>
                <CardActions>
                  <Button variant="contained" color="primary">
                    Choose Plan
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Divider sx={{ my: 4 }} />
      <Box>
        <Typography variant="h5" component="h2" gutterBottom>
          Still have questions?
        </Typography>
        <Typography variant="body1" paragraph>
          Contact us for more details about our pricing and plans. We are here to help you choose the best option for your needs.
        </Typography>
      </Box>
    </Container>
  );
};

export default PricingPage;
