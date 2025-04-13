import React from 'react';
import { Box, Typography, IconButton, Container, Grid } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <Box
      sx={{
        background: '#D45591',
        color: 'white',
        py: 3,
        mt: 8
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">
              The Artist Room
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="body1" align="center">
              Follow us on
            </Typography>
            <Box display="flex" justifyContent="center" mt={1}>
              <IconButton href="https://www.facebook.com" target="_blank" color="inherit">
                <FacebookIcon />
              </IconButton>
              <IconButton href="https://www.instagram.com" target="_blank" color="inherit">
                <InstagramIcon />
              </IconButton>
              <IconButton href="https://www.youtube.com" target="_blank" color="inherit">
                <YouTubeIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} display="flex" justifyContent="flex-end">
            <Typography variant="body2">
              &copy; 2025 The Artist Room Ltd. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
