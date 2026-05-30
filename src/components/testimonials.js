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
        background: 'linear-gradient(135deg, #faf0f5 0%, #fff 100%)',
        py: 8,
        px: 2,
        textAlign: 'center',
        borderRadius: 0,
        margin: 0
      }}
    >
      <Typography 
        variant="overline" 
        sx={{ 
          color: '#D45591', 
          fontWeight: 700,
          letterSpacing: 3,
          fontSize: '0.9rem'
        }} 
        gutterBottom
      >
        ⭐ TESTIMONIALS ⭐
      </Typography>
      <Typography 
        variant="h3" 
        gutterBottom
        sx={{
          fontWeight: 800,
          mb: 1,
          background: 'linear-gradient(135deg, #D45591 0%, #D45591 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
      >
        What Our Community Says
      </Typography>
      <Box sx={{ width: 60, height: 4, backgroundColor: '#D45591', mx: 'auto', mb: 4, borderRadius: 2 }} />
      <Typography 
        variant="body1" 
        sx={{ 
          color: '#666', 
          mb: 6, 
          maxWidth: 680, 
          mx: 'auto',
          fontSize: '1.05rem'
        }}
      >
        Hear from our amazing community members who have experienced the magic of The Artist Room
      </Typography>
      <Grid container spacing={4} justifyContent="center" sx={{ px: { xs: 1, md: 4 } }}>
        {reviews.map((review, index) => (
          <Grid item xs={12} sm={6} md={5} key={index}>
            <Box
              sx={{
                backgroundColor: 'white',
                color: 'black',
                borderRadius: 3,
                p: 4,
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                textAlign: 'left',
                transition: 'all 0.3s ease',
                border: '2px solid rgba(212, 85, 145, 0.1)',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '4px',
                  height: '100%',
                  backgroundColor: '#D45591'
                },
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 40px rgba(212, 85, 145, 0.2)',
                  border: '2px solid #D45591'
                }
              }}
            >
              <Box sx={{ mb: 2, display: 'flex', gap: 0.5 }}>
                {'⭐⭐⭐⭐⭐'.split('').map((star, i) => (
                  <span key={i} style={{ fontSize: '1.2rem' }}>★</span>
                ))}
              </Box>
              <Typography 
                variant="body1"
                sx={{
                  fontStyle: 'italic',
                  color: '#555',
                  mb: 3,
                  lineHeight: 1.8,
                  fontSize: '0.95rem'
                }}
              >
                "{review.text}"
              </Typography>
              <Typography 
                variant="h6" 
                gutterBottom
                sx={{
                  fontWeight: 800,
                  color: '#D45591'
                }}
              >
                {review.name}
              </Typography>
              <Typography 
                variant="subtitle2" 
                sx={{
                  color: '#999',
                  fontWeight: 600
                }}
              >
                {review.location}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Testimonials;
