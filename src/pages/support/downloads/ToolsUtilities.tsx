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
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
  IconButton,
  Tooltip,
} from '@mui/material';
import {
  Build,
  Search,
  Download,
  Laptop,
  Storage,
  Speed,
  Security,
  Cloud,
  NetworkCheck,
  BugReport,
  Update,
  Analytics,
  VerifiedUser,
  Info,
  NewReleases,
  CheckCircle,
  Help,
  Code,
} from '@mui/icons-material';

interface ToolItem {
  id: string;
  name: string;
  category: string;
  version: string;
  releaseDate: string;
  size: string;
  downloads: number;
  description: string;
  features: string[];
  compatibility: string[];
  status: 'stable' | 'beta' | 'new';
  type: 'diagnostic' | 'utility' | 'security' | 'development';
}

const ToolsUtilities = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [toolType, setToolType] = useState('all');

  const tools: ToolItem[] = [
    {
      id: 'tool-1',
      name: 'ZK Device Diagnostic Tool',
      category: 'Diagnostic Tools',
      version: '2.1.0',
      releaseDate: '2024-01-15',
      size: '25 MB',
      downloads: 8540,
      description: 'Comprehensive diagnostic tool for ZK devices. Test connectivity, check device status, and troubleshoot issues.',
      features: [
        'Network diagnostics',
        'Device status monitoring',
        'Error logging',
        'Performance analysis',
      ],
      compatibility: ['Windows 10/11', 'All ZK devices'],
      status: 'stable',
      type: 'diagnostic',
    },
    {
      id: 'tool-2',
      name: 'Database Migration Assistant',
      category: 'Utilities',
      version: '1.5.2',
      releaseDate: '2024-01-10',
      size: '18 MB',
      downloads: 6230,
      description: 'Easily migrate databases between different versions of ZKBioSecurity.',
      features: [
        'Database backup',
        'Version migration',
        'Data validation',
        'Automatic recovery',
      ],
      compatibility: ['Windows 10/11', 'ZKBioSecurity 3.x/4.x'],
      status: 'stable',
      type: 'utility',
    },
    {
      id: 'tool-3',
      name: 'Security Assessment Kit',
      category: 'Security Tools',
      version: '2.0.0',
      releaseDate: '2024-01-05',
      size: '35 MB',
      downloads: 4120,
      description: 'Comprehensive security testing and assessment tools for ZK systems.',
      features: [
        'Vulnerability scanning',
        'Security audit',
        'Compliance checking',
        'Risk assessment',
      ],
      compatibility: ['Windows 10/11', 'Linux'],
      status: 'new',
      type: 'security',
    },
  ];

  const categories = [
    'Diagnostic Tools',
    'Utilities',
    'Security Tools',
    'Development Tools',
    'Network Tools',
  ];

  const toolTypes = [
    { value: 'diagnostic', label: 'Diagnostic', icon: <BugReport /> },
    { value: 'utility', label: 'Utility', icon: <Build /> },
    { value: 'security', label: 'Security', icon: <Security /> },
    { value: 'development', label: 'Development', icon: <Code /> },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'stable':
        return 'success';
      case 'beta':
        return 'warning';
      case 'new':
        return 'info';
      default:
        return 'default';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'diagnostic':
        return <BugReport />;
      case 'utility':
        return <Build />;
      case 'security':
        return <Security />;
      case 'development':
        return <Code />;
      default:
        return <Build />;
    }
  };

  const filteredTools = tools.filter(tool => 
    (searchTerm === '' || 
      tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (category === 'all' || tool.category === category) &&
    (toolType === 'all' || tool.type === toolType)
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper sx={{ p: 4, mb: 4, bgcolor: 'primary.main', color: 'primary.contrastText' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Build sx={{ fontSize: 40, mr: 2 }} />
          <Typography variant="h3" component="h1">
            Tools & Utilities
          </Typography>
        </Box>
        <Typography variant="h6">
          Download essential tools and utilities for SI Technology products
        </Typography>
      </Paper>

      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Paper sx={{ p: 3, mb: 3 }}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  placeholder="Search tools..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  InputProps={{
                    startAdornment: <Search sx={{ color: 'text.secondary', mr: 1 }} />,
                  }}
                />
              </Grid>
              <Grid item xs={12} md={4}>
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
              <Grid item xs={12} md={4}>
                <FormControl fullWidth>
                  <InputLabel>Tool Type</InputLabel>
                  <Select
                    value={toolType}
                    label="Tool Type"
                    onChange={(e) => setToolType(e.target.value)}
                  >
                    <MenuItem value="all">All Types</MenuItem>
                    {toolTypes.map((type) => (
                      <MenuItem key={type.value} value={type.value}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          {type.icon}
                          <Box sx={{ ml: 1 }}>{type.label}</Box>
                        </Box>
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Paper>

          <Grid container spacing={3}>
            {filteredTools.map((tool) => (
              <Grid item xs={12} key={tool.id}>
                <Card>
                  <CardContent>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={8}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          {getTypeIcon(tool.type)}
                          <Box sx={{ ml: 2 }}>
                            <Typography variant="h5">
                              {tool.name}
                              <Chip
                                label={tool.status.toUpperCase()}
                                color={getStatusColor(tool.status)}
                                size="small"
                                sx={{ ml: 1 }}
                              />
                            </Typography>
                            <Typography color="text.secondary">
                              Version {tool.version} • Released {tool.releaseDate}
                            </Typography>
                          </Box>
                        </Box>
                        <Typography paragraph>
                          {tool.description}
                        </Typography>
                        <Box sx={{ mb: 2 }}>
                          <Typography variant="subtitle2" gutterBottom>
                            Key Features:
                          </Typography>
                          <Grid container spacing={1}>
                            {tool.features.map((feature, index) => (
                              <Grid item key={index}>
                                <Chip
                                  icon={<CheckCircle />}
                                  label={feature}
                                  variant="outlined"
                                  size="small"
                                />
                              </Grid>
                            ))}
                          </Grid>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Paper variant="outlined" sx={{ p: 2 }}>
                          <Typography variant="subtitle2" gutterBottom>
                            Compatibility
                          </Typography>
                          <List dense>
                            {tool.compatibility.map((item, index) => (
                              <ListItem key={index}>
                                <ListItemIcon>
                                  <CheckCircle color="success" />
                                </ListItemIcon>
                                <ListItemText primary={item} />
                              </ListItem>
                            ))}
                          </List>
                          <Box sx={{ mt: 2 }}>
                            <Chip
                              icon={<Download />}
                              label={`${tool.downloads.toLocaleString()} downloads`}
                              size="small"
                            />
                            <Chip
                              icon={<Storage />}
                              label={tool.size}
                              size="small"
                              sx={{ ml: 1 }}
                            />
                          </Box>
                        </Paper>
                      </Grid>
                    </Grid>
                  </CardContent>
                  <CardActions sx={{ justifyContent: 'flex-end', p: 2 }}>
                    <Button
                      variant="outlined"
                      startIcon={<Help />}
                      sx={{ mr: 1 }}
                    >
                      Documentation
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
              Popular Tools
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <Speed color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary="Performance Analyzer"
                      secondary="Optimize system performance"
                    />
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={12} md={4}>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <NetworkCheck color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary="Network Tools"
                      secondary="Network testing and configuration"
                    />
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={12} md={4}>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <Cloud color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary="Cloud Integration Tools"
                      secondary="Cloud service connectors"
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

export default ToolsUtilities;
