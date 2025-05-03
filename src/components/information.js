import React from 'react';
import { Grid, Typography, Button, Container } from '@mui/material';
import { CalendarToday, AccessTime, LocationOn } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Information = () => {
  const navigate = useNavigate();

  const handlePayment = () => {
    navigate('/payment');
  }

  return (
    <Container sx={{ py: 4 }}>
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ fontSize: '2.5rem' }} gutterBottom>
            Welcome to The Artist Room
          </Typography>
          <Typography variant="h6" color="textSecondary" paragraph>
            Overwhelmed by the Chaos of Everyday Life? <br />
            Struggling to Find Inspiration or New Connections? <br />
            Need a Day to Unwind, Create, and Feel Good? <br />
            The Artist Room Experience is Just What You Need!
          </Typography>
          <Typography variant="body1" paragraph>
            You're invited to a laid-back creative gathering where you can meet new faces, share your thoughts, enjoy soulful performances, and become part of a welcoming artistic circle.
          </Typography>
          <Typography variant="body1" paragraph>
            <CalendarToday sx={{ verticalAlign: 'middle' }} /> Saturday, 26th April 2025 <br />
            <AccessTime sx={{ verticalAlign: 'middle' }} /> 6:30pm - 10:00pm <br />
            <LocationOn sx={{ verticalAlign: 'middle' }} /> Near DB City, Gwalior <span style={{ color: '#D45591' }}>Secret Location*</span> <br />
            <Typography variant="body2" color="textSecondary">
              *Exact location will be revealed after you register
            </Typography>
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handlePayment}
            sx={{
              my: 2,
              color: 'white',
              display: 'block',
              backgroundColor: '#D45591',
              margin: '0px 10px',
              "&:hover": {
                backgroundColor: "#D45591"
              }
            }}
          >
            Book Now for ₹599/-
          </Button>
          <Typography variant="h6" sx={{ mt: 4 }}>
            250+ Events Completed &nbsp;&nbsp;&nbsp; 15+ Cities &nbsp;&nbsp;&nbsp; 6000+ Attendees
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Information;
