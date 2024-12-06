import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Paper,
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
  InputAdornment,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Rating,
} from '@mui/material';
import {
  MenuBook,
  Search,
  Download,
  Language,
  CalendarToday,
  Storage,
  CheckCircle,
  ShoppingCart,
  Category,
  LocalShipping,
} from '@mui/icons-material';

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    {
      title: 'ProFace X',
      description: 'Visible Light Facial Recognition Terminal',
      version: '2024',
      date: '2024-01-15',
      size: '5.2 MB',
      languages: ['English', 'French', 'Spanish'],
      category: 'Facial Recognition',
      rating: 4.8,
      specifications: [
        'Recognition speed: <0.3s',
        'User capacity: 50,000',
        'Face capacity: 50,000',
        'Display: 8-inch touch screen',
      ],
      features: [
        'Anti-spoofing technology',
        'Temperature detection',
        'Mask detection',
        'Mobile access',
      ],
      applications: [
        'Office buildings',
        'Government facilities',
        'Schools',
        'Healthcare',
      ],
      availability: 'In Stock',
    },
    {
      title: 'FP100 Series',
      description: 'Professional Fingerprint Access Control Terminal',
      version: '2024',
      date: '2024-01-10',
      size: '4.8 MB',
      languages: ['English', 'French', 'German'],
      category: 'Fingerprint',
      rating: 4.9,
      specifications: [
        'Recognition speed: <1s',
        'User capacity: 10,000',
        'Fingerprint capacity: 20,000',
        'Display: 2.8-inch LCD',
      ],
      features: [
        'Multiple verification modes',
        'Anti-fake detection',
        'Waterproof design',
        'RFID card support',
      ],
      applications: [
        'Access control',
        'Time attendance',
        'Secure areas',
        'Manufacturing',
      ],
      availability: 'Pre-order',
    },
    {
      title: 'PalmSecure',
      description: 'Advanced Palm Vein Recognition System',
      version: '2024',
      date: '2024-01-05',
      size: '4.5 MB',
      languages: ['English', 'French', 'Italian'],
      category: 'Palm Vein',
      rating: 4.7,
      specifications: [
        'Recognition speed: <1s',
        'User capacity: 20,000',
        'Template size: 2KB',
        'Scanning distance: 4-6cm',
      ],
      features: [
        'Contactless authentication',
        'High security level',
        'Hygienic solution',
        'Easy integration',
      ],
      applications: [
        'Healthcare facilities',
        'Data centers',
        'Research labs',
        'Banking',
      ],
      availability: 'In Stock',
    },
  ];

  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper sx={{ p: 4, mb: 4, bgcolor: 'primary.main', color: 'primary.contrastText' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <MenuBook sx={{ fontSize: 40, mr: 2 }} />
          <Typography variant="h3" component="h1">
            Product Catalog
          </Typography>
        </Box>
        <Typography variant="h6">
          Complete product specifications and ordering information
        </Typography>
      </Paper>

      <Paper sx={{ p: 3, mb: 4 }}>
        <TextField
          fullWidth
          placeholder="Search products by name, category, or feature..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
      </Paper>

      <Grid container spacing={3}>
        {filteredProducts.map((product, index) => (
          <Grid item xs={12} key={index}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                  <Category color="primary" sx={{ mr: 2, fontSize: 40 }} />
                  <Box>
                    <Typography variant="h5">
                      {product.title}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                      <Rating
                        value={product.rating}
                        precision={0.1}
                        readOnly
                        size="small"
                      />
                      <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                        {product.rating} product rating
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Typography variant="body2" color="text.secondary" paragraph>
                  {product.description}
                </Typography>

                <Box sx={{ mb: 2, display: 'flex', gap: 1 }}>
                  <Chip
                    label={product.category}
                    color="primary"
                    variant="outlined"
                    size="small"
                  />
                  <Chip
                    icon={<LocalShipping />}
                    label={product.availability}
                    color={product.availability === 'In Stock' ? 'success' : 'warning'}
                    variant="outlined"
                    size="small"
                  />
                </Box>

                <Grid container spacing={3}>
                  <Grid item xs={12} md={4}>
                    <Typography variant="subtitle2" gutterBottom>
                      Technical Specifications
                    </Typography>
                    <List dense>
                      {product.specifications.map((spec, idx) => (
                        <ListItem key={idx}>
                          <ListItemIcon>
                            <CheckCircle color="primary" fontSize="small" />
                          </ListItemIcon>
                          <ListItemText primary={spec} />
                        </ListItem>
                      ))}
                    </List>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Typography variant="subtitle2" gutterBottom>
                      Key Features
                    </Typography>
                    <List dense>
                      {product.features.map((feature, idx) => (
                        <ListItem key={idx}>
                          <ListItemIcon>
                            <CheckCircle color="primary" fontSize="small" />
                          </ListItemIcon>
                          <ListItemText primary={feature} />
                        </ListItem>
                      ))}
                    </List>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Typography variant="subtitle2" gutterBottom>
                      Applications
                    </Typography>
                    <List dense>
                      {product.applications.map((app, idx) => (
                        <ListItem key={idx}>
                          <ListItemIcon>
                            <CheckCircle color="success" fontSize="small" />
                          </ListItemIcon>
                          <ListItemText primary={app} />
                        </ListItem>
                      ))}
                    </List>
                  </Grid>
                </Grid>

                <Divider sx={{ my: 2 }} />

                <Box sx={{ mt: 2 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <CalendarToday sx={{ fontSize: 'small', mr: 1 }} />
                        <Typography variant="body2" color="text.secondary">
                          Updated: {product.date}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Storage sx={{ fontSize: 'small', mr: 1 }} />
                        <Typography variant="body2" color="text.secondary">
                          Version: {product.version} | Size: {product.size}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Language sx={{ fontSize: 'small' }} />
                        {product.languages.map((lang) => (
                          <Chip
                            key={lang}
                            label={lang}
                            size="small"
                            variant="outlined"
                          />
                        ))}
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
              <CardActions>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Button
                      variant="contained"
                      startIcon={<Download />}
                      fullWidth
                    >
                      Download Catalog
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Button
                      variant="outlined"
                      startIcon={<ShoppingCart />}
                      fullWidth
                    >
                      Request Quote
                    </Button>
                  </Grid>
                </Grid>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Catalog;
