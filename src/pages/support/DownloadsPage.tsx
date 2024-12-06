import React from 'react';
import { Container, Typography, Grid, Paper, Button } from '@mui/material';
import { Download } from '@mui/icons-material';

const DownloadsPage: React.FC = () => {
  const downloads = [
    {
      title: 'Product Brochures',
      description: 'Latest product catalogs and brochures',
      link: '/downloads/brochures',
    },
    {
      title: 'Software Updates',
      description: 'Latest software and firmware updates',
      link: '/downloads/software',
    },
    {
      title: 'Technical Documents',
      description: 'Technical specifications and manuals',
      link: '/downloads/technical',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Downloads Center
      </Typography>
      <Grid container spacing={3}>
        {downloads.map((download, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" gutterBottom>
                {download.title}
              </Typography>
              <Typography color="text.secondary" paragraph>
                {download.description}
              </Typography>
              <Button
                variant="contained"
                startIcon={<Download />}
                href={download.link}
              >
                Download
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default DownloadsPage;
