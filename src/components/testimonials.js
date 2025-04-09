import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const reviews = [
  {
    name: 'Shubham Sharma',
    location: 'PHP - Bhopal',
    text: `Poetry House Party was one of the best experiences I have ever had. Not only I got to meet new people but I also made some amazing friends there. I shared my poems with everyone and I really loved the response. I am glad I attended this event.`,
  },
  {
    name: 'Megha Mathew',
    location: 'PHP - Nagpur',
    text: `I used to write stories for quite a long time but I always kept it in my diary. Poetry House Party gave me a chance to explore my ability to perform on stage. The crowd was really delightful. I felt as if I was performing in front of my family and friends.`,
  },
];

const Testimonials = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(to right, #4b6cb7, #182848)',
        color: 'white',
        py: 5,
        px: 2,
        textAlign: 'center',
        borderRadius: 4,
        margin: 6
      }}
    >
      <Typography variant="h5" gutterBottom>
        HAPPY PEOPLE, BEAUTIFUL REVIEWS
      </Typography>
      <Typography variant="h4" gutterBottom>
        What Our Community says
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {reviews.map((review, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Box
              sx={{
                backgroundColor: 'white',
                color: 'black',
                borderRadius: 2,
                p: 3,
                boxShadow: 3,
                textAlign: 'left',
              }}
            >
              <Typography variant="h6" gutterBottom>
                {review.name}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                {review.location}
              </Typography>
              <Typography variant="body1">{review.text}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Testimonials;
