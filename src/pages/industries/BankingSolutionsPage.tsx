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
  Fingerprint,
  Videocam,
  AccessTime,
  People,
  CheckCircle,
  Shield,
  Lock,
  Speed,
  Visibility,
  VerifiedUser,
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
    title: 'Advanced Access Control',
    icon: <Security />,
    description: 'Multi-layer security for banking facilities',
    benefits: [
      'Multi-factor authentication',
      'Biometric verification',
      'Time-based access control',
      'Emergency lockdown protocols'
    ]
  },
  {
    title: 'Video Surveillance',
    icon: <Videocam />,
    description: 'AI-powered video monitoring system',
    benefits: [
      'Facial recognition',
      'Behavior analysis',
      'ATM monitoring',
      '24/7 recording with encryption'
    ]
  },
  {
    title: 'Time & Attendance',
    icon: <AccessTime />,
    description: 'Staff management and attendance tracking',
    benefits: [
      'Biometric clock-in',
      'Shift management',
      'Overtime tracking',
      'Integration with HR systems'
    ]
  },
  {
    title: 'Visitor Management',
    icon: <People />,
    description: 'Comprehensive visitor tracking system',
    benefits: [
      'Digital registration',
      'ID verification',
      'Access card issuance',
      'Visit history tracking'
    ]
  }
];

const features = [
  {
    title: 'Vault Security',
    icon: <Lock />,
    description: 'Advanced protection for high-security areas'
  },
  {
    title: 'ATM Protection',
    icon: <Shield />,
    description: 'Integrated security for ATM installations'
  },
  {
    title: 'Identity Verification',
    icon: <Fingerprint />,
    description: 'Multi-factor authentication systems'
  },
  {
    title: 'Real-time Monitoring',
    icon: <Visibility />,
    description: '24/7 surveillance and alerts'
  }
];

const caseStudies = [
  {
    title: 'National Bank Network',
    description: 'Implementation of comprehensive banking security system',
    results: [
      'Enhanced security across 200+ branches',
      'Reduced security incidents by 95%',
      'Improved staff productivity by 30%',
      'Streamlined visitor management'
    ]
  },
  {
    title: 'Regional Credit Union',
    description: 'Deployment of integrated access control and monitoring',
    results: [
      'Zero security breaches since implementation',
      'Staff satisfaction increased by 40%',
      'Visitor processing time reduced by 75%',
      'Regulatory compliance achieved'
    ]
  }
];

const BankingSolutionsPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Hero Section */}
      <Box sx={{ mb: 8, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Banking Security Solutions
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Advanced security solutions for financial institutions
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
        Our Banking Solutions
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
          Banking Compliance & Standards
        </Typography>
        <Typography paragraph>
          Our solutions are designed to meet banking security standards:
        </Typography>
        <Grid container spacing={2}>
          {[
            'PCI DSS Compliance',
            'ISO 27001',
            'Basel III Standards',
            'Local Banking Regulations'
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
          Secure Your Financial Institution
        </Typography>
        <Typography variant="body1" paragraph color="text.secondary">
          Contact our banking security experts for a customized solution
        </Typography>
        <Button variant="contained" color="primary" size="large" startIcon={<AccountBalance />}>
          Schedule a Consultation
        </Button>
      </Box>
    </Container>
  );
};

export default BankingSolutionsPage;
