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
    <Container sx={{ py: 4 }}>
      <Typography 
        variant="h6" 
        gutterBottom align="center" 
        sx={{ 
            fontSize: { xs: '1rem', md: '1rem' } 
        }}
    >
        WHAT WE PROVIDE
      </Typography> 
      <Typography variant="h4" gutterBottom align="center">
        Glimpses from the Past
      </Typography>
      <Grid container spacing={2}>
        {images.map((image, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={image.src}
                alt={image.alt}
                sx={{ objectFit: 'cover' }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
      <Button 
            variant="contained" 
            color="primary" 
            size="large"
            sx={{
                my: 2,
                color: 'white',
                display: 'block',
                backgroundColor: '#f7567c',
                margin: '0px 10px',
                "&:hover": {
                    backgroundColor: "#f7567c"
                }
            }}
        >
            Book Now for ₹599/-
        </Button>
      </Box>
    </Container>
  );
};

export default Gallery;
