import React from 'react';
import { Container, Grid, Box } from '@mui/material';
import SupportNavigation from '../components/navigation/SupportNavigation';

interface SupportLayoutProps {
  children: React.ReactNode;
}

const SupportLayout = ({ children }: SupportLayoutProps) => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Box sx={{ position: 'sticky', top: 24 }}>
            <SupportNavigation />
          </Box>
        </Grid>
        <Grid item xs={12} md={9}>
          {children}
        </Grid>
      </Grid>
    </Container>
  );
};

export default SupportLayout;
