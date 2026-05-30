import React from "react";
import { Grid, Typography, Box, Card, CardContent } from "@mui/material";

const features = [
  {
    title: 'Live Creativity',
    detail: 'Listen to soulful music, spoken word, and artist showcases while soaking in a warm atmosphere.'
  },
  {
    title: 'Community Vibes',
    detail: 'Connect with fellow creatives through curated conversations, games, and collaborative energy.'
  },
  {
    title: 'Relaxed Experience',
    detail: 'Enjoy a calm, stylish setting with tasty bites and thoughtful details designed for comfort.'
  }
];

const AboutEvent = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 4 },
        background: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255, 240, 245, 0.65) 100%)'
      }}
    >
      <Grid container justifyContent="center">
        <Grid item xs={12} md={10} lg={8}>
          <Box
            sx={{
              textAlign: 'center',
              mb: 5,
              position: 'relative'
            }}
          >
            <Typography
              variant="overline"
              sx={{
                color: '#D45591',
                letterSpacing: 4,
                fontWeight: 700,
                mb: 2,
                display: 'inline-block'
              }}
            >
              WHAT IS ARTIST ROOM?
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 900,
                fontSize: { xs: '2.25rem', md: '3.5rem' },
                lineHeight: 1.05,
                mb: 2,
                color: '#D45591'
              }}
            >
              About the Event
            </Typography>
            <Box
              sx={{
                width: 80,
                height: 6,
                backgroundColor: '#D45591',
                borderRadius: 3,
                mx: 'auto',
                mb: 2
              }}
            />
            <Typography
              variant="body1"
              sx={{
                color: '#575757',
                fontSize: { xs: '1rem', md: '1.1rem' },
                lineHeight: 1.9,
                maxWidth: 720,
                mx: 'auto'
              }}
            >
              Step into The Artist Room – where creativity meets community. Whether it’s thought-provoking conversations, fun games, live music, or tasty bites, this event brings together everything you need for a chill, inspiring, and memorable time.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {features.map((feature, idx) => (
              <Grid item xs={12} md={4} key={feature.title}>
                <Card
                  elevation={0}
                  sx={{
                    border: '1px solid rgba(212, 85, 145, 0.14)',
                    borderRadius: 4,
                    minHeight: 220,
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px rgba(212, 85, 145, 0.12)'
                    }
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: '#D45591',
                        fontWeight: 800,
                        mb: 2
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#5d5d5d',
                        lineHeight: 1.8
                      }}
                    >
                      {feature.detail}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutEvent;
