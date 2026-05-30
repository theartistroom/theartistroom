import React from 'react';
import { Grid, Card, CardMedia, Typography, Container, Button, Box } from '@mui/material';

const images = [
  { src: 'https://cdn.prod.website-files.com/6224703e7862127338280ea4/62285f1ce0e085606f4cb010_Cinematrix%20Production-57.jpg', alt: 'Image 1' },
  { src: 'https://cdn.prod.website-files.com/6224703e7862127338280ea4/62285f1d05d34a8689876faf_Cinematrix%20Production-140.jpg', alt: 'Image 2' },
  { src: 'https://cdn.prod.website-files.com/6224703e7862127338280ea4/62285f1dc4dde243249bdc2f_Cinematrix%20Production-73%20copy.jpg', alt: 'Image 3' },
  { src: 'https://cdn.prod.website-files.com/6224703e7862127338280ea4/62285f1cc86b10bf1315a1c8_Cinematrix%20Production-80.jpg', alt: 'Image 4' },
  { src: 'https://cdn.prod.website-files.com/6224703e7862127338280ea4/62285f1da0603fc1ee534191_Cinematrix%20Production-12.jpg', alt: 'Image 5' },
  { src: 'https://cdn.prod.website-files.com/6224703e7862127338280ea4/62285f1cb2e98d878a220304_Cinematrix%20Production-87.jpg', alt: 'Image 6' },
  { src: 'https://cdn.prod.website-files.com/6224703e7862127338280ea4/62285f1da0603f143d534190_Cinematrix%20Production-45.jpg', alt: 'Image 7' },
  { src: 'https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/2017/12/04175614/beatmap-house-party-4-%5E.jpg?w=1200&h=628&fill=blur&fit=fill', alt: 'Image 8' },
  { src: 'https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/1/2017/12/15143759/151217_Scoot_02.jpg', alt: 'Image 9' }
];

const Gallery = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography 
          variant="overline" 
          sx={{ 
              color: '#D45591', 
              fontWeight: 700,
              letterSpacing: 3,
              fontSize: '0.9rem'
          }}
        >
          📸 VISUAL MEMORIES 📸
        </Typography> 
        <Typography 
          variant="h3" 
          gutterBottom 
          sx={{
            fontWeight: 800,
            mt: 2,
            background: 'linear-gradient(135deg, #D45591 0%, #D45591 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Glimpses from The Artist Room
        </Typography>
        <Box sx={{ width: 60, height: 4, backgroundColor: '#D45591', mx: 'auto', mt: 3, borderRadius: 2 }} />
        <Typography variant="body1" sx={{ color: '#666', mt: 3, maxWidth: 600, mx: 'auto' }}>
          Experience the magic and creativity that unfolds at every event
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {images.map((image, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ animation: `fadeInUp 0.6s ease ${index * 0.08}s both` }}>
            <Card 
              sx={{
                borderRadius: 3,
                overflow: 'hidden',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease',
                border: '2px solid rgba(212, 85, 145, 0.1)',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 40px rgba(212, 85, 145, 0.25)',
                  border: '2px solid #D45591'
                }
              }}
            >
              <CardMedia
                component="img"
                height="240"
                image={image.src}
                alt={image.alt}
                sx={{ 
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.08)'
                  }
                }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8 }}>
        <Button 
          variant="contained" 
          color="primary" 
          size="large"
          sx={{
            color: 'white',
            backgroundColor: '#D45591',
            fontWeight: 700,
            py: 1.5,
            px: 4,
            fontSize: '1rem',
            borderRadius: 3,
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 15px rgba(212, 85, 145, 0.3)',
            position: 'relative',
            overflow: 'hidden',
            "&::before": {
              content: '""',
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              transition: 'left 0.3s ease'
            },
            "&:hover": {
              backgroundColor: "#D45591",
              transform: 'translateY(-3px)',
              boxShadow: '0 12px 25px rgba(212, 85, 145, 0.4)',
              "&::before": {
                left: '100%'
              }
            }
          }}
        >
          ✨ Book Now for ₹599/-
        </Button>
      </Box>
    </Container>
  );
};

export default Gallery;
