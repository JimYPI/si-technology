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
  Cases,
  Search,
  Download,
  Language,
  CalendarToday,
  Storage,
  TrendingUp,
  BusinessCenter,
  LocationOn,
  Star,
} from '@mui/icons-material';

const CaseStudies = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const caseStudies = [
    {
      title: 'Global Bank Security Implementation',
      description: 'How a leading bank enhanced security across 500+ branches',
      version: '1.0',
      date: '2024-01-15',
      size: '3.2 MB',
      languages: ['English', 'French', 'Spanish'],
      industry: 'Banking',
      location: 'Europe',
      organization: {
        size: '50,000+ employees',
        branches: '500+ locations',
        users: '100,000+ daily users',
      },
      challenges: [
        'Multiple legacy systems',
        'Complex compliance requirements',
        'Geographic distribution',
        'High security demands',
      ],
      results: [
        '99.99% system uptime',
        '45% reduction in security incidents',
        '30% cost savings',
        'Improved user satisfaction',
      ],
    },
    {
      title: 'Healthcare Access Control Solution',
      description: 'Modernizing hospital security and access management',
      version: '1.0',
      date: '2024-01-10',
      size: '2.8 MB',
      languages: ['English', 'French', 'German'],
      industry: 'Healthcare',
      location: 'North America',
      organization: {
        size: '10,000+ employees',
        branches: '12 facilities',
        users: '25,000+ daily users',
      },
      challenges: [
        'Strict regulatory compliance',
        '24/7 operation requirements',
        'Complex access levels',
        'Integration with existing systems',
      ],
      results: [
        'HIPAA compliance achieved',
        '60% faster access management',
        '40% reduction in unauthorized access',
        'Enhanced emergency protocols',
      ],
    },
    {
      title: 'Manufacturing Facility Security',
      description: 'Implementing comprehensive security in industrial setting',
      version: '1.0',
      date: '2024-01-05',
      size: '2.5 MB',
      languages: ['English', 'French', 'Italian'],
      industry: 'Manufacturing',
      location: 'Asia Pacific',
      organization: {
        size: '5,000+ employees',
        branches: '3 production facilities',
        users: '8,000+ daily users',
      },
      challenges: [
        'High-risk areas protection',
        'Shift management complexity',
        'Environmental conditions',
        'Multiple contractor access',
      ],
      results: [
        '50% improvement in time tracking',
        'Zero security breaches',
        '35% operational efficiency gain',
        'Improved safety compliance',
      ],
    },
  ];

  const filteredCaseStudies = caseStudies.filter(
    (study) =>
      study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.industry.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper sx={{ p: 4, mb: 4, bgcolor: 'primary.main', color: 'primary.contrastText' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Cases sx={{ fontSize: 40, mr: 2 }} />
          <Typography variant="h3" component="h1">
            Case Studies
          </Typography>
        </Box>
        <Typography variant="h6">
          Success stories and implementation examples
        </Typography>
      </Paper>

      <Paper sx={{ p: 3, mb: 4 }}>
        <TextField
          fullWidth
          placeholder="Search case studies by industry or keyword..."
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
        {filteredCaseStudies.map((study, index) => (
          <Grid item xs={12} key={index}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <BusinessCenter color="primary" sx={{ mr: 1 }} />
                  <Typography variant="h5">
                    {study.title}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {study.description}
                </Typography>

                <Box sx={{ mb: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <BusinessCenter sx={{ fontSize: 'small', mr: 1 }} />
                        <Typography variant="body2">
                          Industry: {study.industry}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <LocationOn sx={{ fontSize: 'small', mr: 1 }} />
                        <Typography variant="body2">
                          Region: {study.location}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Star sx={{ fontSize: 'small', mr: 1 }} />
                        <Typography variant="body2">
                          Scale: {study.organization.size}
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>

                <Divider sx={{ my: 2 }} />
                
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="subtitle2" gutterBottom>
                      Key Challenges
                    </Typography>
                    <List dense>
                      {study.challenges.map((challenge, idx) => (
                        <ListItem key={idx}>
                          <ListItemIcon>
                            <TrendingUp color="error" fontSize="small" />
                          </ListItemIcon>
                          <ListItemText primary={challenge} />
                        </ListItem>
                      ))}
                    </List>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="subtitle2" gutterBottom>
                      Results Achieved
                    </Typography>
                    <List dense>
                      {study.results.map((result, idx) => (
                        <ListItem key={idx}>
                          <ListItemIcon>
                            <TrendingUp color="success" fontSize="small" />
                          </ListItemIcon>
                          <ListItemText primary={result} />
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
                          Published: {study.date}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Storage sx={{ fontSize: 'small', mr: 1 }} />
                        <Typography variant="body2" color="text.secondary">
                          Version: {study.version} | Size: {study.size}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Language sx={{ fontSize: 'small' }} />
                        {study.languages.map((lang) => (
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
                  Download Case Study
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CaseStudies;
