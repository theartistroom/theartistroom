import React from 'react';
import { Grid, Typography, Button, Container, Box } from '@mui/material';
import { CalendarToday, AccessTime, LocationOn } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Information = () => {
  const navigate = useNavigate();

  const handlePayment = () => {
    navigate('/payment');
  }

  return (
    <Container sx={{ py: 8 }}>
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography 
            variant="h3" 
            sx={{ 
              fontSize: '2.8rem',
              fontWeight: 800,
              background: 'linear-gradient(135deg, #D45591 0%, #D45591 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2
            }} 
            gutterBottom
          >
            Welcome to The Artist Room
          </Typography>
          <Typography 
            variant="h6" 
            color="textSecondary" 
            paragraph
            sx={{
              lineHeight: 2,
              fontSize: '1.1rem',
              fontWeight: 500
            }}
          >
            Overwhelmed by the Chaos of Everyday Life? <br />
            Struggling to Find Inspiration or New Connections? <br />
            Need a Day to Unwind, Create, and Feel Good? <br />
            The Artist Room Experience is Just What You Need!
          </Typography>
          <Typography 
            variant="body1" 
            paragraph
            sx={{
              lineHeight: 1.8,
              color: '#666',
              fontSize: '1rem'
            }}
          >
            You're invited to a laid-back creative gathering where you can meet new faces, share your thoughts, enjoy soulful performances, and become part of a welcoming artistic circle.
          </Typography>
          <Box sx={{ p: 3, backgroundColor: '#faf0f5', borderRadius: 3, border: '2px solid #D45591', mb: 3 }}>
            <Typography 
              variant="body1" 
              paragraph
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                mb: 1,
                fontWeight: 600,
                color: '#333'
              }}
            >
              <CalendarToday sx={{ color: '#D45591', fontSize: '1.3rem' }} /> Saturday, 26th April 2025
            </Typography>
            <Typography 
              variant="body1" 
              paragraph
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                mb: 1,
                fontWeight: 600,
                color: '#333'
              }}
            >
              <AccessTime sx={{ color: '#D45591', fontSize: '1.3rem' }} /> 6:30pm - 10:00pm
            </Typography>
            <Typography 
              variant="body1"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                mb: 1,
                fontWeight: 600,
                color: '#333'
              }}
            >
              <LocationOn sx={{ color: '#D45591', fontSize: '1.3rem' }} /> Near DB City, Gwalior <span style={{ color: '#D45591', fontWeight: 800 }}>Secret Location*</span>
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ ml: 4 }}>
              *Exact location will be revealed after you register
            </Typography>
          </Box>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handlePayment}
            sx={{
              color: 'white',
              backgroundColor: '#D45591',
              fontWeight: 700,
              py: 2,
              px: 4,
              fontSize: '1.1rem',
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
                boxShadow: '0 8px 25px rgba(212, 85, 145, 0.4)',
                "&::before": {
                  left: '100%'
                }
              }
            }}
          >
            ✨ Book Now for ₹599/-
          </Button>
          <Typography 
            variant="h6" 
            sx={{ 
              mt: 4,
              fontWeight: 700,
              color: '#333',
              display: 'flex',
              gap: 2,
              justifyContent: 'space-around',
              backgroundColor: '#f8f8f8',
              p: 2,
              borderRadius: 2
            }}
          >
            <span>🎭 250+ Events</span>
            <span>🌍 15+ Cities</span>
            <span>👥 6000+ Attendees</span>
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{
            borderRadius: 3,
            overflow: 'hidden',
            boxShadow: '0 8px 30px rgba(212, 85, 145, 0.2)',
            border: '2px solid rgba(212, 85, 145, 0.1)',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: '0 16px 40px rgba(212, 85, 145, 0.3)'
            }
          }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ display: 'block' }}
            ></iframe>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Information;
