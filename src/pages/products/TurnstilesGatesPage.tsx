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
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { Check, Security, Speed, Build } from '@mui/icons-material';
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
    id: 1,
    name: 'ProTurn X100',
    image: '/images/products/turnstile-x100.jpg',
    description: 'Full-height turnstile with advanced access control integration',
    features: [
      'Bi-directional access control',
      'Robust stainless steel construction',
      'Integration with all access control systems',
      'Emergency failsafe operation'
    ]
  },
  {
    id: 2,
    name: 'SpeedGate Pro',
    image: '/images/products/speedgate-pro.jpg',
    description: 'Elegant speed gate for high-traffic lobby areas',
    features: [
      'Fast throughput rate',
      'Sleek glass design',
      'Advanced tailgating detection',
      'Multiple operation modes'
    ]
  },
  {
    id: 3,
    name: 'SwingGate 500',
    image: '/images/products/swinggate-500.jpg',
    description: 'Accessible gate for ADA compliance',
    features: [
      'Wide passage width',
      'Automatic operation',
      'Safety sensors',
      'Durable mechanism'
    ]
  }
];

const features = [
  {
    icon: <Security />,
    title: 'Enhanced Security',
    description: 'Prevent unauthorized access with robust physical barriers'
  },
  {
    icon: <Speed />,
    title: 'High Throughput',
    description: 'Efficient processing of high visitor traffic'
  },
  {
    icon: <Build />,
    title: 'Durability',
    description: 'Built to last with high-quality materials'
  }
];

const TurnstilesGatesPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Hero Section */}
      <Box sx={{ mb: 8, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Turnstiles & Security Gates
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Secure your premises with our advanced turnstiles and gate solutions
        </Typography>
      </Box>

      {/* Key Features */}
      <Grid container spacing={4} sx={{ mb: 8 }}>
        {features.map((feature, index) => (
          <Grid item xs={12} md={4} key={index}>
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
                <Typography gutterBottom variant="h5" component="h2">
                  {product.name}
                </Typography>
                <Typography paragraph>
                  {product.description}
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
                <Button variant="contained" color="primary" fullWidth>
                  Learn More
                </Button>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>

      {/* Call to Action */}
      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Ready to Secure Your Facility?
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Contact our experts for a customized security solution
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Request a Quote
        </Button>
      </Box>
    </Container>
  );
};

export default TurnstilesGatesPage;
