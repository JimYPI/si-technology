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
  Factory,
  Security,
  AccessTime,
  People,
  Speed,
  Engineering,
  CheckCircle,
  Inventory,
  CameraAlt,
  Timer,
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
    title: 'Access Control & Time Attendance',
    icon: <AccessTime />,
    description: 'Integrated access control and time tracking for manufacturing facilities',
    benefits: [
      'Multi-shift management',
      'Biometric authentication',
      'Overtime tracking',
      'Zone-based access control'
    ]
  },
  {
    title: 'Video Surveillance',
    icon: <CameraAlt />,
    description: 'Advanced video monitoring for production areas and warehouses',
    benefits: [
      'Production line monitoring',
      'Quality control integration',
      'Safety compliance monitoring',
      'Automated incident detection'
    ]
  },
  {
    title: 'Inventory Security',
    icon: <Inventory />,
    description: 'Comprehensive inventory and asset protection',
    benefits: [
      'Real-time asset tracking',
      'Theft prevention',
      'Automated inventory counts',
      'Supply chain security'
    ]
  },
  {
    title: 'Worker Safety Systems',
    icon: <Engineering />,
    description: 'Advanced safety monitoring and management',
    benefits: [
      'PPE compliance detection',
      'Emergency response system',
      'Safety zone monitoring',
      'Accident prevention analytics'
    ]
  }
];

const features = [
  {
    title: 'Production Efficiency',
    icon: <Speed />,
    description: 'Monitor and optimize manufacturing processes'
  },
  {
    title: 'Workforce Management',
    icon: <People />,
    description: 'Comprehensive employee tracking and scheduling'
  },
  {
    title: 'Asset Protection',
    icon: <Security />,
    description: 'Secure valuable equipment and inventory'
  },
  {
    title: 'Time Management',
    icon: <Timer />,
    description: 'Advanced shift and attendance tracking'
  }
];

const caseStudies = [
  {
    title: 'Automotive Manufacturing Plant',
    description: 'Implementation of integrated security and efficiency solution',
    results: [
      'Reduced unauthorized access by 98%',
      'Improved production efficiency by 25%',
      'Enhanced worker safety compliance',
      'Streamlined shift management'
    ]
  },
  {
    title: 'Electronics Manufacturing Facility',
    description: 'Deployment of comprehensive security and monitoring system',
    results: [
      'Inventory shrinkage reduced by 75%',
      'Quality control improved by 40%',
      'Worker productivity increased by 20%',
      'Safety incidents reduced by 60%'
    ]
  }
];

const ManufacturingSolutionsPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Hero Section */}
      <Box sx={{ mb: 8, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Manufacturing Security Solutions
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Comprehensive security and efficiency solutions for modern manufacturing facilities
        </Typography>
      </Box>

      {/* Key Features Section */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
          Key Features
        </Typography>
        <Grid container spacing={3}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper sx={{ p: 3, textAlign: 'center', height: '100%' }}>
                <Box sx={{ mb: 2 }}>
                  {feature.icon}
                </Box>
                <Typography variant="h6" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Solutions Section */}
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        Our Manufacturing Solutions
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

      {/* Industry Standards Section */}
      <Paper sx={{ p: 4, mb: 8 }}>
        <Typography variant="h4" gutterBottom>
          Industry Standards & Compliance
        </Typography>
        <Typography paragraph>
          Our solutions are designed to meet manufacturing industry standards:
        </Typography>
        <Grid container spacing={2}>
          {[
            'ISO 9001:2015',
            'OSHA Standards',
            'ISO 45001',
            'Industry 4.0 Compatible'
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
          Optimize Your Manufacturing Facility
        </Typography>
        <Typography variant="body1" paragraph color="text.secondary">
          Contact our manufacturing solutions experts for a customized security system
        </Typography>
        <Button variant="contained" color="primary" size="large" startIcon={<Factory />}>
          Request a Consultation
        </Button>
      </Box>
    </Container>
  );
};

export default ManufacturingSolutionsPage;
