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
  Speed,
  Search,
  Download,
  Language,
  CalendarToday,
  Storage,
  CheckCircle,
  PlayArrow,
} from '@mui/icons-material';

const QuickGuide = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const guides = [
    {
      title: 'Quick Start: ZKBioSecurity',
      description: 'Get started with ZKBioSecurity in 15 minutes',
      version: '3.2.0',
      date: '2024-01-15',
      size: '1.5 MB',
      languages: ['English', 'French', 'Spanish'],
      topics: [
        'Initial login and setup',
        'Basic system configuration',
        'Adding users and devices',
        'First access point setup',
      ],
      duration: '15 mins',
    },
    {
      title: 'ProFace X Setup Guide',
      description: 'Rapid deployment guide for ProFace X terminals',
      version: '2.1.0',
      date: '2024-01-10',
      size: '1.2 MB',
      languages: ['English', 'French', 'German'],
      topics: [
        'Hardware installation',
        'Network configuration',
        'User enrollment',
        'Basic testing',
      ],
      duration: '10 mins',
    },
    {
      title: 'Time Attendance Quick Setup',
      description: 'Quick configuration guide for time attendance system',
      version: '4.0.0',
      date: '2024-01-05',
      size: '1.8 MB',
      languages: ['English', 'French', 'Italian'],
      topics: [
        'Software installation',
        'Basic configuration',
        'Employee enrollment',
        'First attendance record',
      ],
      duration: '20 mins',
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
          <Speed sx={{ fontSize: 40, mr: 2 }} />
          <Typography variant="h3" component="h1">
            Quick Start Guides
          </Typography>
        </Box>
        <Typography variant="h6">
          Get started quickly with our rapid deployment guides
        </Typography>
      </Paper>

      <Paper sx={{ p: 3, mb: 4 }}>
        <TextField
          fullWidth
          placeholder="Search quick guides..."
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
          <Grid item xs={12} md={6} key={index}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <PlayArrow color="primary" sx={{ mr: 1 }} />
                  <Box>
                    <Typography variant="h6">
                      {guide.title}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Estimated time: {guide.duration}
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {guide.description}
                </Typography>
                
                <Typography variant="subtitle2" gutterBottom>
                  Quick Guide Topics
                </Typography>
                <List dense>
                  {guide.topics.map((topic, idx) => (
                    <ListItem key={idx}>
                      <ListItemIcon>
                        <CheckCircle color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary={topic} />
                    </ListItem>
                  ))}
                </List>

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
                  Download Quick Guide
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default QuickGuide;
