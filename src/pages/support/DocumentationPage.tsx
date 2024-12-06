import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Button,
  TextField,
  Breadcrumbs,
  Link,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from '@mui/material';
import {
  Description,
  Search,
  ExpandMore,
  ExpandLess,
  Article,
  Book,
  VideoLibrary,
  Language,
  Download,
} from '@mui/icons-material';
import SupportLayout from '../../layouts/SupportLayout';

// Documentation structure
const documentationData = {
  products: {
    'access-control': {
      title: 'Access Control Systems',
      categories: [
        {
          title: 'Installation Guides',
          documents: [
            {
              title: 'ProAccess X100 Installation Guide',
              type: 'PDF',
              size: '2.5 MB',
              language: 'English',
              version: '2.1',
              path: '/docs/access-control/installation/proaccess-x100-install.pdf'
            },
            {
              title: 'BioAccess Installation Manual',
              type: 'PDF',
              size: '3.1 MB',
              language: 'English',
              version: '1.5',
              path: '/docs/access-control/installation/bioaccess-install.pdf'
            }
          ]
        },
        {
          title: 'User Manuals',
          documents: [
            {
              title: 'ProAccess X100 User Manual',
              type: 'PDF',
              size: '4.2 MB',
              language: 'English',
              version: '2.0',
              path: '/docs/access-control/user/proaccess-x100-user.pdf'
            },
            {
              title: 'Access Control Management Software Guide',
              type: 'PDF',
              size: '5.8 MB',
              language: 'English',
              version: '3.2',
              path: '/docs/access-control/user/management-software.pdf'
            }
          ]
        }
      ]
    },
    'time-attendance': {
      title: 'Time & Attendance',
      categories: [
        {
          title: 'Quick Start Guides',
          documents: [
            {
              title: 'TimeTrack T50 Quick Start Guide',
              type: 'PDF',
              size: '1.8 MB',
              language: 'English',
              version: '1.0',
              path: '/docs/time-attendance/quickstart/timetrack-t50-quick.pdf'
            }
          ]
        },
        {
          title: 'Administrator Guides',
          documents: [
            {
              title: 'Time Attendance System Administration',
              type: 'PDF',
              size: '6.2 MB',
              language: 'English',
              version: '2.5',
              path: '/docs/time-attendance/admin/system-admin.pdf'
            }
          ]
        }
      ]
    },
    'video-surveillance': {
      title: 'Video Surveillance',
      categories: [
        {
          title: 'Camera Setup Guides',
          documents: [
            {
              title: 'IP Camera Configuration Guide',
              type: 'PDF',
              size: '3.5 MB',
              language: 'English',
              version: '2.0',
              path: '/docs/video/setup/ip-camera-config.pdf'
            }
          ]
        },
        {
          title: 'Software Manuals',
          documents: [
            {
              title: 'Video Management Software Manual',
              type: 'PDF',
              size: '7.1 MB',
              language: 'English',
              version: '4.0',
              path: '/docs/video/software/vms-manual.pdf'
            }
          ]
        }
      ]
    }
  }
};

interface CategoryProps {
  category: {
    title: string;
    documents: Array<{
      title: string;
      type: string;
      size: string;
      language: string;
      version: string;
      path: string;
    }>;
  };
}

const DocumentCategory = ({ category }: CategoryProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ListItem 
        onClick={() => setOpen(!open)}
        sx={{ 
          '&:hover': {
            backgroundColor: 'action.hover',
          },
          cursor: 'pointer'
        }}
      >
        <ListItemIcon>
          <Article />
        </ListItemIcon>
        <ListItemText primary={category.title} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {category.documents.map((doc, index) => (
            <ListItem
              key={index}
              sx={{ 
                pl: 4,
                '&:hover': {
                  backgroundColor: 'action.hover',
                },
                cursor: 'pointer'
              }}
              component="a"
              href={doc.path}
              target="_blank"
            >
              <ListItemIcon>
                <Description />
              </ListItemIcon>
              <ListItemText
                primary={doc.title}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Version {doc.version}
                    </Typography>
                    {` — ${doc.size} • ${doc.language}`}
                  </React.Fragment>
                }
              />
              <Button
                startIcon={<Download />}
                size="small"
                variant="outlined"
                sx={{ ml: 2 }}
              >
                Download
              </Button>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </>
  );
};

const DocumentationPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <SupportLayout>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Hero Section */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Documentation
          </Typography>
          <Typography variant="h5" color="text.secondary" paragraph>
            Complete guides and documentation for all our products
          </Typography>
          
          {/* Search Bar */}
          <Paper sx={{ p: 2, mt: 4 }}>
            <TextField
              fullWidth
              placeholder="Search documentation..."
              variant="outlined"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: <Search sx={{ mr: 1, color: 'text.secondary' }} />,
              }}
            />
          </Paper>
        </Box>

        {/* Quick Links */}
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {[
            { icon: <Book />, title: 'User Guides', count: '15+' },
            { icon: <VideoLibrary />, title: 'Video Tutorials', count: '25+' },
            { icon: <Language />, title: 'API Documentation', count: '5+' },
            { icon: <Article />, title: 'Technical Specs', count: '30+' },
          ].map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Box sx={{ mb: 2 }}>{item.icon}</Box>
                  <Typography variant="h6" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {item.count} documents
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Documentation Categories */}
        {Object.entries(documentationData.products).map(([key, product]) => (
          <Paper key={key} sx={{ mb: 4, overflow: 'hidden' }}>
            <Box sx={{ p: 3, bgcolor: 'background.default' }}>
              <Typography variant="h5" gutterBottom>
                {product.title}
              </Typography>
            </Box>
            <List>
              {product.categories.map((category, index) => (
                <DocumentCategory key={index} category={category} />
              ))}
            </List>
          </Paper>
        ))}

        {/* Help Section */}
        <Paper sx={{ p: 4, mt: 6, textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom>
            Can't find what you're looking for?
          </Typography>
          <Typography variant="body1" paragraph color="text.secondary">
            Our support team is here to help you find the right documentation
          </Typography>
          <Button variant="contained" color="primary">
            Contact Support
          </Button>
        </Paper>
      </Container>
    </SupportLayout>
  );
};

export default DocumentationPage;
