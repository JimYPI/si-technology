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
} from '@mui/material';
import {
  Description,
  Search,
  Download,
  Language,
  CalendarToday,
  Storage,
} from '@mui/icons-material';

const Datasheet = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const datasheets = [
    {
      title: 'ZKBioSecurity Access Control',
      description: 'Technical specifications for access control solutions',
      version: '3.2.0',
      date: '2024-01-15',
      size: '2.5 MB',
      languages: ['English', 'French', 'Spanish'],
      category: 'Access Control',
    },
    {
      title: 'Biometric Reader Series',
      description: 'Detailed specifications for biometric devices',
      version: '2.1.0',
      date: '2024-01-10',
      size: '3.1 MB',
      languages: ['English', 'French', 'German'],
      category: 'Biometrics',
    },
    {
      title: 'Time Attendance Solutions',
      description: 'Complete specifications for time attendance systems',
      version: '4.0.0',
      date: '2024-01-05',
      size: '1.8 MB',
      languages: ['English', 'French', 'Italian'],
      category: 'Time Attendance',
    },
  ];

  const filteredDatasheets = datasheets.filter(
    (datasheet) =>
      datasheet.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      datasheet.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      datasheet.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper sx={{ p: 4, mb: 4, bgcolor: 'primary.main', color: 'primary.contrastText' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Description sx={{ fontSize: 40, mr: 2 }} />
          <Typography variant="h3" component="h1">
            Product Datasheets
          </Typography>
        </Box>
        <Typography variant="h6">
          Access technical specifications and product details
        </Typography>
      </Paper>

      <Paper sx={{ p: 3, mb: 4 }}>
        <TextField
          fullWidth
          placeholder="Search datasheets..."
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
        {filteredDatasheets.map((datasheet, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {datasheet.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {datasheet.description}
                </Typography>
                
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <CalendarToday sx={{ fontSize: 'small', mr: 1 }} />
                      <Typography variant="body2" color="text.secondary">
                        Updated: {datasheet.date}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Storage sx={{ fontSize: 'small', mr: 1 }} />
                      <Typography variant="body2" color="text.secondary">
                        Version: {datasheet.version} | Size: {datasheet.size}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Language sx={{ fontSize: 'small' }} />
                      {datasheet.languages.map((lang) => (
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
                  Download Datasheet
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Datasheet;
