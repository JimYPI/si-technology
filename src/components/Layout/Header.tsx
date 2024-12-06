import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar 
      position="static" 
      sx={{ 
        backgroundColor: '#2D99AE',
        boxShadow: 'none',
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{
            flexGrow: 0,
            color: '#FFFFFF',
            textDecoration: 'none',
            fontWeight: 700,
            letterSpacing: '0.5px',
            marginRight: 4
          }}
        >
          SI TECHNOLOGY
        </Typography>
        
        <Box sx={{ flexGrow: 1, display: 'flex', gap: 2 }}>
          <Button
            component={RouterLink}
            to="/products"
            sx={{ 
              color: '#FFFFFF',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }
            }}
          >
            PRODUCTS
          </Button>
          <Button
            component={RouterLink}
            to="/solutions"
            sx={{ 
              color: '#FFFFFF',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }
            }}
          >
            SOLUTIONS
          </Button>
          <Button
            component={RouterLink}
            to="/resources"
            sx={{ 
              color: '#FFFFFF',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }
            }}
          >
            RESOURCES
          </Button>
          <Button
            component={RouterLink}
            to="/about"
            sx={{ 
              color: '#FFFFFF',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }
            }}
          >
            ABOUT
          </Button>
          <Button
            component={RouterLink}
            to="/contact"
            sx={{ 
              color: '#FFFFFF',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }
            }}
          >
            CONTACT
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
