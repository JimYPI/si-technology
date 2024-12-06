import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Button,
  Tabs,
  Tab,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from '@mui/material';
import {
  Download,
  Search,
  FilterList,
  Description,
  Code,
  Book,
  VideoLibrary,
  GetApp,
} from '@mui/icons-material';
import SupportLayout from '../../layouts/SupportLayout';

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
      id={`download-tabpanel-${index}`}
      aria-labelledby={`download-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

// Sample download data structure
const downloadItems = {
  software: [
    {
      name: 'SI Security Management System',
      version: '3.2.1',
      date: '2024-01-15',
      size: '156 MB',
      os: 'Windows',
      category: 'Access Control',
      description: 'Comprehensive security management software suite',
      link: '/downloads/software/si-security-management-3.2.1.exe',
      requirements: 'Windows 10/11, 8GB RAM, 2GB free space',
      releaseNotes: 'New features: Enhanced UI, improved performance, bug fixes'
    },
    {
      name: 'Time Attendance Client',
      version: '2.1.0',
      date: '2024-01-10',
      size: '85 MB',
      os: 'Windows',
      category: 'Time & Attendance',
      description: 'Client software for time attendance management',
      link: '/downloads/software/time-attendance-2.1.0.exe',
      requirements: 'Windows 10/11, 4GB RAM, 1GB free space',
      releaseNotes: 'Added multi-shift support, performance improvements'
    },
    {
      name: 'Video Management System',
      version: '2.5.0',
      date: '2024-01-08',
      size: '245 MB',
      os: 'Windows',
      category: 'Video Surveillance',
      description: 'Professional video management and analytics suite',
      link: '/downloads/software/video-management-2.5.0.exe',
      requirements: 'Windows 10/11, 16GB RAM, 5GB free space',
      releaseNotes: 'Added AI analytics, face recognition improvements'
    }
  ],
  firmware: [
    {
      name: 'ProAccess X100 Firmware',
      version: '1.2.3',
      date: '2024-01-12',
      size: '12 MB',
      device: 'ProAccess X100',
      category: 'Access Control',
      description: 'Latest firmware for ProAccess X100 controller',
      link: '/downloads/firmware/proaccess-x100-1.2.3.bin',
      releaseNotes: 'Security updates, performance improvements'
    },
    {
      name: 'TimeTrack T50 Firmware',
      version: '2.0.1',
      date: '2024-01-08',
      size: '8 MB',
      device: 'TimeTrack T50',
      category: 'Time & Attendance',
      description: 'Updated firmware for TimeTrack T50 terminal',
      link: '/downloads/firmware/timetrack-t50-2.0.1.bin',
      releaseNotes: 'Added face recognition, improved accuracy'
    },
    {
      name: 'SmartCam Pro Firmware',
      version: '3.1.2',
      date: '2024-01-05',
      size: '15 MB',
      device: 'SmartCam Pro',
      category: 'Video Surveillance',
      description: 'Latest firmware for SmartCam Pro cameras',
      link: '/downloads/firmware/smartcam-pro-3.1.2.bin',
      releaseNotes: 'Enhanced night vision, AI detection improvements'
    }
  ],
  documentation: [
    {
      name: 'SI Security Management System User Guide',
      version: '3.2',
      date: '2024-01-15',
      size: '5.2 MB',
      type: 'PDF',
      category: 'User Guide',
      description: 'Complete user guide for SI Security Management System',
      link: '/downloads/docs/si-security-management-guide.pdf',
      languages: ['English', 'French', 'Spanish']
    },
    {
      name: 'ProAccess X100 Installation Manual',
      version: '1.0',
      date: '2024-01-10',
      size: '3.8 MB',
      type: 'PDF',
      category: 'Installation Guide',
      description: 'Installation and setup guide for ProAccess X100',
      link: '/downloads/docs/proaccess-x100-installation.pdf',
      languages: ['English', 'French']
    },
    {
      name: 'API Documentation',
      version: '2.0',
      date: '2024-01-08',
      size: '2.5 MB',
      type: 'PDF',
      category: 'Developer Guide',
      description: 'Complete API reference for developers',
      link: '/downloads/docs/api-documentation.pdf',
      languages: ['English']
    }
  ],
  sdk: [
    {
      name: 'Access Control SDK',
      version: '2.1.0',
      date: '2024-01-14',
      size: '45 MB',
      os: 'Windows',
      category: 'Development',
      description: 'SDK for Access Control integration',
      link: '/downloads/sdk/access-control-sdk-2.1.0.zip',
      languages: ['C++', 'C#', 'Java'],
      requirements: 'Visual Studio 2019+',
      includes: ['Documentation', 'Sample Code', 'Libraries']
    },
    {
      name: 'Face Recognition SDK',
      version: '1.5.0',
      date: '2024-01-12',
      size: '120 MB',
      os: 'Windows',
      category: 'Development',
      description: 'SDK for face recognition integration',
      link: '/downloads/sdk/face-recognition-sdk-1.5.0.zip',
      languages: ['Python', 'C++'],
      requirements: 'CUDA 11.0+',
      includes: ['API Reference', 'Examples', 'Models']
    }
  ],
  tools: [
    {
      name: 'Network Configuration Tool',
      version: '1.5.0',
      date: '2024-01-14',
      size: '25 MB',
      os: 'Windows',
      category: 'Utility',
      description: 'Tool for configuring network settings of devices',
      link: '/downloads/tools/network-config-1.5.0.exe',
      requirements: 'Windows 10/11'
    },
    {
      name: 'Database Migration Tool',
      version: '1.2.0',
      date: '2024-01-09',
      size: '18 MB',
      os: 'Windows',
      category: 'Utility',
      description: 'Tool for migrating database between versions',
      link: '/downloads/tools/db-migration-1.2.0.exe',
      requirements: 'Windows 10/11'
    }
  ],
};

const DownloadCenterPage = () => {
  const [tabValue, setTabValue] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [osFilter, setOsFilter] = useState('all');
  const [languageFilter, setLanguageFilter] = useState('all');

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleDownload = (item: any) => {
    // Implement download logic here
    console.log('Downloading:', item.name);
  };

  const renderDownloadTable = (items: any[]) => (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Version</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Size</TableCell>
            <TableCell>Details</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item, index) => (
            <TableRow key={index}>
              <TableCell>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Description sx={{ mr: 1 }} />
                  <Box>
                    <Typography variant="body1">{item.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell>{item.version}</TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.size}</TableCell>
              <TableCell>
                <Box>
                  {item.requirements && (
                    <Typography variant="body2">
                      <strong>Requirements:</strong> {item.requirements}
                    </Typography>
                  )}
                  {item.releaseNotes && (
                    <Typography variant="body2">
                      <strong>What's New:</strong> {item.releaseNotes}
                    </Typography>
                  )}
                  {item.languages && (
                    <Typography variant="body2">
                      <strong>Languages:</strong> {item.languages.join(', ')}
                    </Typography>
                  )}
                  {item.includes && (
                    <Typography variant="body2">
                      <strong>Includes:</strong> {item.includes.join(', ')}
                    </Typography>
                  )}
                </Box>
              </TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  startIcon={<Download />}
                  onClick={() => handleDownload(item)}
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
  );

  return (
    <SupportLayout>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Hero Section */}
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Download Center
          </Typography>
          <Typography variant="h5" color="text.secondary" paragraph>
            Access our latest software, firmware, documentation, and tools
          </Typography>
        </Box>

        {/* Search and Filter Section */}
        <Paper sx={{ p: 3, mb: 4 }}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={3}>
              <TextField
                fullWidth
                label="Search"
                variant="outlined"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: <Search sx={{ mr: 1, color: 'text.secondary' }} />,
                }}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select
                  value={categoryFilter}
                  label="Category"
                  onChange={(e) => setCategoryFilter(e.target.value)}
                >
                  <MenuItem value="all">All Categories</MenuItem>
                  <MenuItem value="access-control">Access Control</MenuItem>
                  <MenuItem value="time-attendance">Time & Attendance</MenuItem>
                  <MenuItem value="video">Video Surveillance</MenuItem>
                  <MenuItem value="development">Development</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={3}>
              <FormControl fullWidth>
                <InputLabel>Operating System</InputLabel>
                <Select
                  value={osFilter}
                  label="Operating System"
                  onChange={(e) => setOsFilter(e.target.value)}
                >
                  <MenuItem value="all">All OS</MenuItem>
                  <MenuItem value="windows">Windows</MenuItem>
                  <MenuItem value="mac">macOS</MenuItem>
                  <MenuItem value="linux">Linux</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={3}>
              <FormControl fullWidth>
                <InputLabel>Language</InputLabel>
                <Select
                  value={languageFilter}
                  label="Language"
                  onChange={(e) => setLanguageFilter(e.target.value)}
                >
                  <MenuItem value="all">All Languages</MenuItem>
                  <MenuItem value="en">English</MenuItem>
                  <MenuItem value="fr">French</MenuItem>
                  <MenuItem value="es">Spanish</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Paper>

        {/* Download Categories */}
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons="auto"
            >
              <Tab icon={<Code />} label="Software" />
              <Tab icon={<Description />} label="Firmware" />
              <Tab icon={<Book />} label="Documentation" />
              <Tab icon={<Code />} label="SDK" />
              <Tab icon={<VideoLibrary />} label="Tools" />
            </Tabs>
          </Box>

          <TabPanel value={tabValue} index={0}>
            {renderDownloadTable(downloadItems.software)}
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
            {renderDownloadTable(downloadItems.firmware)}
          </TabPanel>
          <TabPanel value={tabValue} index={2}>
            {renderDownloadTable(downloadItems.documentation)}
          </TabPanel>
          <TabPanel value={tabValue} index={3}>
            {renderDownloadTable(downloadItems.sdk)}
          </TabPanel>
          <TabPanel value={tabValue} index={4}>
            {renderDownloadTable(downloadItems.tools)}
          </TabPanel>
        </Box>

        {/* Support Section */}
        <Paper sx={{ p: 4, mt: 8, textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom>
            Need Help?
          </Typography>
          <Typography variant="body1" paragraph color="text.secondary">
            Our technical support team is here to assist you with any questions about our downloads
          </Typography>
          <Button variant="contained" color="primary">
            Contact Support
          </Button>
        </Paper>
      </Container>
    </SupportLayout>
  );
};

export default DownloadCenterPage;
