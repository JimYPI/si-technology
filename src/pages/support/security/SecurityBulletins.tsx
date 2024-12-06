import React, { useState } from 'react';
import {
  Container,
  Typography,
  Paper,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Alert,
} from '@mui/material';
import {
  Search,
  Warning,
  ErrorOutline,
  InfoOutlined,
  CheckCircleOutline,
} from '@mui/icons-material';

const SecurityBulletins = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [severityFilter, setSeverityFilter] = useState('all');
  const [yearFilter, setYearFilter] = useState('all');

  const bulletins = [
    {
      id: 'SB-2024-001',
      date: '2024-01-15',
      severity: 'Critical',
      title: 'Critical Security Update for ZKBioSecurity 3.2.0',
      affectedProducts: ['ZKBioSecurity 3.2.0', 'ZKBioSecurity 3.1.9'],
      description: 'Critical vulnerability affecting access control system authentication.',
      status: 'Active',
    },
    {
      id: 'SB-2024-002',
      date: '2024-01-12',
      severity: 'High',
      title: 'Security Advisory for Time Attendance Devices',
      affectedProducts: ['ZKTime 8.0', 'ZKTime 7.9'],
      description: 'Potential unauthorized access vulnerability in time attendance devices.',
      status: 'Active',
    },
    {
      id: 'SB-2024-003',
      date: '2024-01-10',
      severity: 'Medium',
      title: 'Firmware Update for Biometric Readers',
      affectedProducts: ['ProFace X', 'SpeedFace V5'],
      description: 'Security enhancement update for biometric reader firmware.',
      status: 'Active',
    },
    {
      id: 'SB-2023-015',
      date: '2023-12-20',
      severity: 'Low',
      title: 'Minor Security Update for Mobile App',
      affectedProducts: ['ZKBioSecurity Mobile 2.1'],
      description: 'Minor security improvements for mobile application.',
      status: 'Resolved',
    },
  ];

  const getSeverityIcon = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'critical':
        return <ErrorOutline color="error" />;
      case 'high':
        return <Warning color="warning" />;
      case 'medium':
        return <InfoOutlined color="info" />;
      default:
        return <CheckCircleOutline color="success" />;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'critical':
        return 'error';
      case 'high':
        return 'warning';
      case 'medium':
        return 'info';
      default:
        return 'success';
    }
  };

  const getStatusColor = (status: string) => {
    return status.toLowerCase() === 'active' ? 'error' : 'success';
  };

  const filteredBulletins = bulletins.filter((bulletin) => {
    const matchesSearch = 
      bulletin.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bulletin.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bulletin.id.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesSeverity = severityFilter === 'all' || bulletin.severity.toLowerCase() === severityFilter.toLowerCase();
    const matchesYear = yearFilter === 'all' || bulletin.date.startsWith(yearFilter);
    
    return matchesSearch && matchesSeverity && matchesYear;
  });

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper sx={{ p: 4, mb: 4, bgcolor: 'primary.main', color: 'primary.contrastText' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Security Bulletins
        </Typography>
        <Typography variant="h6">
          Latest security advisories and updates for SI Technology products
        </Typography>
      </Paper>

      <Alert severity="info" sx={{ mb: 4 }}>
        Subscribe to our security bulletin notifications to stay informed about the latest security updates.
      </Alert>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search bulletins..."
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
            <InputLabel>Severity</InputLabel>
            <Select
              value={severityFilter}
              label="Severity"
              onChange={(e) => setSeverityFilter(e.target.value)}
            >
              <MenuItem value="all">All Severities</MenuItem>
              <MenuItem value="critical">Critical</MenuItem>
              <MenuItem value="high">High</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="low">Low</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={3}>
          <FormControl fullWidth>
            <InputLabel>Year</InputLabel>
            <Select
              value={yearFilter}
              label="Year"
              onChange={(e) => setYearFilter(e.target.value)}
            >
              <MenuItem value="all">All Years</MenuItem>
              <MenuItem value="2024">2024</MenuItem>
              <MenuItem value="2023">2023</MenuItem>
              <MenuItem value="2022">2022</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Bulletin ID</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Severity</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Affected Products</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredBulletins.map((bulletin) => (
              <TableRow key={bulletin.id} hover>
                <TableCell>{bulletin.id}</TableCell>
                <TableCell>{bulletin.date}</TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {getSeverityIcon(bulletin.severity)}
                    <Chip
                      label={bulletin.severity}
                      color={getSeverityColor(bulletin.severity) as any}
                      size="small"
                      sx={{ ml: 1 }}
                    />
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">
                    {bulletin.title}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {bulletin.description}
                  </Typography>
                </TableCell>
                <TableCell>
                  {bulletin.affectedProducts.map((product) => (
                    <Chip
                      key={product}
                      label={product}
                      size="small"
                      sx={{ mr: 0.5, mb: 0.5 }}
                    />
                  ))}
                </TableCell>
                <TableCell>
                  <Chip
                    label={bulletin.status}
                    color={getStatusColor(bulletin.status) as any}
                    size="small"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default SecurityBulletins;
