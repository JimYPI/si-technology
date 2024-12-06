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
  Tabs,
  Tab,
  Paper,
} from '@mui/material';
import {
  Fingerprint,
  CreditCard,
  Keyboard,
  PhoneAndroid,
  Security,
  Battery90
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

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
    id: 'biometric',
    name: 'SmartBio Lock Pro',
    image: '/images/products/biometric-lock.jpg',
    description: 'Advanced biometric door lock with multiple authentication methods',
    features: [
      'Fingerprint recognition',
      'PIN code backup',
      'Mobile app control',
      'Emergency key override',
      'Low battery warning'
    ],
    specifications: {
      users: '100 fingerprints, 100 cards',
      powerSupply: '4 AA batteries',
      backup: 'USB-C emergency power',
      material: 'Zinc alloy',
      warranty: '2 years'
    }
  },
  {
    id: 'card',
    name: 'ProAccess RFID Lock',
    image: '/images/products/rfid-lock.jpg',
    description: 'Professional RFID card door lock for businesses',
    features: [
      'Multiple card formats',
      'Anti-tampering alarm',
      'Event logging',
      'Emergency override',
      'Battery backup'
    ],
    specifications: {
      users: '1000 cards',
      powerSupply: 'Lithium battery',
      backup: '9V battery backup',
      material: 'Stainless steel',
      warranty: '3 years'
    }
  },
  {
    id: 'smart',
    name: 'SmartConnect WiFi Lock',
    image: '/images/products/wifi-lock.jpg',
    description: 'WiFi-enabled smart lock with remote access',
    features: [
      'Remote access control',
      'Temporary access codes',
      'Real-time notifications',
      'Integration with smart home',
      'Auto-lock function'
    ],
    specifications: {
      users: 'Unlimited (cloud-based)',
      powerSupply: 'Rechargeable lithium',
      backup: 'Physical key',
      material: 'Aluminum alloy',
      warranty: '2 years'
    }
  }
];

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`lock-tabpanel-${index}`}
      aria-labelledby={`lock-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const DoorLocksPage = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Hero Section */}
      <Box sx={{ mb: 8, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Smart Door Locks
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Secure your premises with next-generation door lock technology
        </Typography>
      </Box>

      {/* Features Grid */}
      <Grid container spacing={4} sx={{ mb: 8 }}>
        {[
          { icon: <Fingerprint />, title: 'Biometric Access', desc: 'Advanced fingerprint recognition' },
          { icon: <CreditCard />, title: 'Card Access', desc: 'Support for various card formats' },
          { icon: <Keyboard />, title: 'PIN Code', desc: 'Secure PIN code access' },
          { icon: <PhoneAndroid />, title: 'Mobile Access', desc: 'Smartphone app control' },
          { icon: <Security />, title: 'Anti-tampering', desc: 'Built-in security features' },
          { icon: <Battery90 />, title: 'Long Battery Life', desc: 'Extended battery operation' }
        ].map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper elevation={2} sx={{ p: 3, height: '100%', textAlign: 'center' }}>
              <Box sx={{ mb: 2 }}>
                {feature.icon}
              </Box>
              <Typography variant="h6" gutterBottom>
                {feature.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {feature.desc}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Product Tabs */}
      <Box sx={{ mb: 8 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          textColor="primary"
          indicatorColor="primary"
        >
          {products.map((product, index) => (
            <Tab label={product.name} key={index} />
          ))}
        </Tabs>

        {products.map((product, index) => (
          <TabPanel value={value} index={index} key={index}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <CardMedia
                  component="img"
                  height="400"
                  image={product.image}
                  alt={product.name}
                  sx={{ objectFit: 'cover', borderRadius: 2 }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h4" gutterBottom>
                  {product.name}
                </Typography>
                <Typography paragraph color="text.secondary">
                  {product.description}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Key Features
                </Typography>
                <ul>
                  {product.features.map((feature, idx) => (
                    <li key={idx}>
                      <Typography paragraph>{feature}</Typography>
                    </li>
                  ))}
                </ul>
                <Button variant="contained" color="primary" size="large">
                  Request Quote
                </Button>
              </Grid>
            </Grid>
          </TabPanel>
        ))}
      </Box>

      {/* Call to Action */}
      <Box sx={{ textAlign: 'center', mt: 8 }}>
        <Typography variant="h4" gutterBottom>
          Ready to Upgrade Your Security?
        </Typography>
        <Typography variant="body1" paragraph color="text.secondary">
          Contact our experts for a personalized security solution
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Contact Sales
        </Button>
      </Box>
    </Container>
  );
};

export default DoorLocksPage;
