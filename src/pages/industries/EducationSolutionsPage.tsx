import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Divider,
} from '@mui/material';
import {
  School,
  Security,
  AccessTime,
  People,
  VerifiedUser,
  Videocam,
  CheckCircle,
  LibraryBooks,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.02)',
  },
}));

const solutions = [
  {
    title: 'Campus Access Control',
    icon: <Security />,
    description: 'Comprehensive access management for educational facilities',
    benefits: [
      'Smart card and biometric access',
      'Integration with student management systems',
      'Emergency lockdown capabilities',
      'Visitor management system'
    ]
  },
  {
    title: 'Attendance Management',
    icon: <AccessTime />,
    description: 'Automated attendance tracking for students and staff',
    benefits: [
      'Automated attendance recording',
      'Parent notification system',
      'Integration with academic systems',
      'Mobile attendance tracking'
    ]
  },
  {
    title: 'Video Surveillance',
    icon: <Videocam />,
    description: 'Advanced video monitoring for campus security',
    benefits: [
      'AI-powered threat detection',
      '24/7 campus monitoring',
      'Integration with access control',
      'Mobile viewing capabilities'
    ]
  },
  {
    title: 'Library Management',
    icon: <LibraryBooks />,
    description: 'Smart library access and resource management',
    benefits: [
      'Automated check-in/check-out',
      'Resource tracking',
      'Study room management',
      'Integration with student IDs'
    ]
  }
];

const caseStudies = [
  {
    title: 'Metropolitan University',
    description: 'Implementation of campus-wide security and attendance system',
    results: [
      'Improved campus security by 70%',
      'Reduced unauthorized access incidents by 85%',
      'Automated attendance tracking for 20,000+ students',
      'Enhanced emergency response capabilities'
    ]
  },
  {
    title: 'International School Network',
    description: 'Deployment of integrated security and student management system',
    results: [
      'Streamlined operations across 10 campuses',
      'Reduced administrative workload by 50%',
      'Improved parent communication',
      'Enhanced student safety protocols'
    ]
  }
];

const EducationSolutionsPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Hero Section */}
      <Box sx={{ mb: 8, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Education Security Solutions
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Comprehensive security and management solutions for educational institutions
        </Typography>
      </Box>

      {/* Key Challenges Section */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" gutterBottom>
          Educational Security Challenges
        </Typography>
        <Grid container spacing={3}>
          {[
            { icon: <Security />, text: 'Ensuring campus-wide security' },
            { icon: <VerifiedUser />, text: 'Protecting students and staff' },
            { icon: <People />, text: 'Managing visitor access' },
            { icon: <AccessTime />, text: 'Tracking attendance efficiently' }
          ].map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper sx={{ p: 2, textAlign: 'center', height: '100%' }}>
                <Box sx={{ mb: 2 }}>
                  {item.icon}
                </Box>
                <Typography>
                  {item.text}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Solutions Section */}
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        Our Education Solutions
      </Typography>
      <Grid container spacing={4} sx={{ mb: 8 }}>
        {solutions.map((solution, index) => (
          <Grid item xs={12} md={6} key={index}>
            <StyledCard>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  {solution.icon}
                  <Typography variant="h5" sx={{ ml: 1 }}>
                    {solution.title}
                  </Typography>
                </Box>
                <Typography variant="body1" paragraph>
                  {solution.description}
                </Typography>
                <List>
                  {solution.benefits.map((benefit, idx) => (
                    <ListItem key={idx}>
                      <ListItemIcon>
                        <CheckCircle color="primary" />
                      </ListItemIcon>
                      <ListItemText primary={benefit} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>

      {/* Case Studies Section */}
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        Success Stories
      </Typography>
      <Grid container spacing={4} sx={{ mb: 8 }}>
        {caseStudies.map((study, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom>
                {study.title}
              </Typography>
              <Typography paragraph>
                {study.description}
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography variant="h6" gutterBottom>
                Key Results:
              </Typography>
              <List>
                {study.results.map((result, idx) => (
                  <ListItem key={idx}>
                    <ListItemIcon>
                      <CheckCircle color="success" />
                    </ListItemIcon>
                    <ListItemText primary={result} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Features Section */}
      <Paper sx={{ p: 4, mb: 8 }}>
        <Typography variant="h4" gutterBottom>
          Key Features for Educational Institutions
        </Typography>
        <Grid container spacing={3}>
          {[
            {
              title: 'Smart Campus Integration',
              description: 'Seamless integration with existing school management systems'
            },
            {
              title: 'Mobile Access',
              description: 'Convenient mobile apps for students, staff, and parents'
            },
            {
              title: 'Real-time Monitoring',
              description: 'Live surveillance and instant alert systems'
            },
            {
              title: 'Data Analytics',
              description: 'Comprehensive reporting and analytics capabilities'
            }
          ].map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ height: '100%', p: 2 }}>
                <Typography variant="h6" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* Call to Action */}
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Secure Your Educational Institution
        </Typography>
        <Typography variant="body1" paragraph color="text.secondary">
          Contact our education security experts for a customized solution
        </Typography>
        <Button variant="contained" color="primary" size="large" startIcon={<School />}>
          Schedule a Consultation
        </Button>
      </Box>
    </Container>
  );
};

export default EducationSolutionsPage;
