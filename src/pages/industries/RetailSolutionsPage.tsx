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
  Store,
  Security,
  PeopleAlt,
  Inventory,
  MonetizationOn,
  Videocam,
  CheckCircle,
  TrendingUp,
  AccessTime,
  LocalShipping,
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
    title: 'Loss Prevention System',
    icon: <Security />,
    description: 'Comprehensive theft prevention and inventory protection',
    benefits: [
      'Advanced video surveillance',
      'EAS system integration',
      'Smart tag management',
      'Real-time alerts'
    ]
  },
  {
    title: 'Store Traffic Analytics',
    icon: <PeopleAlt />,
    description: 'Customer flow and behavior analysis',
    benefits: [
      'Heat mapping',
      'Customer counting',
      'Dwell time analysis',
      'Conversion tracking'
    ]
  },
  {
    title: 'Inventory Management',
    icon: <Inventory />,
    description: 'Real-time inventory tracking and management',
    benefits: [
      'RFID integration',
      'Stock level monitoring',
      'Automated reordering',
      'Shrinkage prevention'
    ]
  },
  {
    title: 'POS Integration',
    icon: <MonetizationOn />,
    description: 'Seamless integration with point-of-sale systems',
    benefits: [
      'Transaction monitoring',
      'Employee tracking',
      'Fraud prevention',
      'Sales analytics'
    ]
  }
];

const features = [
  {
    title: 'Smart Surveillance',
    icon: <Videocam />,
    description: 'AI-powered video analytics for retail environments'
  },
  {
    title: 'Staff Management',
    icon: <PeopleAlt />,
    description: 'Comprehensive employee tracking and scheduling'
  },
  {
    title: 'Asset Protection',
    icon: <Security />,
    description: 'Multi-layer security for merchandise and assets'
  },
  {
    title: 'Operations Optimization',
    icon: <TrendingUp />,
    description: 'Data-driven insights for better operations'
  }
];

const caseStudies = [
  {
    title: 'Major Fashion Retailer',
    description: 'Implementation of comprehensive retail security solution',
    results: [
      'Reduced shrinkage by 65%',
      'Improved conversion rate by 15%',
      'Enhanced staff productivity',
      'Optimized store layout based on traffic analysis'
    ]
  },
  {
    title: 'Supermarket Chain',
    description: 'Deployment of integrated security and analytics system',
    results: [
      'Inventory accuracy improved to 99%',
      'Customer flow optimization',
      'Queue management efficiency up 40%',
      'Loss prevention improved by 75%'
    ]
  }
];

const RetailSolutionsPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Hero Section */}
      <Box sx={{ mb: 8, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Retail Security Solutions
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Comprehensive security and analytics solutions for modern retail environments
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
        Our Retail Solutions
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

      {/* Key Benefits Section */}
      <Paper sx={{ p: 4, mb: 8 }}>
        <Typography variant="h4" gutterBottom>
          Key Benefits for Retailers
        </Typography>
        <Grid container spacing={3}>
          {[
            {
              icon: <MonetizationOn />,
              title: 'Loss Prevention',
              description: 'Reduce shrinkage and prevent theft'
            },
            {
              icon: <TrendingUp />,
              title: 'Business Intelligence',
              description: 'Data-driven insights for better decisions'
            },
            {
              icon: <AccessTime />,
              title: 'Operational Efficiency',
              description: 'Streamline store operations'
            },
            {
              icon: <LocalShipping />,
              title: 'Inventory Management',
              description: 'Real-time stock tracking and control'
            }
          ].map((benefit, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box sx={{ textAlign: 'center' }}>
                {benefit.icon}
                <Typography variant="h6" gutterBottom>
                  {benefit.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {benefit.description}
                </Typography>
              </Box>
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
          Secure Your Retail Business
        </Typography>
        <Typography variant="body1" paragraph color="text.secondary">
          Contact our retail solutions experts for a customized security system
        </Typography>
        <Button variant="contained" color="primary" size="large" startIcon={<Store />}>
          Request a Demo
        </Button>
      </Box>
    </Container>
  );
};

export default RetailSolutionsPage;
