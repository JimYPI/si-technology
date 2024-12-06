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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import {
  MenuBook,
  Search,
  Download,
  Language,
  CalendarToday,
  Storage,
  Category,
} from '@mui/icons-material';

const UserManual = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('all');
  const [selectedLanguage, setSelectedLanguage] = useState('all');

  const manuals = [
    {
      title: 'ZKBioSecurity User Guide',
      description: 'Complete user manual for ZKBioSecurity platform',
      version: '3.2.0',
      date: '2024-01-15',
      size: '5.2 MB',
      languages: ['English', 'French', 'Spanish'],
      product: 'ZKBioSecurity',
      type: 'User Manual',
    },
    {
      title: 'ProFace X Setup Guide',
      description: 'Installation and configuration guide for ProFace X',
      version: '2.0.0',
      date: '2024-01-10',
      size: '3.8 MB',
      languages: ['English', 'French', 'German'],
      product: 'ProFace X',
      type: 'Setup Guide',
    },
    {
      title: 'Time Attendance Manual',
      description: 'User guide for time attendance system',
      version: '4.1.0',
      date: '2024-01-05',
      size: '4.5 MB',
      languages: ['English', 'French', 'Italian'],
      product: 'TimeAttendance',
      type: 'User Manual',
    },
  ];

  const products = ['all', ...Array.from(new Set(manuals.map((manual) => manual.product)))];
  const languages = ['all', ...Array.from(new Set(manuals.flatMap((manual) => manual.languages)))];

  const filteredManuals = manuals.filter(
    (manual) =>
      (manual.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        manual.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedProduct === 'all' || manual.product === selectedProduct) &&
      (selectedLanguage === 'all' || manual.languages.includes(selectedLanguage))
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper sx={{ p: 4, mb: 4, bgcolor: 'primary.main', color: 'primary.contrastText' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <MenuBook sx={{ fontSize: 40, mr: 2 }} />
          <Typography variant="h3" component="h1">
            User Manuals
          </Typography>
        </Box>
        <Typography variant="h6">
          Access product manuals and user guides
        </Typography>
      </Paper>

      <Paper sx={{ p: 3, mb: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              placeholder="Search manuals..."
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
          </Grid>
          <Grid item xs={12} md={3}>
            <FormControl fullWidth>
              <InputLabel>Product</InputLabel>
              <Select
                value={selectedProduct}
                label="Product"
                onChange={(e) => setSelectedProduct(e.target.value)}
              >
                {products.map((product) => (
                  <MenuItem key={product} value={product}>
                    {product === 'all' ? 'All Products' : product}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={3}>
            <FormControl fullWidth>
              <InputLabel>Language</InputLabel>
              <Select
                value={selectedLanguage}
                label="Language"
                onChange={(e) => setSelectedLanguage(e.target.value)}
              >
                {languages.map((language) => (
                  <MenuItem key={language} value={language}>
                    {language === 'all' ? 'All Languages' : language}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Paper>

      <Grid container spacing={3}>
        {filteredManuals.map((manual, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Category color="primary" sx={{ mr: 1 }} />
                  <Typography variant="h6">
                    {manual.title}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {manual.description}
                </Typography>
                
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <CalendarToday sx={{ fontSize: 'small', mr: 1 }} />
                      <Typography variant="body2" color="text.secondary">
                        Updated: {manual.date}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Storage sx={{ fontSize: 'small', mr: 1 }} />
                      <Typography variant="body2" color="text.secondary">
                        Version: {manual.version} | Size: {manual.size}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Language sx={{ fontSize: 'small' }} />
                      {manual.languages.map((lang) => (
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
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  startIcon={<Download />}
                  fullWidth
                >
                  Download Manual
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default UserManual;
