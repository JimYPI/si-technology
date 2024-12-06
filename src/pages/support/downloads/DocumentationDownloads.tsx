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
  Tabs,
  Tab,
  IconButton,
  Tooltip,
  Badge,
} from '@mui/material';
import {
  Description,
  Search,
  Download,
  Language,
  NewReleases,
  Book,
  MenuBook,
  VideoLibrary,
  Assignment,
  Bookmark,
  Star,
  StarBorder,
  Share,
  PictureAsPdf,
  InsertDriveFile,
  VideoFile,
  Translate,
} from '@mui/icons-material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface DocumentItem {
  id: string;
  title: string;
  type: 'manual' | 'guide' | 'datasheet' | 'whitepaper' | 'video';
  category: string;
  product: string;
  language: string;
  format: string;
  size: string;
  version: string;
  lastUpdated: string;
  downloads: number;
  description: string;
  tags: string[];
  featured: boolean;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`doc-tabpanel-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
};

const DocumentationDownloads = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [language, setLanguage] = useState('all');
  const [tabValue, setTabValue] = useState(0);

  const documents: DocumentItem[] = [
    {
      id: 'doc-1',
      title: 'ZKBioSecurity User Manual',
      type: 'manual',
      category: 'User Manuals',
      product: 'ZKBioSecurity',
      language: 'English',
      format: 'PDF',
      size: '15.2 MB',
      version: '4.1.0',
      lastUpdated: '2024-01-15',
      downloads: 12450,
      description: 'Comprehensive user manual for ZKBioSecurity platform',
      tags: ['access control', 'time attendance', 'setup guide'],
      featured: true,
    },
    {
      id: 'doc-2',
      title: 'Quick Installation Guide',
      type: 'guide',
      category: 'Installation Guides',
      product: 'ZKBioSecurity',
      language: 'French',
      format: 'PDF',
      size: '5.8 MB',
      version: '4.1.0',
      lastUpdated: '2024-01-10',
      downloads: 8320,
      description: 'Step-by-step installation guide for quick deployment',
      tags: ['installation', 'setup', 'configuration'],
      featured: true,
    },
    {
      id: 'doc-3',
      title: 'API Documentation',
      type: 'guide',
      category: 'Technical Documents',
      product: 'ZKBioSecurity',
      language: 'English',
      format: 'HTML',
      size: '2.3 MB',
      version: '4.1.0',
      lastUpdated: '2024-01-05',
      downloads: 4560,
      description: 'Complete API reference for developers',
      tags: ['api', 'development', 'integration'],
      featured: false,
    },
  ];

  const categories = [
    'User Manuals',
    'Installation Guides',
    'Technical Documents',
    'Datasheets',
    'Whitepapers',
    'Video Tutorials',
  ];

  const languages = ['English', 'French', 'Spanish', 'German', 'Chinese'];

  const documentTypes = [
    { label: 'All Documents', icon: <Description /> },
    { label: 'User Manuals', icon: <Book /> },
    { label: 'Installation Guides', icon: <MenuBook /> },
    { label: 'Video Tutorials', icon: <VideoLibrary /> },
    { label: 'Technical Documents', icon: <Assignment /> },
  ];

  const filteredDocuments = documents.filter(doc => 
    (searchTerm === '' || 
      doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (category === 'all' || doc.category === category) &&
    (language === 'all' || doc.language === language)
  );

  const getFormatIcon = (format: string) => {
    switch (format.toLowerCase()) {
      case 'pdf':
        return <PictureAsPdf />;
      case 'video':
        return <VideoFile />;
      default:
        return <InsertDriveFile />;
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper sx={{ p: 4, mb: 4, bgcolor: 'primary.main', color: 'primary.contrastText' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Description sx={{ fontSize: 40, mr: 2 }} />
          <Typography variant="h3" component="h1">
            Documentation Downloads
          </Typography>
        </Box>
        <Typography variant="h6">
          Access product documentation, guides, and technical resources
        </Typography>
      </Paper>

      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Paper sx={{ p: 3, mb: 3 }}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  placeholder="Search documentation..."
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
                  <InputLabel>Language</InputLabel>
                  <Select
                    value={language}
                    label="Language"
                    onChange={(e) => setLanguage(e.target.value)}
                  >
                    <MenuItem value="all">All Languages</MenuItem>
                    {languages.map((lang) => (
                      <MenuItem key={lang} value={lang}>{lang}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Paper>

          <Tabs
            value={tabValue}
            onChange={(e, newValue) => setTabValue(newValue)}
            variant="scrollable"
            scrollButtons="auto"
            sx={{ mb: 2 }}
          >
            {documentTypes.map((type, index) => (
              <Tab
                key={type.label}
                icon={type.icon}
                label={type.label}
                value={index}
              />
            ))}
          </Tabs>

          <Grid container spacing={3}>
            {filteredDocuments.map((doc) => (
              <Grid item xs={12} md={6} key={doc.id}>
                <Card>
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {getFormatIcon(doc.format)}
                        <Box sx={{ ml: 2 }}>
                          <Typography variant="h6">
                            {doc.title}
                            {doc.featured && (
                              <Chip
                                label="Featured"
                                color="primary"
                                size="small"
                                sx={{ ml: 1 }}
                              />
                            )}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Version {doc.version} • {doc.lastUpdated}
                          </Typography>
                        </Box>
                      </Box>
                      <Box>
                        <Tooltip title="Bookmark">
                          <IconButton>
                            <StarBorder />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Share">
                          <IconButton>
                            <Share />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    </Box>
                    <Typography paragraph>
                      {doc.description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                      <Chip
                        icon={<Language />}
                        label={doc.language}
                        size="small"
                      />
                      <Chip
                        icon={getFormatIcon(doc.format)}
                        label={`${doc.format} • ${doc.size}`}
                        size="small"
                      />
                      <Chip
                        icon={<Download />}
                        label={`${doc.downloads.toLocaleString()} downloads`}
                        size="small"
                      />
                    </Box>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {doc.tags.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          variant="outlined"
                        />
                      ))}
                    </Box>
                  </CardContent>
                  <CardActions sx={{ justifyContent: 'flex-end', p: 2 }}>
                    <Button
                      variant="outlined"
                      startIcon={<Language />}
                      sx={{ mr: 1 }}
                    >
                      Other Languages
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
              Documentation Resources
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <VideoLibrary color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary="Video Library"
                      secondary="Watch product tutorials and guides"
                    />
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={12} md={4}>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <Translate color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary="Translation Requests"
                      secondary="Request documentation in your language"
                    />
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={12} md={4}>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <Bookmark color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary="Saved Documents"
                      secondary="Access your bookmarked documentation"
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

export default DocumentationDownloads;
