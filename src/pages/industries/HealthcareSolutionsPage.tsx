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
  LocalHospital,
  Security,
  AccessTime,
  People,
  VerifiedUser,
  MonitorHeart,
  CheckCircle,
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
    title: 'Access Control & Security',
    icon: <Security />,
    description: 'Comprehensive access management for sensitive areas',
    benefits: [
      'Biometric authentication for restricted areas',
      'Integration with hospital management systems',
      'Emergency lockdown capabilities',
      'Visitor management system'
    ]
  },
  {
    title: 'Time & Attendance',
    icon: <AccessTime />,
    description: 'Advanced time tracking for medical staff',
    benefits: [
      'Automated shift management',
      'Integration with payroll systems',
      'Mobile clock-in/out',
      'Real-time attendance tracking'
    ]
  },
  {
    title: 'Patient Flow Management',
    icon: <People />,
    description: 'Optimize patient movement and resource allocation',
    benefits: [
      'Real-time patient tracking',
      'Waiting time optimization',
      'Resource utilization analytics',
      'Emergency response coordination'
    ]
  },
  {
    title: 'Temperature Screening',
    icon: <MonitorHeart />,
    description: 'Automated temperature screening for infection control',
    benefits: [
      'Non-contact temperature measurement',
      'High-throughput screening',
      'Automatic alerts for elevated temperatures',
      'Integration with access control'
    ]
  }
];

const caseStudies = [
  {
    title: 'Regional Medical Center',
    description: 'Implementation of comprehensive access control and patient flow management',
    results: [
      '50% reduction in unauthorized access incidents',
      '30% improvement in patient flow efficiency',
      'Enhanced staff satisfaction with automated time tracking',
      'Improved emergency response time by 40%'
    ]
  },
  {
    title: 'Multi-Specialty Clinic Network',
    description: 'Deployment of integrated security and attendance management system',
    results: [
      'Streamlined staff management across 15 locations',
      'Reduced administrative overhead by 60%',
      'Enhanced patient safety protocols',
      'Improved compliance with healthcare regulations'
    ]
  }
];

const HealthcareSolutionsPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Hero Section */}
      <Box sx={{ mb: 8, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Healthcare Security Solutions
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Comprehensive security and management solutions for healthcare facilities
        </Typography>
      </Box>

      {/* Key Challenges Section */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" gutterBottom>
          Addressing Healthcare Security Challenges
        </Typography>
        <Grid container spacing={3}>
          {[
            { icon: <Security />, text: 'Protecting sensitive areas and medical supplies' },
            { icon: <VerifiedUser />, text: 'Ensuring patient and staff safety' },
            { icon: <People />, text: 'Managing visitor access and patient flow' },
            { icon: <MonitorHeart />, text: 'Maintaining infection control protocols' }
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
        Our Healthcare Solutions
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

      {/* Compliance Section */}
      <Paper sx={{ p: 4, mb: 8 }}>
        <Typography variant="h4" gutterBottom>
          Healthcare Compliance & Standards
        </Typography>
        <Typography paragraph>
          Our solutions are designed to meet and exceed healthcare industry standards and regulations:
        </Typography>
        <Grid container spacing={2}>
          {[
            'HIPAA Compliance',
            'Joint Commission Standards',
            'FDA Requirements',
            'International Healthcare Security Standards'
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

      {/* Call to Action */}
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Enhance Your Healthcare Facility Security
        </Typography>
        <Typography variant="body1" paragraph color="text.secondary">
          Contact our healthcare security experts for a customized solution
        </Typography>
        <Button variant="contained" color="primary" size="large" startIcon={<LocalHospital />}>
          Schedule a Consultation
        </Button>
      </Box>
    </Container>
  );
};

export default HealthcareSolutionsPage;
