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
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import {
  ExpandMore,
  CheckCircle,
  Speed,
  Thermostat,
  People,
  Storage,
  Security,
  CloudQueue,
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
    id: 'thermal-camera',
    name: 'ThermalScan Pro X1',
    image: '/images/products/thermal-camera.jpg',
    description: 'High-precision thermal imaging camera for rapid temperature screening',
    features: [
      'Real-time temperature detection',
      'Face detection with mask recognition',
      'Multi-person screening',
      'Automatic alarm system',
      'Historical data tracking'
    ],
    specifications: {
      accuracy: '±0.3°C',
      range: '30-45°C',
      resolution: '384 × 288',
      response: '<30ms',
      interface: 'Ethernet, USB'
    }
  },
  {
    id: 'kiosk',
    name: 'HealthGuard Kiosk K2',
    image: '/images/products/kiosk.jpg',
    description: 'All-in-one temperature screening kiosk with access control integration',
    features: [
      'Contactless temperature measurement',
      'Facial recognition',
      'Access control integration',
      'Attendance management',
      'Mobile app support'
    ],
    specifications: {
      display: '8" LCD touchscreen',
      storage: '32GB',
      recognition: '<0.5s',
      capacity: '10,000 faces',
      connectivity: 'Wi-Fi, 4G'
    }
  }
];

const features = [
  {
    icon: <Thermostat />,
    title: 'Accurate Detection',
    description: 'High-precision temperature measurement with ±0.3°C accuracy'
  },
  {
    icon: <Speed />,
    title: 'Rapid Screening',
    description: 'Fast detection speed of less than 0.5 seconds per person'
  },
  {
    icon: <People />,
    title: 'Multi-Person Detection',
    description: 'Simultaneously screen multiple individuals in real-time'
  },
  {
    icon: <Storage />,
    title: 'Data Management',
    description: 'Comprehensive data storage and analysis capabilities'
  },
  {
    icon: <Security />,
    title: 'Privacy Protection',
    description: 'Advanced encryption and data protection measures'
  },
  {
    icon: <CloudQueue />,
    title: 'Cloud Integration',
    description: 'Seamless integration with cloud-based management systems'
  }
];

const faqs = [
  {
    question: 'How accurate are the temperature measurements?',
    answer: 'Our temperature screening solutions provide highly accurate measurements with a precision of ±0.3°C, meeting international standards for fever detection.'
  },
  {
    question: 'Can the system detect multiple people simultaneously?',
    answer: 'Yes, our advanced AI-powered systems can detect and measure temperatures for multiple individuals simultaneously, making it ideal for high-traffic areas.'
  },
  {
    question: 'How is the data stored and protected?',
    answer: 'All data is encrypted and stored securely, complying with GDPR and other privacy regulations. Users have full control over data retention policies.'
  },
  {
    question: 'What integration options are available?',
    answer: 'Our solutions can integrate with existing access control systems, HR management software, and building management systems through standard APIs.'
  }
];

const TemperatureScreeningPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Hero Section */}
      <Box sx={{ mb: 8, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Temperature Screening Solutions
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Advanced thermal detection systems for safer environments
        </Typography>
      </Box>

      {/* Key Features Grid */}
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

      {/* Products Section */}
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        Our Solutions
      </Typography>
      <Grid container spacing={4} sx={{ mb: 8 }}>
        {products.map((product) => (
          <Grid item xs={12} md={6} key={product.id}>
            <StyledCard>
              <CardMedia
                component="img"
                height="300"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {product.description}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Key Features
                </Typography>
                <List dense>
                  {product.features.map((feature, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <CheckCircle color="primary" />
                      </ListItemIcon>
                      <ListItemText primary={feature} />
                    </ListItem>
                  ))}
                </List>
                <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                  Technical Specifications
                </Typography>
                <Grid container spacing={2}>
                  {Object.entries(product.specifications).map(([key, value], index) => (
                    <Grid item xs={6} key={index}>
                      <Typography variant="body2" color="text.secondary" sx={{ textTransform: 'capitalize' }}>
                        {key}:
                      </Typography>
                      <Typography variant="body1">
                        {value}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
                <Box sx={{ mt: 3 }}>
                  <Button variant="contained" color="primary" sx={{ mr: 2 }}>
                    Request Demo
                  </Button>
                  <Button variant="outlined" color="primary">
                    Learn More
                  </Button>
                </Box>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>

      {/* FAQ Section */}
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        Frequently Asked Questions
      </Typography>
      <Box sx={{ mb: 8 }}>
        {faqs.map((faq, index) => (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant="h6">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      {/* Call to Action */}
      <Paper sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Ready to Enhance Your Safety Measures?
        </Typography>
        <Typography variant="body1" paragraph color="text.secondary">
          Contact our experts to find the right temperature screening solution for your needs
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Schedule a Consultation
        </Button>
      </Paper>
    </Container>
  );
};

export default TemperatureScreeningPage;
