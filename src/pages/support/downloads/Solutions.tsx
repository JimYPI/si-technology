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
  Divider,
} from '@mui/material';
import {
  Business,
  Search,
  Download,
  Language,
  CalendarToday,
  Storage,
  CheckCircle,
  ArrowForward,
  BusinessCenter,
} from '@mui/icons-material';

const Solutions = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const solutions = [
    {
      title: 'Enterprise Access Control Solution',
      description: 'Complete access control solution for large enterprises',
      version: '3.2.0',
      date: '2024-01-15',
      size: '4.5 MB',
      languages: ['English', 'French', 'Spanish'],
      features: [
        'Multi-site management',
        'Integration with HR systems',
        'Advanced reporting',
        'Mobile access credentials',
      ],
      benefits: [
        'Increased security',
        'Reduced operational costs',
        'Improved compliance',
        'Enhanced user experience',
      ],
      industries: ['Corporate', 'Healthcare', 'Education'],
    },
    {
      title: 'Smart Building Security Solution',
      description: 'Integrated security solution for modern buildings',
      version: '2.1.0',
      date: '2024-01-10',
      size: '3.8 MB',
      languages: ['English', 'French', 'German'],
      features: [
        'Visitor management',
        'Elevator control',
        'Video integration',
        'Mobile app access',
      ],
      benefits: [
        'Enhanced building security',
        'Streamlined operations',
        'Energy efficiency',
        'Improved tenant satisfaction',
      ],
      industries: ['Real Estate', 'Commercial', 'Residential'],
    },
    {
      title: 'Manufacturing Security Package',
      description: 'Specialized security solution for manufacturing facilities',
      version: '4.0.0',
      date: '2024-01-05',
      size: '4.2 MB',
      languages: ['English', 'French', 'Italian'],
      features: [
        'Time attendance tracking',
        'Zone management',
        'Safety compliance',
        'Production area monitoring',
      ],
      benefits: [
        'Improved workforce management',
        'Enhanced safety',
        'Regulatory compliance',
        'Increased productivity',
      ],
      industries: ['Manufacturing', 'Industrial', 'Logistics'],
    },
  ];

  const filteredSolutions = solutions.filter(
    (solution) =>
      solution.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      solution.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      solution.industries.some(industry => 
        industry.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper sx={{ p: 4, mb: 4, bgcolor: 'primary.main', color: 'primary.contrastText' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Business sx={{ fontSize: 40, mr: 2 }} />
          <Typography variant="h3" component="h1">
            Industry Solutions
          </Typography>
        </Box>
        <Typography variant="h6">
          Comprehensive security solutions for various industries
        </Typography>
      </Paper>

      <Paper sx={{ p: 3, mb: 4 }}>
        <TextField
          fullWidth
          placeholder="Search solutions by name or industry..."
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
        {filteredSolutions.map((solution, index) => (
          <Grid item xs={12} key={index}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <BusinessCenter color="primary" sx={{ mr: 1 }} />
                  <Typography variant="h5">
                    {solution.title}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {solution.description}
                </Typography>

                <Box sx={{ mb: 2 }}>
                  {solution.industries.map((industry) => (
                    <Chip
                      key={industry}
                      label={industry}
                      color="primary"
                      variant="outlined"
                      size="small"
                      sx={{ mr: 1, mb: 1 }}
                    />
                  ))}
                </Box>
                
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="subtitle2" gutterBottom>
                      Key Features
                    </Typography>
                    <List dense>
                      {solution.features.map((feature, idx) => (
                        <ListItem key={idx}>
                          <ListItemIcon>
                            <ArrowForward color="primary" fontSize="small" />
                          </ListItemIcon>
                          <ListItemText primary={feature} />
                        </ListItem>
                      ))}
                    </List>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="subtitle2" gutterBottom>
                      Business Benefits
                    </Typography>
                    <List dense>
                      {solution.benefits.map((benefit, idx) => (
                        <ListItem key={idx}>
                          <ListItemIcon>
                            <CheckCircle color="success" fontSize="small" />
                          </ListItemIcon>
                          <ListItemText primary={benefit} />
                        </ListItem>
                      ))}
                    </List>
                  </Grid>
                </Grid>

                <Divider sx={{ my: 2 }} />

                <Box sx={{ mt: 2 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <CalendarToday sx={{ fontSize: 'small', mr: 1 }} />
                        <Typography variant="body2" color="text.secondary">
                          Updated: {solution.date}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Storage sx={{ fontSize: 'small', mr: 1 }} />
                        <Typography variant="body2" color="text.secondary">
                          Version: {solution.version} | Size: {solution.size}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Language sx={{ fontSize: 'small' }} />
                        {solution.languages.map((lang) => (
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
                  Download Solution Package
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Solutions;
