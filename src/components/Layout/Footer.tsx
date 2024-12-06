import React from 'react';
import { Container, Grid, Typography, Link, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#001C44', color: '#BCFEFE', py: 6, mt: 'auto' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              SI Technology
            </Typography>
            <Typography variant="body2">
              Leading provider of innovative technology solutions
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="/products" color="inherit" display="block">Products</Link>
            <Link href="/solutions" color="inherit" display="block">Solutions</Link>
            <Link href="/resources" color="inherit" display="block">Resources</Link>
            <Link href="/about" color="inherit" display="block">About</Link>
            <Link href="/contact" color="inherit" display="block">Contact</Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">
              Email: info@sitechnology.com<br />
              Phone: +1 (555) 123-4567<br />
              Address: 123 Tech Street<br />
              Silicon Valley, CA 94025
            </Typography>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} SI Technology. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
