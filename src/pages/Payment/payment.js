import React from 'react';
import { Box, Container, Grid, Typography, TextField, FormControl, Select, MenuItem, Button, InputLabel } from '@mui/material';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PhoneIcon from '@mui/icons-material/Phone';
import PaymentIcon from '@mui/icons-material/Payment';

const Payment = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box p={2} border="1px solid #eee" borderRadius="8px">
            <Typography variant="h6" color="primary" gutterBottom>
              Connected Soul - Gwalior
            </Typography>
            <Box mt={2} mb={2}>
              <img src="https://s3.ap-south-1.amazonaws.com/rzp-prod-merchant-assets/payment-link/description/php%20creative%20(11)_jjfau2o59umkkj.jpeg" alt="Poetry House Party" style={{ width: '100%', borderRadius: '8px' }} />
            </Box>
            <Typography variant="body1" gutterBottom>
              Contact Us:
            </Typography>
            <Box display="flex" alignItems="center" mb={1}>
              <ContactMailIcon sx={{ mr: 1 }} />
              <Typography variant="body2">
                contact@connectedsoul.in
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={1}>
              <PhoneIcon sx={{ mr: 1 }} />
              <Typography variant="body2">
                9370383164
              </Typography>
            </Box>
            <Box mt={2}>
              <Typography variant="body2">
                Terms & Conditions:
              </Typography>
              <Typography variant="body2">
                This is a non-refundable ticket and is valid only for this particular event. The exact location will be shared on the event day by 12PM via WhatsApp.
              </Typography>
              <Typography variant="body2">
                You agree to share information entered on this page with DARKROOM POETS EDUTECH PRIVATE LIMITED (owner of this page) and Razorpay, adhering to applicable laws.
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box p={2} border="1px solid #eee" borderRadius="8px">
            <Typography variant="h6" color="primary" gutterBottom>
              Payment Details
            </Typography>
            <Box mt={2}>
              <TextField
                label="Amount"
                variant="outlined"
                fullWidth
                value="₹605.00"
                InputProps={{ readOnly: true }}
              />
              <TextField
                label="Full Name"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <FormControl variant="outlined" fullWidth margin="normal">
                <InputLabel>Gender</InputLabel>
                <Select label="Gender">
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
              </FormControl>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                label="Phone"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                label="WhatsApp Number"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                label="Date of Birth"
                variant="outlined"
                fullWidth
                margin="normal"
                type="date"
                InputLabelProps={{ shrink: true }}
              />
              <FormControl variant="outlined" fullWidth margin="normal">
                <InputLabel>You want to join as</InputLabel>
                <Select label="You want to join as">
                  <MenuItem value="poet">Poet</MenuItem>
                  <MenuItem value="guest">Guest</MenuItem>
                </Select>
              </FormControl>
              <Box mt={2} display="flex" justifyContent="center" alignItems="center">
                <Button variant="contained" color="secondary" size="large">
                  Register ₹605.00
                </Button>
              </Box>
            </Box>
            <Box mt={2} display="flex" justifyContent="center">
              <Box display="flex" alignItems="center" mb={1}>
                <PaymentIcon sx={{ mr: 1 }} />
                <Typography variant="body2">
                Accepted payment methods
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Payment;
