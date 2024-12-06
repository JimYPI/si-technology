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
  Fingerprint,
  Search,
  Download,
  Language,
  CalendarToday,
  Storage,
  CheckCircle,
  Speed,
  Security,
  Face,
} from '@mui/icons-material';

const BiometricsTech = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const technologies = [
    {
      title: 'Face Recognition Technology',
      description: 'Advanced facial recognition algorithms and implementation guides',
      version: '5.2.0',
      date: '2024-01-15',
      size: '4.2 MB',
      languages: ['English', 'French', 'Spanish'],
      category: 'Facial Recognition',
      accuracy: 4.8,
      specifications: [
        'Recognition speed: <0.3s',
        'FAR: ≤0.001%',
        'FRR: ≤0.01%',
        'Live detection capability',
      ],
      features: [
        'Anti-spoofing technology',
        'Multi-angle recognition',
        'Low light performance',
        'Mask detection',
      ],
      applications: [
        'Access control',
        'Time attendance',
        'VIP recognition',
        'Security monitoring',
      ],
    },
    {
      title: 'Fingerprint Recognition System',
      description: 'High-precision fingerprint recognition technology documentation',
      version: '4.1.0',
      date: '2024-01-10',
      size: '3.8 MB',
      languages: ['English', 'French', 'German'],
      category: 'Fingerprint',
      accuracy: 4.9,
      specifications: [
        'Recognition speed: <1s',
        'FAR: ≤0.0001%',
        'FRR: ≤0.01%',
        '500 DPI resolution',
      ],
      features: [
        '360° recognition',
        'Wet/dry finger detection',
        'Anti-fake detection',
        'Multi-finger support',
      ],
      applications: [
        'Physical access control',
        'Mobile device security',
        'Payment verification',
        'Government ID',
      ],
    },
    {
      title: 'Palm Vein Recognition',
      description: 'Contactless palm vein recognition technology guide',
      version: '3.0.0',
      date: '2024-01-05',
      size: '3.5 MB',
      languages: ['English', 'French', 'Italian'],
      category: 'Palm Vein',
      accuracy: 4.7,
      specifications: [
        'Recognition speed: <1s',
        'FAR: ≤0.00001%',
        'FRR: ≤0.01%',
        'Contactless scanning',
      ],
      features: [
        'Non-invasive scanning',
        'High security level',
        'Hygienic solution',
        'Liveness detection',
      ],
      applications: [
        'Healthcare facilities',
        'High-security areas',
        'Banking security',
        'Research laboratories',
      ],
    },
  ];

  const filteredTechnologies = technologies.filter(
    (tech) =>
      tech.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tech.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tech.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper sx={{ p: 4, mb: 4, bgcolor: 'primary.main', color: 'primary.contrastText' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Fingerprint sx={{ fontSize: 40, mr: 2 }} />
          <Typography variant="h3" component="h1">
            Biometric Technologies
          </Typography>
        </Box>
        <Typography variant="h6">
          Advanced biometric recognition technology documentation
        </Typography>
      </Paper>

      <Paper sx={{ p: 3, mb: 4 }}>
        <TextField
          fullWidth
          placeholder="Search biometric technologies..."
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
        {filteredTechnologies.map((tech, index) => (
          <Grid item xs={12} key={index}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                  <Face color="primary" sx={{ mr: 2, fontSize: 40 }} />
                  <Box>
                    <Typography variant="h5">
                      {tech.title}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                      <Rating
                        value={tech.accuracy}
                        precision={0.1}
                        readOnly
                        size="small"
                      />
                      <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                        {tech.accuracy} accuracy rating
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Typography variant="body2" color="text.secondary" paragraph>
                  {tech.description}
                </Typography>

                <Box sx={{ mb: 2 }}>
                  <Chip
                    label={tech.category}
                    color="primary"
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
                      {tech.specifications.map((spec, idx) => (
                        <ListItem key={idx}>
                          <ListItemIcon>
                            <Speed color="primary" fontSize="small" />
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
                      {tech.features.map((feature, idx) => (
                        <ListItem key={idx}>
                          <ListItemIcon>
                            <Security color="primary" fontSize="small" />
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
                      {tech.applications.map((app, idx) => (
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
                          Updated: {tech.date}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Storage sx={{ fontSize: 'small', mr: 1 }} />
                        <Typography variant="body2" color="text.secondary">
                          Version: {tech.version} | Size: {tech.size}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Language sx={{ fontSize: 'small' }} />
                        {tech.languages.map((lang) => (
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
                <Button
                  variant="contained"
                  startIcon={<Download />}
                  fullWidth
                >
                  Download Technical Documentation
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BiometricsTech;
