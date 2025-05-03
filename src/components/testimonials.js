import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const reviews = [
  {
    name: 'Rahul Sharma',
    location: 'TAR - Gwalior',
    text: `The Artist Room was one of the best experiences I’ve ever had. I not only met new people but also made some truly amazing friends. Sharing my poems with everyone was such a fulfilling moment, and the response I received meant a lot. I’m really glad I was part of this beautiful event.`,
  },
  {
    name: 'Megha Gupta',
    location: 'TAR - Gwalior',
    text: `I’ve been writing stories for a long time, but they always stayed tucked away in my diary. The Artist Room gave me the confidence and platform to finally share them on stage. The audience was incredibly warm and encouraging—I felt like I was performing in front of family and close friends.`,
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
