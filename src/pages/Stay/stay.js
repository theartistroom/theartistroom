import React, { useState, useEffect } from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography, Button, Box, Chip, Modal, IconButton } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useNavigate } from 'react-router-dom';

const rooms = [
  {
    name: 'Jasmine',
    price: 4500,
    description: 'Spacious and elegantly designed room with modern amenities',
    images: [
      '/assets/Nivasam- The Serene Home Stay/Jasmine- 4500/Gemini_Generated_Image_2h1r402h1r402h1r.png',
      '/assets/Nivasam- The Serene Home Stay/Jasmine- 4500/Gemini_Generated_Image_5tp9r95tp9r95tp9.png',
      '/assets/Nivasam- The Serene Home Stay/Jasmine- 4500/Gemini_Generated_Image_8fwnah8fwnah8fwn.png',
      '/assets/Nivasam- The Serene Home Stay/Jasmine- 4500/Gemini_Generated_Image_cycrgtcycrgtcycr.png',
      '/assets/Nivasam- The Serene Home Stay/Jasmine- 4500/Gemini_Generated_Image_qmm234qmm234qmm2.png',
      '/assets/Nivasam- The Serene Home Stay/Jasmine- 4500/Gemini_Generated_Image_w0kxyww0kxyww0kx.png',
      '/assets/Nivasam- The Serene Home Stay/Jasmine- 4500/Gemini_Generated_Image_x50wjxx50wjxx50w.png',
      '/assets/Nivasam- The Serene Home Stay/Jasmine- 4500/Jasmine WR-3.jpeg',
    ]
  },
  {
    name: 'Lotus',
    price: 4000,
    description: 'Serene and comfortable room perfect for a peaceful retreat',
    images: [
      '/assets/Nivasam- The Serene Home Stay/Lotus- 4000/Lotus (1).png',
      '/assets/Nivasam- The Serene Home Stay/Lotus- 4000/Lotus (2).png',
      '/assets/Nivasam- The Serene Home Stay/Lotus- 4000/Lotus (3).png',
      '/assets/Nivasam- The Serene Home Stay/Lotus- 4000/Lotus (4).png',
      '/assets/Nivasam- The Serene Home Stay/Lotus- 4000/Lotus (5).png',
      '/assets/Nivasam- The Serene Home Stay/Lotus- 4000/Lotus (6).png',
      '/assets/Nivasam- The Serene Home Stay/Lotus- 4000/Lotus (7).png',
      '/assets/Nivasam- The Serene Home Stay/Lotus- 4000/Lotus (8).png',
    ]
  },
  {
    name: 'Mogra',
    price: 3500,
    description: 'Cozy and welcoming room ideal for a comfortable stay',
    images: [
      '/assets/Nivasam- The Serene Home Stay/Mogra-3500/Mogra (1).png',
      '/assets/Nivasam- The Serene Home Stay/Mogra-3500/Mogra (2).png',
      '/assets/Nivasam- The Serene Home Stay/Mogra-3500/Mogra (3).png',
      '/assets/Nivasam- The Serene Home Stay/Mogra-3500/Mogra (4).png',
      '/assets/Nivasam- The Serene Home Stay/Mogra-3500/Mogra (5).png',
      '/assets/Nivasam- The Serene Home Stay/Mogra-3500/Mogra (6).png',
    ]
  },
  {
    name: 'Rose',
    price: 3000,
    description: 'Charming and intimate room perfect for a memorable experience',
    images: [
      '/assets/Nivasam- The Serene Home Stay/Rose-3000/Rose (1).png',
      '/assets/Nivasam- The Serene Home Stay/Rose-3000/Rose (2).png',
      '/assets/Nivasam- The Serene Home Stay/Rose-3000/Rose (3).png',
      '/assets/Nivasam- The Serene Home Stay/Rose-3000/Rose (4).png',
      '/assets/Nivasam- The Serene Home Stay/Rose-3000/Rose (5).png',
      '/assets/Nivasam- The Serene Home Stay/Rose-3000/Rose (6).png',
    ]
  },
  {
    name: 'Common Area',
    price: null,
    description: 'Beautiful common areas for relaxation and entertainment',
    images: [
      '/assets/Nivasam- The Serene Home Stay/Common Area/Common Area (1).png',
      '/assets/Nivasam- The Serene Home Stay/Common Area/Common Area (2).png',
      '/assets/Nivasam- The Serene Home Stay/Common Area/Common Area (3).png',
      '/assets/Nivasam- The Serene Home Stay/Common Area/Common Area (4).png',
      '/assets/Nivasam- The Serene Home Stay/Common Area/Common Area (5).png',
      '/assets/Nivasam- The Serene Home Stay/Common Area/Common Area (6).png',
      '/assets/Nivasam- The Serene Home Stay/Common Area/Common Area (7).png',
    ]
  },
];

const property = {
  title: 'Nivasam - The Serene Home Stay',
  location: 'Cozy retreat in the heart of the city',
  description: 'A calm, inviting stay designed for creative minds. Enjoy comfortable rooms, local food experiences, and a relaxing atmosphere after exploring The Artist Room.',
  amenities: ['Free Wi-Fi', 'Breakfast Included', 'Local Experiences', 'Pet Friendly'],
  externalLink: 'https://www.google.com/search?q=Nivasam+The+Serene+Home+Stay'
};

const RoomCarousel = ({ room }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % room.images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [room.images.length, autoPlay]);

  const goToNext = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % room.images.length);
  };

  const goToPrevious = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => (prev - 1 + room.images.length) % room.images.length);
  };

  return (
    <Box sx={{ position: 'relative', borderRadius: 3, overflow: 'hidden' }}>
      <CardMedia
        component="img"
        height="500"
        image={room.images[currentIndex]}
        alt={`${room.name} ${currentIndex + 1}`}
        sx={{ objectFit: 'cover' }}
      />

      {/* Carousel Controls */}
      <IconButton
        onClick={goToPrevious}
        sx={{
          position: 'absolute',
          left: 10,
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          '&:hover': { backgroundColor: 'rgba(255, 255, 255, 1)' }
        }}
      >
        <ChevronLeftIcon />
      </IconButton>

      <IconButton
        onClick={goToNext}
        sx={{
          position: 'absolute',
          right: 10,
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          '&:hover': { backgroundColor: 'rgba(255, 255, 255, 1)' }
        }}
      >
        <ChevronRightIcon />
      </IconButton>

      {/* Image Counter */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 10,
          right: 10,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          color: 'white',
          padding: '6px 12px',
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: 600
        }}
      >
        {currentIndex + 1} / {room.images.length}
      </Box>

      {/* Indicator Dots */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 60,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: 1,
          zIndex: 10
        }}
      >
        {room.images.map((_, index) => (
          <Box
            key={index}
            onClick={() => {
              setAutoPlay(false);
              setCurrentIndex(index);
            }}
            sx={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              backgroundColor: index === currentIndex ? 'white' : 'rgba(255, 255, 255, 0.5)',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

const Stay = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const minPrice = Math.min(...rooms.filter(r => r.price).map(r => r.price));
  const maxPrice = Math.max(...rooms.filter(r => r.price).map(r => r.price));

  return (
    <Container sx={{ py: 8 }}>
      <Box sx={{ mb: 8, animation: 'fadeInDown 0.8s ease' }}>
        <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' }, mb: 4 }}>
          <Button
            variant="outlined"
            onClick={() => navigate('/')}
            sx={{
              color: '#D45591',
              borderColor: '#D45591',
              fontWeight: 700,
              borderRadius: 2,
              px: 3,
              py: 1.5,
              textTransform: 'none',
              boxShadow: '0 10px 30px rgba(212, 85, 145, 0.1)',
              '&:hover': {
                backgroundColor: 'rgba(212, 85, 145, 0.08)',
                borderColor: '#D45591'
              }
            }}
          >
            ← Back to Home
          </Button>
        </Box>

        <Box sx={{ textAlign: 'center' }}>
          <Typography 
            variant="overline" 
            sx={{ 
              color: '#D45591', 
              fontWeight: 700,
              letterSpacing: 3,
              fontSize: '0.9rem'
            }} 
            gutterBottom
          >
            ✨ DISCOVER OUR SERENE HAVEN ✨
          </Typography>
          <Typography 
            variant="h2" 
            component="h1" 
            sx={{ 
              fontWeight: 800,
              background: 'linear-gradient(135deg, #D45591 0%, #D45591 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2,
              fontSize: { xs: '2rem', md: '3.5rem' }
            }}
          >
            Nivasam
          </Typography>
          <Box sx={{ width: 60, height: 4, backgroundColor: '#D45591', mx: 'auto', mb: 3, borderRadius: 2 }} />
          <Typography 
            variant="h6" 
            sx={{ 
              mt: 2, 
              color: '#666', 
              maxWidth: 680, 
              mx: 'auto',
              lineHeight: 1.8,
              fontWeight: 400
            }}
          >
            A serene home stay experience that complements your visit to The Artist Room. Book or explore the listing through our trusted travel partners.
          </Typography>
        </Box>

        <Box sx={{ mt: 4, p: 3, backgroundColor: '#f8f8f8', borderRadius: 3, border: '2px solid #D45591' }}>
          <Typography variant="body2" sx={{ color: '#999', mb: 1, textTransform: 'uppercase', letterSpacing: 1 }}>
            Starting From
          </Typography>
          <Typography 
            variant="h4" 
            sx={{ 
              color: '#D45591', 
              fontWeight: 800,
              fontSize: { xs: '1.8rem', md: '2.2rem' }
            }}
          >
            ₹{minPrice.toLocaleString()} — ₹{maxPrice.toLocaleString()}<Typography component="span" sx={{ fontSize: '1rem', color: '#999' }}>/night</Typography>
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 8, justifyContent: 'center' }}>
        {property.amenities.map((amenity, idx) => (
          <Chip 
            key={amenity} 
            label={amenity} 
            sx={{
              backgroundColor: '#faf0f5',
              borderColor: '#D45591',
              color: '#D45591',
              border: '2px solid #D45591',
              fontWeight: 600,
              fontSize: '0.95rem',
              py: 3,
              px: 2,
              transition: 'all 0.3s ease',
              animation: `slideInUp 0.6s ease ${idx * 0.1}s both`,
              '&:hover': {
                backgroundColor: '#D45591',
                color: 'white',
                transform: 'translateY(-4px)',
                boxShadow: '0 8px 16px rgba(212, 85, 145, 0.3)'
              }
            }} 
            variant="outlined"
          />
        ))}
      </Box>

      <Box sx={{ mb: 8, textAlign: 'center', p: 4, backgroundColor: '#faf0f5', borderRadius: 3, animation: 'fadeInUp 0.8s ease 0.3s both' }}>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3, maxWidth: 680, mx: 'auto', lineHeight: 1.8 }}>
          {property.description}
        </Typography>
        <Button
          variant="contained"
          size="large"
          endIcon={<OpenInNewIcon />}
          href={property.externalLink}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            backgroundColor: '#D45591',
            color: 'white',
            fontWeight: 700,
            py: 1.5,
            px: 4,
            fontSize: '1rem',
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: '#D45591',
              transform: 'translateY(-2px)',
              boxShadow: '0 12px 24px rgba(212, 85, 145, 0.4)'
            }
          }}
        >
          Explore & Book Nivasam
        </Button>
      </Box>

      {/* Room Cards with Carousels */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" sx={{ fontWeight: 800, mb: 6, textAlign: 'center', color: '#333' }}>
          Rooms & Suites
        </Typography>
      </Box>
      <Grid container spacing={5}>
        {rooms.map((room, idx) => (
          <Grid item xs={12} key={room.name} sx={{ animation: `fadeInUp 0.6s ease ${idx * 0.1}s both` }}>
            <Card sx={{ 
              borderRadius: 4, 
              overflow: 'hidden', 
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              transition: 'all 0.3s ease',
              border: '1px solid rgba(212, 85, 145, 0.1)',
              '&:hover': {
                boxShadow: '0 12px 40px rgba(212, 85, 145, 0.2)',
                transform: 'translateY(-4px)'
              }
            }}>
              {/* Carousel */}
              <Box sx={{ position: 'relative' }}>
                <RoomCarousel room={room} />
              </Box>

              {/* Content */}
              <CardContent sx={{ p: 4, background: 'linear-gradient(135deg, #fff 0%, #faf8fc 100%)' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 3 }}>
                  <Box>
                    <Typography variant="h3" sx={{ fontWeight: 800, mb: 1, color: '#D45591' }}>
                      {room.name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                      {room.description}
                    </Typography>
                  </Box>
                  {room.price && (
                    <Box sx={{ textAlign: 'right', minWidth: 180, p: 2, backgroundColor: 'white', borderRadius: 2, border: '2px solid #D45591' }}>
                      <Typography variant="caption" color="text.secondary" display="block" sx={{ mb: 1, textTransform: 'uppercase', letterSpacing: 1, fontWeight: 600 }}>
                        from
                      </Typography>
                      <Typography variant="h4" sx={{ color: '#D45591', fontWeight: 800, mb: 0.5 }}>
                        ₹{room.price.toLocaleString()}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        per night
                      </Typography>
                    </Box>
                  )}
                </Box>

                <Box sx={{ mt: 4, pt: 3, borderTop: '2px solid rgba(212, 85, 145, 0.1)' }}>
                  <Typography variant="body2" sx={{ color: '#999', mb: 2, textTransform: 'uppercase', letterSpacing: 0.5, fontWeight: 600 }}>
                    📸 {room.images.length} photos available
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {room.images.slice(0, 5).map((image, idx) => (
                      <Box
                        key={idx}
                        onClick={() => setSelectedImage(image)}
                        sx={{
                          width: 70,
                          height: 70,
                          borderRadius: 2,
                          overflow: 'hidden',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          border: '2px solid #D45591',
                          '&:hover': { 
                            transform: 'scale(1.15)',
                            boxShadow: '0 8px 16px rgba(212, 85, 145, 0.3)'
                          }
                        }}
                      >
                        <img
                          src={image}
                          alt={`${room.name} ${idx + 1}`}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </Box>
                    ))}
                    {room.images.length > 5 && (
                      <Box sx={{ 
                        width: 70, 
                        height: 70, 
                        borderRadius: 2, 
                        backgroundColor: '#D45591', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        border: '2px solid #D45591',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.15)',
                          boxShadow: '0 8px 16px rgba(212, 85, 145, 0.3)'
                        }
                      }}>
                        <Typography variant="h6" sx={{ fontWeight: 800, color: 'white' }}>
                          +{room.images.length - 5}
                        </Typography>
                      </Box>
                    )}
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Image Modal */}
      <Modal
        open={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.95)',
          backdropFilter: 'blur(5px)',
        }}
      >
        <Box sx={{ position: 'relative', maxWidth: '90%', maxHeight: '90vh', animation: 'zoomIn 0.3s ease' }}>
          <IconButton
            onClick={() => setSelectedImage(null)}
            sx={{
              position: 'absolute',
              right: -50,
              top: -50,
              color: 'white',
              backgroundColor: 'rgba(212, 85, 145, 0.8)',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: '#D45591',
                transform: 'scale(1.1)'
              }
            }}
          >
            <CloseIcon sx={{ fontSize: '2rem' }} />
          </IconButton>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Full view"
              style={{ 
                maxWidth: '100%', 
                maxHeight: '90vh', 
                objectFit: 'contain',
                borderRadius: 8
              }}
            />
          )}
        </Box>
      </Modal>

      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </Container>
  );
};

export default Stay;
