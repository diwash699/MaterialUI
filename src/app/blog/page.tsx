"use client";
import * as React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, CardActions, Button, Divider } from '@mui/material';

const blogPosts = [
  {
    title: 'The Ultimate Guide to Shopping Online',
    date: 'September 10, 2024',
    summary: 'Discover tips and tricks to make your online shopping experience smoother and more enjoyable.',
    link: '/blog/ultimate-guide-to-shopping-online',
  },
  {
    title: 'Top 10 Trends in E-Commerce for 2024',
    date: 'August 15, 2024',
    summary: 'Explore the latest trends and innovations shaping the future of online shopping.',
    link: '/blog/top-trends-in-e-commerce-2024',
  },
  {
    title: 'How to Find the Best Deals and Discounts',
    date: 'July 20, 2024',
    summary: 'Learn how to spot the best deals and maximize your savings on your favorite products.',
    link: '/blog/best-deals-and-discounts',
  },
];

const BlogPage = () => {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h3" component="h1" gutterBottom>
          Blog
        </Typography>
        <Grid container spacing={4}>
          {blogPosts.map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post.title}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="h2" gutterBottom>
                    {post.title}
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary">
                    {post.date}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {post.summary}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button href={post.link} size="small" color="primary">
                    Read More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Divider sx={{ my: 4 }} />
        <Box>
          <Typography variant="h5" component="h2" gutterBottom>
            Stay Updated
          </Typography>
          <Typography variant="body1" paragraph>
            Subscribe to our newsletter to receive the latest updates and articles directly to your inbox.
          </Typography>
          <Button variant="contained" color="primary">
            Subscribe
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default BlogPage;
