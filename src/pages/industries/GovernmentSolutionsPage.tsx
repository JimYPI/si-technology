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
  AccountBalance,
  Security,
  AccessTime,
  People,
  VerifiedUser,
  Gavel,
  CheckCircle,
  LocalPolice,
  CameraAlt,
  Fingerprint,
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
    title: 'Government Access Control',
    icon: <Security />,
    description: 'Advanced access control systems for government facilities',
    benefits: [
      'Multi-factor authentication',
      'Integration with government ID systems',
      'Emergency lockdown protocols',
      'Visitor management system'
    ]
  },
  {
    title: 'Biometric Security',
    icon: <Fingerprint />,
    description: 'State-of-the-art biometric identification systems',
    benefits: [
      'Multi-modal biometric verification',
      'High-speed identification',
      'Anti-spoofing technology',
      'Centralized management'
    ]
  },
  {
    title: 'Video Surveillance',
    icon: <CameraAlt />,
    description: 'Advanced video monitoring and analytics',
    benefits: [
      'AI-powered threat detection',
      '24/7 facility monitoring',
      'Facial recognition integration',
      'Video analytics'
    ]
  },
  {
    title: 'Personnel Management',
    icon: <People />,
    description: 'Comprehensive personnel tracking and management',
    benefits: [
      'Real-time personnel tracking',
      'Clearance level management',
      'Automated attendance tracking',
      'Emergency mustering'
    ]
  }
];

const caseStudies = [
  {
    title: 'Federal Agency Security Upgrade',
    description: 'Implementation of comprehensive security system across multiple facilities',
    results: [
      'Enhanced security protocols across 50 locations',
      '99.9% system reliability achieved',
      'Reduced unauthorized access incidents by 95%',
      'Streamlined personnel management'
    ]
  },
  {
    title: 'Municipal Government Integration',
    description: 'City-wide security and access control system deployment',
    results: [
      'Unified access control for 25 buildings',
      'Improved emergency response time by 60%',
      'Enhanced public safety measures',
      'Reduced operational costs by 40%'
    ]
  }
];

const GovernmentSolutionsPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Hero Section */}
      <Box sx={{ mb: 8, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Government Security Solutions
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Advanced security solutions for government facilities and agencies
        </Typography>
      </Box>

      {/* Key Challenges Section */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" gutterBottom>
          Government Security Challenges
        </Typography>
        <Grid container spacing={3}>
          {[
            { icon: <Security />, text: 'High-security facility protection' },
            { icon: <VerifiedUser />, text: 'Classified information security' },
            { icon: <People />, text: 'Personnel access management' },
            { icon: <Gavel />, text: 'Regulatory compliance' }
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
        Our Government Solutions
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

      {/* Compliance Section */}
      <Paper sx={{ p: 4, mb: 8 }}>
        <Typography variant="h4" gutterBottom>
          Government Compliance & Standards
        </Typography>
        <Typography paragraph>
          Our solutions are designed to meet and exceed government security standards:
        </Typography>
        <Grid container spacing={2}>
          {[
            'FIPS 201 Compliance',
            'HSPD-12 Standards',
            'NIST Guidelines',
            'FedRAMP Certification'
          ].map((standard, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2 }}>
                <Typography variant="h6" align="center">
                  {standard}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>

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

      {/* Call to Action */}
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Secure Your Government Facility
        </Typography>
        <Typography variant="body1" paragraph color="text.secondary">
          Contact our government security experts for a customized solution
        </Typography>
        <Button variant="contained" color="primary" size="large" startIcon={<AccountBalance />}>
          Schedule a Consultation
        </Button>
      </Box>
    </Container>
  );
};

export default GovernmentSolutionsPage;
