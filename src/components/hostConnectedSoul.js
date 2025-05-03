import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const HostConnectedSoul = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        position: 'relative',
        height: '400px',
        margin: isMobile ? 2 : 6, // Adjust margin for mobile view
        backgroundImage: 'url("https://cdn.prod.website-files.com/6224703e7862127338280ea4/6225d9b8ab1e8650a14def34_Host%20BG.png")', // Replace with your image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: 4,
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.6)', // Dark overlay
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: isMobile ? 2 : 4, // Adjust padding for mobile view
        }}
      >
        <Typography
          variant={isMobile ? 'h4' : 'h3'}
          component="div"
          gutterBottom
          sx={{ color: 'white', fontWeight: 'bold' }}
        >
          Would you like to
        </Typography>
        <Typography
          variant={isMobile ? 'h4' : 'h3'}
          component="div"
          gutterBottom
          sx={{ color: 'white', fontWeight: 'bold' }}
        >
          host events?
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: 'white', marginBottom: 2 }}
        >
          We’re always looking for passionate individuals to join our team. Here’s your chance to become a TAR member and showcase your event-planning skills. Don’t worry, we’ll be with you every step of the way to help you make it an unforgettable experience!
        </Typography>
        <Button variant="contained" color="secondary">
          Get in touch!
        </Button>
      </Box>
    </Box>
  );
};

export default HostConnectedSoul;
