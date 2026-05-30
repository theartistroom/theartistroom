import React from 'react';
import { Box, Typography, IconButton, Container, Grid } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #D45591 0%, #b8386f 100%)',
        color: 'white',
        py: 6,
        mt: 12,
        borderTop: '4px solid rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(10px)'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center" sx={{ mb: 4 }}>
          
          {/* Left: Logo */}
          <Grid item xs={12} sm={4}>
            <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
              <Typography 
                variant="h5"
                sx={{
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  justifyContent: { xs: 'center', sm: 'flex-start' }
                }}
              >
                ✨ The Artist Room
              </Typography>
              <Typography variant="caption" sx={{ mt: 1, opacity: 0.9 }}>
                Where creativity meets community
              </Typography>
            </Box>
          </Grid>

          {/* Center: Social */}
          <Grid item xs={12} sm={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2, letterSpacing: 1 }}>
                FOLLOW US
              </Typography>
              <Box display="flex" justifyContent="center" gap={1}>
                <IconButton 
                  href="https://www.facebook.com" 
                  target="_blank" 
                  color="inherit"
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.4)',
                      transform: 'translateY(-3px)'
                    }
                  }}
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton 
                  href="https://www.instagram.com" 
                  target="_blank" 
                  color="inherit"
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.4)',
                      transform: 'translateY(-3px)'
                    }
                  }}
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton 
                  href="https://www.youtube.com" 
                  target="_blank" 
                  color="inherit"
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.4)',
                      transform: 'translateY(-3px)'
                    }
                  }}
                >
                  <YouTubeIcon />
                </IconButton>
              </Box>
            </Box>
          </Grid>

          {/* Right: Copyright */}
          <Grid item xs={12} sm={4}>
            <Box sx={{ textAlign: { xs: 'center', sm: 'right' } }}>
              <Typography variant="caption" sx={{ opacity: 0.95 }}>
                &copy; 2025 The Artist Room Ltd. <br />
                All rights reserved.
              </Typography>
            </Box>
          </Grid>

        </Grid>
        <Box 
          sx={{ 
            borderTop: '1px solid rgba(255, 255, 255, 0.2)',
            pt: 3,
            textAlign: 'center'
          }}
        >
          <Typography variant="caption" sx={{ opacity: 0.8 }}>
            Made with ❤️ for artists and creators
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
