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
  Chip,
  Divider,
} from '@mui/material';
import {
  Security,
  Scanner,
  Warning,
  Speed,
  VerifiedUser,
  DataUsage
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
    id: 'metal-detector',
    name: 'ProScan X1000',
    category: 'Metal Detector',
    image: '/images/products/metal-detector.jpg',
    description: 'Advanced walk-through metal detector with multi-zone detection',
    features: [
      'Multi-zone detection',
      'High throughput rate',
      'Weather resistant',
      'LCD display',
      'Remote management'
    ],
    specifications: {
      zones: '33 detection zones',
      throughput: '60 people/minute',
      power: '110-240V AC',
      display: '7" LCD touchscreen',
      connectivity: 'Ethernet, USB'
    }
  },
  {
    id: 'xray',
    name: 'XRay Pro 6550',
    category: 'X-Ray Scanner',
    image: '/images/products/xray-scanner.jpg',
    description: 'High-resolution X-ray inspection system for baggage screening',
    features: [
      'High resolution imaging',
      'Automatic threat detection',
      'Dual-energy scanning',
      'Material discrimination',
      'Image enhancement'
    ],
    specifications: {
      tunnel: '655mm × 500mm',
      resolution: '40 AWG wire',
      throughput: '300 bags/hour',
      generator: '160kV',
      display: 'Dual 24" LCD'
    }
  },
  {
    id: 'explosive',
    name: 'ExplosiveScan ET200',
    category: 'Explosive Detector',
    image: '/images/products/explosive-detector.jpg',
    description: 'Advanced trace detector for explosives and narcotics',
    features: [
      'Fast detection time',
      'Multiple substance detection',
      'Non-radioactive source',
      'Automatic calibration',
      'Portable design'
    ],
    specifications: {
      detection: '<3 seconds',
      substances: '300+ compounds',
      battery: '8 hours operation',
      display: '4.3" touchscreen',
      weight: '1.5kg'
    }
  }
];

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`product-tabpanel-${index}`}
      aria-labelledby={`product-tab-${index}`}
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

const SecurityInspectionPage = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Hero Section */}
      <Box sx={{ mb: 8, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Security Inspection Equipment
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Advanced security screening solutions for enhanced facility protection
        </Typography>
      </Box>

      {/* Key Features */}
      <Grid container spacing={4} sx={{ mb: 8 }}>
        {[
          { icon: <Security />, title: 'Advanced Detection', desc: 'State-of-the-art detection technology' },
          { icon: <Scanner />, title: 'High Resolution', desc: 'Crystal clear imaging systems' },
          { icon: <Warning />, title: 'Threat Detection', desc: 'Automatic threat identification' },
          { icon: <Speed />, title: 'Fast Processing', desc: 'High throughput screening' },
          { icon: <VerifiedUser />, title: 'Safety Assured', desc: 'Compliant with safety standards' },
          { icon: <DataUsage />, title: 'Data Analytics', desc: 'Advanced reporting capabilities' }
        ].map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: '100%', textAlign: 'center', p: 2 }}>
              <Box sx={{ mb: 2 }}>
                {feature.icon}
              </Box>
              <Typography variant="h6" gutterBottom>
                {feature.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {feature.desc}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Products Section */}
      <Box sx={{ mb: 8 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          textColor="primary"
          indicatorColor="primary"
        >
          {products.map((product, index) => (
            <Tab label={product.category} key={index} />
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
                <Box sx={{ mb: 2 }}>
                  <Chip label={product.category} color="primary" />
                </Box>
                <Typography variant="h4" gutterBottom>
                  {product.name}
                </Typography>
                <Typography paragraph color="text.secondary">
                  {product.description}
                </Typography>
                
                <Divider sx={{ my: 3 }} />
                
                <Typography variant="h6" gutterBottom>
                  Key Features
                </Typography>
                <Grid container spacing={2} sx={{ mb: 3 }}>
                  {product.features.map((feature, idx) => (
                    <Grid item xs={12} sm={6} key={idx}>
                      <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
                        <Security sx={{ mr: 1, fontSize: 'small' }} color="primary" />
                        {feature}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>

                <Divider sx={{ my: 3 }} />

                <Typography variant="h6" gutterBottom>
                  Technical Specifications
                </Typography>
                <Grid container spacing={2}>
                  {Object.entries(product.specifications).map(([key, value], idx) => (
                    <Grid item xs={12} sm={6} key={idx}>
                      <Typography variant="body2" color="text.secondary" sx={{ textTransform: 'capitalize' }}>
                        {key}:
                      </Typography>
                      <Typography variant="body1">
                        {value}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>

                <Box sx={{ mt: 4 }}>
                  <Button variant="contained" color="primary" size="large" sx={{ mr: 2 }}>
                    Request Quote
                  </Button>
                  <Button variant="outlined" color="primary" size="large">
                    Download Specs
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </TabPanel>
        ))}
      </Box>

      {/* Certifications Section */}
      <Box sx={{ mb: 8, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Certifications & Compliance
        </Typography>
        <Typography variant="body1" paragraph color="text.secondary">
          Our security inspection equipment meets or exceeds international standards
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {['CE', 'ISO 9001', 'FDA', 'TSA Approved', 'ECAC'].map((cert) => (
            <Grid item key={cert}>
              <Chip label={cert} variant="outlined" />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Call to Action */}
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Enhance Your Security Infrastructure
        </Typography>
        <Typography variant="body1" paragraph color="text.secondary">
          Contact our security experts for a customized solution
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Schedule a Consultation
        </Button>
      </Box>
    </Container>
  );
};

export default SecurityInspectionPage;
