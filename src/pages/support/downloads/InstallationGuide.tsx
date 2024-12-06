import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Paper,
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
  InputAdornment,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  Build,
  Search,
  Download,
  Language,
  CalendarToday,
  Storage,
  CheckCircle,
  SystemUpdate,
} from '@mui/icons-material';

const InstallationGuide = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const guides = [
    {
      title: 'ZKBioSecurity Installation Guide',
      description: 'Step-by-step installation instructions for ZKBioSecurity platform',
      version: '3.2.0',
      date: '2024-01-15',
      size: '4.2 MB',
      languages: ['English', 'French', 'Spanish'],
      requirements: [
        'Windows Server 2016/2019',
        'SQL Server 2016+',
        '8GB RAM minimum',
        '100GB free disk space',
      ],
      steps: [
        'System requirements verification',
        'Database setup',
        'Server installation',
        'Client configuration',
      ],
    },
    {
      title: 'Access Control Hardware Setup',
      description: 'Hardware installation guide for access control devices',
      version: '2.1.0',
      date: '2024-01-10',
      size: '3.5 MB',
      languages: ['English', 'French', 'German'],
      requirements: [
        'Compatible power supply',
        'Network connectivity',
        'Mounting hardware',
        'Basic tools',
      ],
      steps: [
        'Site preparation',
        'Power installation',
        'Device mounting',
        'Network configuration',
      ],
    },
    {
      title: 'Time Attendance System Setup',
      description: 'Installation manual for time attendance solutions',
      version: '4.0.0',
      date: '2024-01-05',
      size: '3.8 MB',
      languages: ['English', 'French', 'Italian'],
      requirements: [
        'Windows 10/11',
        '4GB RAM minimum',
        'Internet connection',
        'USB ports',
      ],
      steps: [
        'Software installation',
        'Device connection',
        'System configuration',
        'Initial setup',
      ],
    },
  ];

  const filteredGuides = guides.filter(
    (guide) =>
      guide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guide.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper sx={{ p: 4, mb: 4, bgcolor: 'primary.main', color: 'primary.contrastText' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Build sx={{ fontSize: 40, mr: 2 }} />
          <Typography variant="h3" component="h1">
            Installation Guides
          </Typography>
        </Box>
        <Typography variant="h6">
          Step-by-step installation instructions for all products
        </Typography>
      </Paper>

      <Paper sx={{ p: 3, mb: 4 }}>
        <TextField
          fullWidth
          placeholder="Search installation guides..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
      </Paper>

      <Grid container spacing={3}>
        {filteredGuides.map((guide, index) => (
          <Grid item xs={12} key={index}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <SystemUpdate color="primary" sx={{ mr: 1 }} />
                  <Typography variant="h5">
                    {guide.title}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {guide.description}
                </Typography>
                
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="subtitle2" gutterBottom>
                      System Requirements
                    </Typography>
                    <List dense>
                      {guide.requirements.map((req, idx) => (
                        <ListItem key={idx}>
                          <ListItemIcon>
                            <CheckCircle color="success" fontSize="small" />
                          </ListItemIcon>
                          <ListItemText primary={req} />
                        </ListItem>
                      ))}
                    </List>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="subtitle2" gutterBottom>
                      Installation Steps
                    </Typography>
                    <List dense>
                      {guide.steps.map((step, idx) => (
                        <ListItem key={idx}>
                          <ListItemIcon>
                            <CheckCircle color="primary" fontSize="small" />
                          </ListItemIcon>
                          <ListItemText primary={step} />
                        </ListItem>
                      ))}
                    </List>
                  </Grid>
                </Grid>

                <Box sx={{ mt: 2 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <CalendarToday sx={{ fontSize: 'small', mr: 1 }} />
                        <Typography variant="body2" color="text.secondary">
                          Updated: {guide.date}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Storage sx={{ fontSize: 'small', mr: 1 }} />
                        <Typography variant="body2" color="text.secondary">
                          Version: {guide.version} | Size: {guide.size}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Language sx={{ fontSize: 'small' }} />
                        {guide.languages.map((lang) => (
                          <Chip
                            key={lang}
                            label={lang}
                            size="small"
                            variant="outlined"
                          />
                        ))}
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  startIcon={<Download />}
                  fullWidth
                >
                  Download Installation Guide
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default InstallationGuide;
