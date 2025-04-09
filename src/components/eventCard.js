import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Container } from '@mui/material';

const events = [
  {
    title: 'The Art Circle',
    description: 'Standing in a corner alone is not allowed at PHP! Throw the awkwardness out of the window and get ready for some amazing activities, stories, poems and laughter. You can share your thoughts, and listen to interesting stories that others share.',
    imageUrl: 'https://cdn.prod.website-files.com/6224703e7862127338280ea4/62285cda678b1829dc43227a_Art_Circle_AdobeCreativeCloudExpress%20(1).gif', // replace with your image path
  },
  {
    title: 'Music Therapy',
    description: 'PHP Music Therapy comes with a twist. Yes, there is music and there is singing but not the boring way. You have to sing with all your heart. So, go loud and don\'t worry about anyone judging you because we\'ll all join you. Just feel happy with every beat!',
    imageUrl: 'https://cdn.prod.website-files.com/6224703e7862127338280ea4/62285afac38bbc65b28058d7_Music_therapy_AdobeCreativeCloudExpress.gif', // replace with your image path
  },
  {
    title: 'The Dabba Party',
    description: 'Remember school\'s lunch time when everyone would share their dabbas? We bring back those times at PHP with our exclusive potluck party. Bring your favourite dish to share and end up with a feast!',
    imageUrl: 'https://cdn.prod.website-files.com/6224703e7862127338280ea4/62285afab760cc735e363846_Dabba_Party_AdobeCreativeCloudExpress.gif', // replace with your image path
  },
  {
    title: 'Find your friend-mate',
    description: 'Our house party vibe can turn strangers into friends in no time. Don\'t believe? Attend a party and see for yourself. You will find people from different fields whose thoughts and vibes match yours. And our interesting party events will make sure you find one quickly!',
    imageUrl: 'https://cdn.prod.website-files.com/6224703e7862127338280ea4/62285afa72174b68c65943ac_Friend_AdobeCreativeCloudExpress.gif', // replace with your image path
  },
  {
    title: 'Feel The Stage',
    description: 'Enjoy the stunning performances of amazing poets, singers, artists and people like you! Yes, it\'s a people\'s party and we open the stage for everyone who wants to show their hidden talent. So, leave your hesitation aside and get on the stage!',
    imageUrl: 'https://cdn.prod.website-files.com/6224703e7862127338280ea4/62285afaa0603f8505532ca2_Stage_AdobeCreativeCloudExpress.gif', // replace with your image path
  },
  {
    title: 'P.S. We Love Games',
    description: 'And trust us, you are going to love them too! There are ice-breakers, hilarious games and then there are games that will keep the good vibes alive! We love surprises and that\'s why we\'ll keep the games a surprise. Join us to experience them.',
    imageUrl: 'https://cdn.prod.website-files.com/6224703e7862127338280ea4/62285afa8bc591724b7f8b2c_Party_games_AdobeCreativeCloudExpress.gif', // replace with your image path
  },
];

const EventCards = () => {
  return (
    <Container sx={{ py: 4 }}>
      <Grid container spacing={4}>
        {events.map((event, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                image={event.imageUrl}
                alt={event.title}
                sx={{ height: 200 }}
              />
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {event.title}
                </Typography>
                <Typography>
                  {event.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default EventCards;
