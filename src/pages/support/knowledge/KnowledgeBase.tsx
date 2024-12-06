import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Paper,
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Breadcrumbs,
  Link,
} from '@mui/material';
import {
  Search as SearchIcon,
  Article as ArticleIcon,
  Build as BuildIcon,
  Settings as SettingsIcon,
  Description as DescriptionIcon,
  NavigateNext as NavigateNextIcon,
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
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
};

const articles = {
  technical: [
    {
      title: 'How to Set Up Biometric Access Control',
      description: 'Step-by-step guide for installing and configuring biometric access control systems',
      category: 'Installation',
      link: '/support/knowledge/articles/biometric-setup'
    },
    {
      title: 'Troubleshooting Network Connection Issues',
      description: 'Common network problems and their solutions for SI Technology devices',
      category: 'Troubleshooting',
      link: '/support/knowledge/articles/network-issues'
    },
    {
      title: 'Database Backup and Recovery',
      description: 'Best practices for backing up and recovering your access control database',
      category: 'Maintenance',
      link: '/support/knowledge/articles/database-backup'
    },
  ],
  integration: [
    {
      title: 'REST API Integration Guide',
      description: 'Complete guide to integrating with SI Technology REST APIs',
      category: 'API',
      link: '/support/knowledge/integration/rest-api'
    },
    {
      title: 'Third-party Software Integration',
      description: 'How to integrate SI Technology products with other security systems',
      category: 'Integration',
      link: '/support/knowledge/integration/third-party'
    },
    {
      title: 'SDK Implementation Examples',
      description: 'Code examples and use cases for SI Technology SDKs',
      category: 'Development',
      link: '/support/knowledge/integration/sdk-examples'
    },
  ],
  bestPractices: [
    {
      title: 'Security System Design Guidelines',
      description: 'Best practices for designing a comprehensive security system',
      category: 'Design',
      link: '/support/knowledge/best-practices/system-design'
    },
    {
      title: 'Access Level Configuration',
      description: 'Recommended practices for setting up access levels and permissions',
      category: 'Configuration',
      link: '/support/knowledge/best-practices/access-levels'
    },
    {
      title: 'System Maintenance Schedule',
      description: 'Recommended maintenance schedule for SI Technology products',
      category: 'Maintenance',
      link: '/support/knowledge/best-practices/maintenance'
    },
  ],
  troubleshooting: [
    {
      title: 'Common Device Error Codes',
      description: 'Comprehensive list of error codes and their solutions',
      category: 'Errors',
      link: '/support/knowledge/troubleshooting/error-codes'
    },
    {
      title: 'Firmware Update Issues',
      description: 'Solutions for common firmware update problems',
      category: 'Firmware',
      link: '/support/knowledge/troubleshooting/firmware-update'
    },
    {
      title: 'Hardware Diagnostics',
      description: 'How to run and interpret hardware diagnostic tests',
      category: 'Hardware',
      link: '/support/knowledge/troubleshooting/diagnostics'
    },
  ],
};

const KnowledgeBase = () => {
  const [tabValue, setTabValue] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Breadcrumbs */}
      <Breadcrumbs 
        separator={<NavigateNextIcon fontSize="small" />} 
        sx={{ mb: 3 }}
      >
        <Link component={RouterLink} to="/" color="inherit">
          Home
        </Link>
        <Link component={RouterLink} to="/support" color="inherit">
          Support
        </Link>
        <Typography color="text.primary">Knowledge Base</Typography>
      </Breadcrumbs>

      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Knowledge Base
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Find technical articles, integration guides, and troubleshooting help
        </Typography>

        {/* Search */}
        <TextField
          fullWidth
          placeholder="Search knowledge base..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ 
            maxWidth: 600,
            backgroundColor: 'white',
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* Tabs */}
      <Paper sx={{ mb: 4 }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab icon={<ArticleIcon />} label="Technical Articles" />
          <Tab icon={<SettingsIcon />} label="Integration Guides" />
          <Tab icon={<DescriptionIcon />} label="Best Practices" />
          <Tab icon={<BuildIcon />} label="Troubleshooting" />
        </Tabs>

        {/* Tab Panels */}
        <TabPanel value={tabValue} index={0}>
          <List>
            {articles.technical.map((article, index) => (
              <ListItem
                key={index}
                component={RouterLink}
                to={article.link}
                sx={{
                  mb: 2,
                  borderRadius: 1,
                  '&:hover': {
                    backgroundColor: 'action.hover',
                  },
                }}
              >
                <ListItemIcon>
                  <ArticleIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary={article.title}
                  secondary={
                    <>
                      <Typography variant="body2" color="text.secondary">
                        {article.description}
                      </Typography>
                      <Typography variant="caption" color="primary">
                        Category: {article.category}
                      </Typography>
                    </>
                  }
                />
              </ListItem>
            ))}
          </List>
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <List>
            {articles.integration.map((article, index) => (
              <ListItem
                key={index}
                component={RouterLink}
                to={article.link}
                sx={{
                  mb: 2,
                  borderRadius: 1,
                  '&:hover': {
                    backgroundColor: 'action.hover',
                  },
                }}
              >
                <ListItemIcon>
                  <SettingsIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary={article.title}
                  secondary={
                    <>
                      <Typography variant="body2" color="text.secondary">
                        {article.description}
                      </Typography>
                      <Typography variant="caption" color="primary">
                        Category: {article.category}
                      </Typography>
                    </>
                  }
                />
              </ListItem>
            ))}
          </List>
        </TabPanel>

        <TabPanel value={tabValue} index={2}>
          <List>
            {articles.bestPractices.map((article, index) => (
              <ListItem
                key={index}
                component={RouterLink}
                to={article.link}
                sx={{
                  mb: 2,
                  borderRadius: 1,
                  '&:hover': {
                    backgroundColor: 'action.hover',
                  },
                }}
              >
                <ListItemIcon>
                  <DescriptionIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary={article.title}
                  secondary={
                    <>
                      <Typography variant="body2" color="text.secondary">
                        {article.description}
                      </Typography>
                      <Typography variant="caption" color="primary">
                        Category: {article.category}
                      </Typography>
                    </>
                  }
                />
              </ListItem>
            ))}
          </List>
        </TabPanel>

        <TabPanel value={tabValue} index={3}>
          <List>
            {articles.troubleshooting.map((article, index) => (
              <ListItem
                key={index}
                component={RouterLink}
                to={article.link}
                sx={{
                  mb: 2,
                  borderRadius: 1,
                  '&:hover': {
                    backgroundColor: 'action.hover',
                  },
                }}
              >
                <ListItemIcon>
                  <BuildIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary={article.title}
                  secondary={
                    <>
                      <Typography variant="body2" color="text.secondary">
                        {article.description}
                      </Typography>
                      <Typography variant="caption" color="primary">
                        Category: {article.category}
                      </Typography>
                    </>
                  }
                />
              </ListItem>
            ))}
          </List>
        </TabPanel>
      </Paper>
    </Container>
  );
};

export default KnowledgeBase;
