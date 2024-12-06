import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Box,
  TextField,
  InputAdornment,
  Paper,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
} from '@mui/material';
import {
  Search,
  Description,
  Download,
  Code,
  Book,
  Build,
  Speed,
  Architecture,
  Cases,
  Biotech,
  MenuBook,
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`download-tabpanel-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
};

const DownloadCenter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [tabValue, setTabValue] = useState(0);

  const downloadCategories = [
    {
      title: 'Datasheet',
      icon: <Description />,
      path: '/support/downloads/datasheet',
      description: 'Product specifications and technical details',
    },
    {
      title: 'Software',
      icon: <Code />,
      path: '/support/downloads/software',
      description: 'Latest software and firmware updates',
    },
    {
      title: 'User Manual',
      icon: <Book />,
      path: '/support/downloads/manual',
      description: 'Comprehensive product documentation',
    },
    {
      title: 'Installation Guide',
      icon: <Build />,
      path: '/support/downloads/installation',
      description: 'Step-by-step installation instructions',
    },
    {
      title: 'Quick Guide',
      icon: <Speed />,
      path: '/support/downloads/quickguide',
      description: 'Quick start guides and reference materials',
    },
    {
      title: 'SDK',
      icon: <Code />,
      path: '/support/downloads/sdk',
      description: 'Development tools and resources',
    },
    {
      title: 'A&E Specifications',
      icon: <Architecture />,
      path: '/support/downloads/specifications',
      description: 'Architectural and engineering specifications',
    },
    {
      title: 'Solutions',
      icon: <Cases />,
      path: '/support/downloads/solutions',
      description: 'Industry-specific solution guides',
    },
    {
      title: 'Case Studies',
      icon: <Cases />,
      path: '/support/downloads/cases',
      description: 'Customer success stories and implementations',
    },
    {
      title: 'Biometrics Technology',
      icon: <Biotech />,
      path: '/support/downloads/biometrics',
      description: 'Biometric technology documentation',
    },
    {
      title: 'Catalog',
      icon: <MenuBook />,
      path: '/support/downloads/catalog',
      description: 'Product catalogs and brochures',
    },
  ];

  const recentDownloads = [
    {
      title: 'Access Control SDK v3.2.1',
      type: 'SDK',
      date: '2024-01-15',
      size: '45.2 MB',
    },
    {
      title: 'Time Attendance User Manual',
      type: 'Manual',
      date: '2024-01-14',
      size: '12.8 MB',
    },
    {
      title: 'Facial Recognition Datasheet',
      type: 'Datasheet',
      date: '2024-01-13',
      size: '2.4 MB',
    },
  ];

  const popularDownloads = [
    {
      title: 'ZKBioSecurity Software',
      type: 'Software',
      downloads: '15.2K',
      size: '156 MB',
    },
    {
      title: 'Quick Installation Guide',
      type: 'Guide',
      downloads: '12.8K',
      size: '8.6 MB',
    },
    {
      title: 'API Documentation',
      type: 'SDK',
      downloads: '10.5K',
      size: '3.2 MB',
    },
  ];

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper sx={{ p: 4, mb: 4, bgcolor: 'primary.main', color: 'primary.contrastText' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Download Center
        </Typography>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Access all our product resources, documentation, and software
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search downloads..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search sx={{ color: 'primary.contrastText' }} />
              </InputAdornment>
            ),
            sx: { 
              bgcolor: 'background.paper',
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'transparent',
              },
            },
          }}
        />
      </Paper>

      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ mb: 4 }}>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons="auto"
            >
              <Tab label="All Categories" />
              <Tab label="Recent" />
              <Tab label="Popular" />
            </Tabs>

            <TabPanel value={tabValue} index={0}>
              <Grid container spacing={3}>
                {downloadCategories.map((category) => (
                  <Grid item xs={12} sm={6} md={4} key={category.title}>
                    <Card sx={{ height: '100%' }}>
                      <CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          {category.icon}
                          <Typography variant="h6" sx={{ ml: 1 }}>
                            {category.title}
                          </Typography>
                        </Box>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                          {category.description}
                        </Typography>
                        <Button
                          component={RouterLink}
                          to={category.path}
                          variant="outlined"
                          fullWidth
                        >
                          View All
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </TabPanel>

            <TabPanel value={tabValue} index={1}>
              <List>
                {recentDownloads.map((item) => (
                  <ListItem key={item.title}>
                    <ListItemIcon>
                      <Download />
                    </ListItemIcon>
                    <ListItemText
                      primary={item.title}
                      secondary={`${item.type} • ${item.date} • ${item.size}`}
                    />
                    <ListItemSecondaryAction>
                      <Button variant="contained" startIcon={<Download />}>
                        Download
                      </Button>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            </TabPanel>

            <TabPanel value={tabValue} index={2}>
              <List>
                {popularDownloads.map((item) => (
                  <ListItem key={item.title}>
                    <ListItemIcon>
                      <Download />
                    </ListItemIcon>
                    <ListItemText
                      primary={item.title}
                      secondary={`${item.type} • ${item.downloads} downloads • ${item.size}`}
                    />
                    <ListItemSecondaryAction>
                      <Button variant="contained" startIcon={<Download />}>
                        Download
                      </Button>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            </TabPanel>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Need Help?
            </Typography>
            <Typography variant="body2" paragraph>
              Can't find what you're looking for? Our support team is here to help.
            </Typography>
            <Button
              component={RouterLink}
              to="/support/contact"
              variant="contained"
              fullWidth
            >
              Contact Support
            </Button>
          </Paper>

          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Download Tips
            </Typography>
            <List>
              <ListItem>
                <ListItemText 
                  primary="Check System Requirements"
                  secondary="Ensure your system meets the minimum requirements before downloading"
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary="Latest Versions"
                  secondary="Always download the latest version for best performance and security"
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary="Installation Guide"
                  secondary="Follow the installation guide for proper setup"
                />
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DownloadCenter;
