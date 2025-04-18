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
            The Artist Room
          </Typography>
          <Typography variant="h6" color="textSecondary" paragraph>
            Feeling Stressed With Hectic Life? <br />
            Not Finding Motivation to Make New Friends? <br />
            Want A Day To Relax and Enjoy Good Vibes? <br />
            Poetry House Party Is Your Ultimate Answer!
          </Typography>
          <Typography variant="body1" paragraph>
            Calling you all to a chilled house party where you get to meet new people, share your views, listen to beautiful artists, and become a part of our community.
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
