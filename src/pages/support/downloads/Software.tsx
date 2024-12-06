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
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import {
  Search,
  Download,
  Computer,
  PhoneAndroid,
  Language,
} from '@mui/icons-material';

const SoftwareDownloads = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [platform, setPlatform] = useState('all');
  const [category, setCategory] = useState('all');

  const software = [
    {
      name: 'ZKBioSecurity',
      version: '3.2.1',
      releaseDate: '2024-01-15',
      platform: 'Windows',
      category: 'Access Control',
      size: '156 MB',
      description: 'All-in-one security management platform',
    },
    {
      name: 'ZKTime.Net',
      version: '2.1.0',
      releaseDate: '2024-01-10',
      platform: 'Windows',
      category: 'Time Attendance',
      size: '85 MB',
      description: 'Time attendance management software',
    },
    {
      name: 'ZKBioSecurity Mobile',
      version: '1.5.2',
      releaseDate: '2024-01-08',
      platform: 'Android',
      category: 'Mobile App',
      size: '45 MB',
      description: 'Mobile client for ZKBioSecurity',
    },
    {
      name: 'ZKBioSecurity Web Client',
      version: '3.2.1',
      releaseDate: '2024-01-15',
      platform: 'Web',
      category: 'Access Control',
      size: '2 MB',
      description: 'Web client for ZKBioSecurity platform',
    },
  ];

  const platforms = ['all', 'Windows', 'Android', 'iOS', 'Web'];
  const categories = ['all', 'Access Control', 'Time Attendance', 'Mobile App', 'Visitor Management'];

  const filteredSoftware = software.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPlatform = platform === 'all' || item.platform === platform;
    const matchesCategory = category === 'all' || item.category === category;
    return matchesSearch && matchesPlatform && matchesCategory;
  });

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'Windows':
        return <Computer />;
      case 'Android':
      case 'iOS':
        return <PhoneAndroid />;
      case 'Web':
        return <Language />;
      default:
        return <Computer />;
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper sx={{ p: 4, mb: 4, bgcolor: 'primary.main', color: 'primary.contrastText' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Software Downloads
        </Typography>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Download the latest versions of our software solutions
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search software..."
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

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Platform</InputLabel>
            <Select
              value={platform}
              label="Platform"
              onChange={(e) => setPlatform(e.target.value)}
            >
              {platforms.map((p) => (
                <MenuItem key={p} value={p}>
                  {p.charAt(0).toUpperCase() + p.slice(1)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select
              value={category}
              label="Category"
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map((c) => (
                <MenuItem key={c} value={c}>
                  {c.charAt(0).toUpperCase() + c.slice(1)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Software</TableCell>
              <TableCell>Version</TableCell>
              <TableCell>Platform</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Size</TableCell>
              <TableCell>Release Date</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredSoftware.map((item) => (
              <TableRow key={item.name}>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {getPlatformIcon(item.platform)}
                    <Box sx={{ ml: 2 }}>
                      <Typography variant="subtitle2">{item.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.description}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Chip label={`v${item.version}`} size="small" />
                </TableCell>
                <TableCell>{item.platform}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.size}</TableCell>
                <TableCell>{item.releaseDate}</TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    startIcon={<Download />}
                    size="small"
                  >
                    Download
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Paper sx={{ p: 3, mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          System Requirements
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" gutterBottom>
              Windows
            </Typography>
            <Typography variant="body2" color="text.secondary">
              • Windows 10/11 (64-bit)<br />
              • 8GB RAM minimum<br />
              • 10GB free disk space<br />
              • Intel Core i5 or equivalent
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" gutterBottom>
              Mobile
            </Typography>
            <Typography variant="body2" color="text.secondary">
              • Android 8.0 or higher<br />
              • iOS 12.0 or higher<br />
              • 2GB RAM minimum<br />
              • 500MB free storage
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" gutterBottom>
              Web Client
            </Typography>
            <Typography variant="body2" color="text.secondary">
              • Chrome 88+<br />
              • Firefox 85+<br />
              • Safari 14+<br />
              • Edge 88+
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default SoftwareDownloads;
