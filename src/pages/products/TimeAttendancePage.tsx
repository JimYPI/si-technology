import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
  Button,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  Fingerprint,
  Face,
  Timer,
  Cloud,
  Check,
  PhoneAndroid,
  Language,
  Security
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

const products = [
  {
    id: 'ta100',
    name: 'TimeTrack Pro',
    image: '/images/products/timetrack-pro.jpg',
    category: 'Biometric',
    description: 'Advanced biometric time attendance terminal with facial recognition',
    features: [
      'Facial recognition & fingerprint',
      'Temperature screening',
      'Mask detection',
      'Cloud connectivity',
      'Mobile app integration'
    ],
    specifications: {
      capacity: '3000 faces, 5000 fingerprints',
      display: '7" touch screen',
      connectivity: 'WiFi, Ethernet',
      storage: '16GB flash memory',
      battery: 'Backup battery included'
    }
  },
  {
    id: 'ta200',
    name: 'MobileTime Plus',
    image: '/images/products/mobiletime-plus.jpg',
    category: 'Mobile',
    description: 'Mobile time tracking solution for remote workforce',
    features: [
      'GPS location tracking',
      'Offline operation mode',
      'Photo verification',
      'Real-time synchronization',
      'Geofencing support'
    ],
    specifications: {
      platform: 'iOS & Android',
      storage: 'Cloud-based',
      features: 'GPS, Camera access',
      integration: 'REST API available',
      security: 'End-to-end encryption'
    }
  },
  {
    id: 'ta300',
    name: 'CloudTime Enterprise',
    image: '/images/products/cloudtime-enterprise.jpg',
    category: 'Cloud',
    description: 'Cloud-based time and attendance management system',
    features: [
      'Web-based interface',
      'Multiple device support',
      'Advanced reporting',
      'Integration capabilities',
      'Automated scheduling'
    ],
    specifications: {
      deployment: 'Cloud/On-premise',
      users: 'Unlimited',
      storage: 'Unlimited',
      backup: 'Daily automated',
      support: '24/7 available'
    }
  }
];

const features = [
  {
    icon: <Fingerprint />,
    title: 'Biometric Authentication',
    description: 'Multiple biometric verification methods'
  },
  {
    icon: <Cloud />,
    title: 'Cloud Integration',
    description: 'Seamless cloud connectivity and backup'
  },
  {
    icon: <PhoneAndroid />,
    title: 'Mobile Access',
    description: 'Mobile app for remote management'
  },
  {
    icon: <Language />,
    title: 'Global Accessibility',
    description: 'Access from anywhere in the world'
  },
  {
    icon: <Timer />,
    title: 'Real-time Tracking',
    description: 'Instant attendance tracking and updates'
  },
  {
    icon: <Security />,
    title: 'Enhanced Security',
    description: 'Advanced security features and encryption'
  }
];

const TimeAttendancePage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Hero Section */}
      <Box sx={{ mb: 8, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Time & Attendance Solutions
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Modern workforce management with advanced time tracking technology
        </Typography>
      </Box>

      {/* Key Features */}
      <Grid container spacing={4} sx={{ mb: 8 }}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: '100%', textAlign: 'center', p: 2 }}>
              <Box sx={{ mb: 2 }}>
                {feature.icon}
              </Box>
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

      {/* Products */}
      <Typography variant="h4" sx={{ mb: 4 }}>
        Our Products
      </Typography>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} md={4}>
            <StyledCard>
              <CardMedia
                component="img"
                height="240"
                image={product.image}
                alt={product.name}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ mb: 2 }}>
                  <Chip label={product.category} color="primary" size="small" />
                </Box>
                <Typography gutterBottom variant="h5" component="h2">
                  {product.name}
                </Typography>
                <Typography paragraph color="text.secondary">
                  {product.description}
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography variant="h6" gutterBottom>
                  Key Features
                </Typography>
                <List dense>
                  {product.features.map((feature, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <Check color="primary" />
                      </ListItemIcon>
                      <ListItemText primary={feature} />
                    </ListItem>
                  ))}
                </List>
                <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                  Learn More
                </Button>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>

      {/* Integration Section */}
      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Seamless Integration
        </Typography>
        <Typography variant="body1" paragraph color="text.secondary">
          Our time and attendance solutions integrate with popular HR and payroll systems
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {['ADP', 'Workday', 'SAP', 'Oracle'].map((partner) => (
            <Grid item key={partner}>
              <Chip label={partner} variant="outlined" />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Call to Action */}
      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Ready to Modernize Your Workforce Management?
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Contact our experts for a customized time and attendance solution
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Request a Demo
        </Button>
      </Box>
    </Container>
  );
};

export default TimeAttendancePage;
