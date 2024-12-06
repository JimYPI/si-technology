import React from 'react';
import { Box, Toolbar } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';
import LanguageSelector from '../common/LanguageSelector';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column',
      minHeight: '100vh',
    }}>
      <Navbar>
        <Toolbar sx={{ justifyContent: 'flex-end' }}>
          <LanguageSelector />
        </Toolbar>
      </Navbar>
      <Box sx={{ 
        flexGrow: 1,
        mt: '64px', // Height of navbar
        backgroundColor: '#fff'
      }}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
