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
  Tabs,
  Tab,
} from '@mui/material';
import {
  Code,
  Search,
  Download,
  Language,
  CalendarToday,
  Storage,
  CheckCircle,
  Api,
  GitHub,
  Terminal,
} from '@mui/icons-material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`sdk-tabpanel-${index}`}
      aria-labelledby={`sdk-tab-${index}`}
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

const Sdk = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const sdks = {
    rest: [
      {
        title: 'ZKBioSecurity REST API SDK',
        description: 'Complete REST API SDK for ZKBioSecurity platform integration',
        version: '3.2.0',
        date: '2024-01-15',
        size: '2.8 MB',
        languages: ['Python', 'Java', 'C#'],
        features: [
          'Authentication endpoints',
          'User management',
          'Access control',
          'Time attendance',
        ],
        requirements: [
          'API Key required',
          'HTTPS support',
          'JSON processing capability',
        ],
      },
    ],
    mobile: [
      {
        title: 'Mobile SDK Package',
        description: 'Mobile development SDK for iOS and Android platforms',
        version: '2.1.0',
        date: '2024-01-10',
        size: '5.2 MB',
        languages: ['Swift', 'Kotlin'],
        features: [
          'Biometric capture',
          'Device communication',
          'Secure data transfer',
          'Offline capabilities',
        ],
        requirements: [
          'iOS 13+ / Android 8+',
          'Development certificates',
          'Mobile device with biometric sensors',
        ],
      },
    ],
    desktop: [
      {
        title: 'Desktop Integration SDK',
        description: 'SDK for desktop application development and integration',
        version: '4.0.0',
        date: '2024-01-05',
        size: '4.5 MB',
        languages: ['C++', 'C#', '.NET'],
        features: [
          'Hardware integration',
          'Database connectivity',
          'Real-time monitoring',
          'Event handling',
        ],
        requirements: [
          'Windows 10/11',
          'Visual Studio 2019+',
          '.NET Framework 4.7+',
        ],
      },
    ],
  };

  const getCurrentSDKs = () => {
    const categories = ['rest', 'mobile', 'desktop'];
    const currentCategory = categories[tabValue];
    return sdks[currentCategory as keyof typeof sdks].filter(
      (sdk) =>
        sdk.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sdk.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper sx={{ p: 4, mb: 4, bgcolor: 'primary.main', color: 'primary.contrastText' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Code sx={{ fontSize: 40, mr: 2 }} />
          <Typography variant="h3" component="h1">
            Development SDKs
          </Typography>
        </Box>
        <Typography variant="h6">
          Software Development Kits for system integration
        </Typography>
      </Paper>

      <Paper sx={{ p: 3, mb: 4 }}>
        <TextField
          fullWidth
          placeholder="Search SDKs..."
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

      <Paper sx={{ mb: 4 }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab icon={<Api />} label="REST API" />
          <Tab icon={<GitHub />} label="Mobile" />
          <Tab icon={<Terminal />} label="Desktop" />
        </Tabs>

        <TabPanel value={tabValue} index={tabValue}>
          <Grid container spacing={3}>
            {getCurrentSDKs().map((sdk, index) => (
              <Grid item xs={12} key={index}>
                <Card>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Code color="primary" sx={{ mr: 1 }} />
                      <Typography variant="h5">
                        {sdk.title}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {sdk.description}
                    </Typography>
                    
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={6}>
                        <Typography variant="subtitle2" gutterBottom>
                          Features
                        </Typography>
                        <List dense>
                          {sdk.features.map((feature, idx) => (
                            <ListItem key={idx}>
                              <ListItemIcon>
                                <CheckCircle color="primary" fontSize="small" />
                              </ListItemIcon>
                              <ListItemText primary={feature} />
                            </ListItem>
                          ))}
                        </List>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography variant="subtitle2" gutterBottom>
                          Requirements
                        </Typography>
                        <List dense>
                          {sdk.requirements.map((req, idx) => (
                            <ListItem key={idx}>
                              <ListItemIcon>
                                <CheckCircle color="success" fontSize="small" />
                              </ListItemIcon>
                              <ListItemText primary={req} />
                            </ListItem>
                          ))}
                        </List>
                      </Grid>
                    </Grid>

                    <Box sx={{ mt: 2 }}>
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <CalendarToday sx={{ fontSize: 'small', mr: 1 }} />
                            <Typography variant="body2" color="text.secondary">
                              Updated: {sdk.date}
                            </Typography>
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <Storage sx={{ fontSize: 'small', mr: 1 }} />
                            <Typography variant="body2" color="text.secondary">
                              Version: {sdk.version} | Size: {sdk.size}
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={12}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Language sx={{ fontSize: 'small' }} />
                            {sdk.languages.map((lang) => (
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
                      Download SDK Package
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </TabPanel>
      </Paper>
    </Container>
  );
};

export default Sdk;
