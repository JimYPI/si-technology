import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  TextField,
  Button,
  Card,
  CardContent,
  MenuItem
} from '@mui/material';
import {
  Phone,
  Email,
  LocationOn,
  Support
} from '@mui/icons-material';

const contactMethods = [
  {
    icon: <Phone sx={{ fontSize: 40, color: '#2D99AE' }} />,
    title: 'Call Us',
    details: [
      '+1 (555) 123-4567',
      'Monday - Friday: 9AM - 6PM'
    ]
  },
  {
    icon: <Email sx={{ fontSize: 40, color: '#2D99AE' }} />,
    title: 'Email Us',
    details: [
      'info@sitechnology.com',
      'support@sitechnology.com'
    ]
  },
  {
    icon: <LocationOn sx={{ fontSize: 40, color: '#2D99AE' }} />,
    title: 'Visit Us',
    details: [
      '123 Tech Street',
      'Silicon Valley, CA 94025'
    ]
  },
  {
    icon: <Support sx={{ fontSize: 40, color: '#2D99AE' }} />,
    title: 'Technical Support',
    details: [
      '24/7 Support Available',
      'Priority Response for Enterprise'
    ]
  }
];

const ContactPage: React.FC = () => {
  return (
    <Box className="page-transition">
      {/* Hero Section */}
      <Box sx={{ backgroundColor: '#0C5776', color: '#F8DAD0', py: 6, mb: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="h5">
            Get in touch with our team of experts
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* Contact Methods */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {contactMethods.map((method) => (
            <Grid item xs={12} sm={6} md={3} key={method.title}>
              <Card 
                className="hover-scale"
                sx={{ 
                  height: '100%',
                  backgroundColor: '#F8DAD0'
                }}
              >
                <CardContent sx={{ textAlign: 'center' }}>
                  <Box sx={{ mb: 2 }}>
                    {method.icon}
                  </Box>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {method.title}
                  </Typography>
                  {method.details.map((detail, index) => (
                    <Typography key={index} variant="body2" sx={{ mb: 1 }}>
                      {detail}
                    </Typography>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Contact Form */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" component="h2" gutterBottom>
              Send Us a Message
            </Typography>
            <Box component="form" noValidate sx={{ mt: 2 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="First Name"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Last Name"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Email Address"
                    variant="outlined"
                    type="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    select
                    label="Inquiry Type"
                    defaultValue=""
                    variant="outlined"
                  >
                    {[
                      'Sales Inquiry',
                      'Technical Support',
                      'Partnership',
                      'General Question'
                    ].map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Message"
                    multiline
                    rows={4}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    size="large"
                    sx={{
                      backgroundColor: '#2D99AE',
                      '&:hover': {
                        backgroundColor: '#0C5776'
                      }
                    }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" component="h2" gutterBottom>
              Our Location
            </Typography>
            <Box
              sx={{
                width: '100%',
                height: '400px',
                backgroundColor: '#BCFEFE',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 4
              }}
            >
              {/* Replace this Box with actual Google Maps integration */}
              <Typography variant="h6" sx={{ color: '#0C5776' }}>
                Google Maps Integration
              </Typography>
            </Box>
            <Typography variant="body1" paragraph>
              Visit our headquarters to learn more about our solutions and see live demonstrations of our security systems.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactPage;
