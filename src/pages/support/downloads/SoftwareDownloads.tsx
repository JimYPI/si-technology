import React, { useState } from 'react';
import {
  Container,
  Typography,
  Paper,
  Box,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tabs,
  Tab,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
} from '@mui/material';
import {
  Download,
  Search,
  FilterList,
  Computer,
  Storage,
  CloudDownload,
  NewReleases,
  Update,
  Check,
  Warning,
  Info,
  Error,
  SystemUpdate,
  Language,
  Build,
} from '@mui/icons-material';

interface SoftwareItem {
  id: string;
  name: string;
  version: string;
  releaseDate: string;
  category: string;
  type: string;
  size: string;
  downloads: number;
  status: 'stable' | 'beta' | 'latest';
  requirements: string[];
  description: string;
}

const SoftwareDownloads = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [tabValue, setTabValue] = useState(0);
  const [sortBy, setSortBy] = useState('date');

  const softwareItems: SoftwareItem[] = [
    {
      id: 'zk-bio-1',
      name: 'ZKBioSecurity',
      version: '4.1.0',
      releaseDate: '2024-01-15',
      category: 'Access Control',
      type: 'Full Package',
      size: '256 MB',
      downloads: 15420,
      status: 'stable',
      requirements: [
        'Windows 10/11',
        '8GB RAM',
        'Intel Core i5 or higher',
        '10GB free space',
      ],
      description: 'All-in-one security platform for access control and time attendance',
    },
    {
      id: 'zk-time-1',
      name: 'ZKTime.Net',
      version: '3.0.2',
      releaseDate: '2024-01-10',
      category: 'Time Attendance',
      type: 'Full Package',
      size: '180 MB',
      downloads: 12350,
      status: 'latest',
      requirements: [
        'Windows 10/11',
        '4GB RAM',
        'Intel Core i3 or higher',
        '5GB free space',
      ],
      description: 'Advanced time attendance management software',
    },
    {
      id: 'zk-bio-mobile-1',
      name: 'ZKBioMobile',
      version: '2.1.0',
      releaseDate: '2024-01-05',
      category: 'Mobile Access',
      type: 'Mobile App',
      size: '45 MB',
      downloads: 8760,
      status: 'beta',
      requirements: [
        'Android 8.0+',
        'iOS 13.0+',
        'BLE 4.0+',
      ],
      description: 'Mobile access control and attendance tracking',
    },
  ];

  const categories = [
    'Access Control',
    'Time Attendance',
    'Mobile Access',
    'Video Management',
    'Visitor Management',
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'stable':
        return 'success';
      case 'beta':
        return 'warning';
      case 'latest':
        return 'info';
      default:
        return 'default';
    }
  };

  const getStatusIcon = (status: string): React.ReactElement => {
    switch (status.toLowerCase()) {
      case 'stable':
        return <Check />;
      case 'beta':
        return <Warning />;
      case 'deprecated':
        return <Error />;
      default:
        return <Info />;
    }
  };

  const filteredSoftware = softwareItems
    .filter(item => 
      (searchTerm === '' || 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (category === 'all' || item.category === category)
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime();
        case 'downloads':
          return b.downloads - a.downloads;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper sx={{ p: 4, mb: 4, bgcolor: 'primary.main', color: 'primary.contrastText' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Download sx={{ fontSize: 40, mr: 2 }} />
          <Typography variant="h3" component="h1">
            Software Downloads
          </Typography>
        </Box>
        <Typography variant="h6">
          Download the latest versions of SI Technology software
        </Typography>
      </Paper>

      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Paper sx={{ p: 3, mb: 3 }}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  placeholder="Search software..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  InputProps={{
                    startAdornment: <Search sx={{ color: 'text.secondary', mr: 1 }} />,
                  }}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <FormControl fullWidth>
                  <InputLabel>Category</InputLabel>
                  <Select
                    value={category}
                    label="Category"
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <MenuItem value="all">All Categories</MenuItem>
                    {categories.map((cat) => (
                      <MenuItem key={cat} value={cat}>{cat}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={3}>
                <FormControl fullWidth>
                  <InputLabel>Sort By</InputLabel>
                  <Select
                    value={sortBy}
                    label="Sort By"
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <MenuItem value="date">Release Date</MenuItem>
                    <MenuItem value="downloads">Downloads</MenuItem>
                    <MenuItem value="name">Name</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Paper>

          <Grid container spacing={3}>
            {filteredSoftware.map((software) => (
              <Grid item xs={12} key={software.id}>
                <Card>
                  <CardContent>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={8}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          <Computer sx={{ fontSize: 40, mr: 2, color: 'primary.main' }} />
                          <Box>
                            <Typography variant="h5" component="h2">
                              {software.name}
                              <Chip
                                label={software.status.toUpperCase()}
                                color={getStatusColor(software.status)}
                                icon={getStatusIcon(software.status)}
                                size="small"
                                sx={{ ml: 1 }}
                              />
                            </Typography>
                            <Typography color="text.secondary">
                              Version {software.version} • Released {software.releaseDate}
                            </Typography>
                          </Box>
                        </Box>
                        <Typography paragraph>
                          {software.description}
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          <Chip label={software.category} />
                          <Chip label={software.type} />
                          <Chip label={software.size} />
                          <Chip label={`${software.downloads.toLocaleString()} downloads`} />
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Typography variant="subtitle2" gutterBottom>
                          System Requirements
                        </Typography>
                        <List dense>
                          {software.requirements.map((req, index) => (
                            <ListItem key={index}>
                              <ListItemIcon>
                                <Check color="primary" />
                              </ListItemIcon>
                              <ListItemText primary={req} />
                            </ListItem>
                          ))}
                        </List>
                      </Grid>
                    </Grid>
                  </CardContent>
                  <CardActions sx={{ justifyContent: 'flex-end', p: 2 }}>
                    <Button
                      variant="outlined"
                      startIcon={<Info />}
                      sx={{ mr: 1 }}
                    >
                      Release Notes
                    </Button>
                    <Button
                      variant="contained"
                      startIcon={<Download />}
                    >
                      Download
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Need Help?
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <SystemUpdate color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary="Installation Guide"
                      secondary="Step-by-step installation instructions"
                    />
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={12} md={4}>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <Language color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary="Language Packs"
                      secondary="Download additional languages"
                    />
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={12} md={4}>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <Build color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary="Troubleshooting"
                      secondary="Common installation issues"
                    />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SoftwareDownloads;
