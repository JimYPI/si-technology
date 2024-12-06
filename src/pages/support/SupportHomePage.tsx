import React from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Paper, 
  Box,
  TextField,
  InputAdornment,
  IconButton
} from '@mui/material';
import { 
  Download as DownloadIcon,
  School as SchoolIcon,
  Article as ArticleIcon,
  Build as BuildIcon,
  VerifiedUser as VerifiedUserIcon,
  ContactSupport as ContactSupportIcon,
  Search as SearchIcon
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const supportCards = [
  {
    title: 'Download Center',
    description: 'Access software, firmware, manuals, and SDKs',
    icon: <DownloadIcon sx={{ fontSize: 40, color: '#2196f3' }} />,
    link: '/support/downloads',
    items: [
      { text: 'Software', link: '/support/downloads/software' },
      { text: 'User Manuals', link: '/support/downloads/manual' },
      { text: 'Firmware', link: '/support/downloads/firmware' },
      { text: 'SDKs', link: '/support/downloads/sdk' }
    ]
  },
  {
    title: 'Knowledge Base',
    description: 'Browse through technical articles and guides',
    icon: <ArticleIcon sx={{ fontSize: 40, color: '#2196f3' }} />,
    link: '/support/knowledge',
    items: [
      { text: 'Technical Articles', link: '/support/knowledge/articles' },
      { text: 'Best Practices', link: '/support/knowledge/best-practices' },
      { text: 'Integration Guides', link: '/support/knowledge/integration' },
      { text: 'Troubleshooting', link: '/support/knowledge/troubleshooting' }
    ]
  },
  {
    title: 'Product Training',
    description: 'Access product training and certification courses',
    icon: <SchoolIcon sx={{ fontSize: 40, color: '#2196f3' }} />,
    link: '/support/training',
    items: [
      { text: 'Online Courses', link: '/support/training/online' },
      { text: 'Video Tutorials', link: '/support/training/videos' },
      { text: 'Certification Programs', link: '/support/training/certification' },
      { text: 'Webinars', link: '/support/training/webinars' }
    ]
  },
  {
    title: 'Technical Support',
    description: 'Get technical assistance and troubleshooting help',
    icon: <BuildIcon sx={{ fontSize: 40, color: '#2196f3' }} />,
    link: '/support/technical',
    items: [
      { text: 'FAQs', link: '/support/technical/faq' },
      { text: 'Troubleshooting', link: '/support/technical/troubleshooting' },
      { text: 'Support Ticket', link: '/support/technical/ticket' },
      { text: 'Remote Support', link: '/support/technical/remote' }
    ]
  },
  {
    title: 'Warranty Service',
    description: 'Learn about warranty coverage and RMA process',
    icon: <VerifiedUserIcon sx={{ fontSize: 40, color: '#2196f3' }} />,
    link: '/support/warranty',
    items: [
      { text: 'Warranty Policy', link: '/support/warranty/policy' },
      { text: 'RMA Service', link: '/support/warranty/rma' },
      { text: 'Service Centers', link: '/support/warranty/centers' },
      { text: 'Warranty Registration', link: '/support/warranty/register' }
    ]
  },
  {
    title: 'Contact Support',
    description: 'Reach out to our support team',
    icon: <ContactSupportIcon sx={{ fontSize: 40, color: '#2196f3' }} />,
    link: '/support/contact',
    items: [
      { text: 'Support Ticket', link: '/support/contact/ticket' },
      { text: 'Live Chat', link: '/support/contact/chat' },
      { text: 'Phone Support', link: '/support/contact/phone' },
      { text: 'Email Support', link: '/support/contact/email' }
    ]
  }
];

const SupportHomePage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Header */}
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Support Center
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Find the help you need with our comprehensive support resources
        </Typography>
        
        {/* Search Bar */}
        <Box sx={{ mt: 4, maxWidth: 600, mx: 'auto' }}>
          <TextField
            fullWidth
            placeholder="Search for products, downloads, or support articles..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{ bgcolor: 'background.paper' }}
          />
        </Box>
      </Box>

      {/* Support Cards Grid */}
      <Grid container spacing={4}>
        {supportCards.map((card) => (
          <Grid item xs={12} sm={6} md={4} key={card.title}>
            <Paper
              component={RouterLink}
              to={card.link}
              sx={{
                p: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 4,
                  bgcolor: 'action.hover'
                },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                {card.icon}
                <Typography variant="h6" sx={{ ml: 2 }}>
                  {card.title}
                </Typography>
              </Box>
              
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {card.description}
              </Typography>

              <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none', mt: 'auto' }}>
                {card.items.map((item) => (
                  <Box
                    component="li"
                    key={item.text}
                    sx={{
                      mb: 1,
                      '&:last-child': { mb: 0 }
                    }}
                  >
                    <Typography
                      component={RouterLink}
                      to={item.link}
                      variant="body2"
                      color="primary"
                      sx={{
                        textDecoration: 'none',
                        display: 'block',
                        p: 1,
                        borderRadius: 1,
                        '&:hover': {
                          bgcolor: 'action.hover',
                          textDecoration: 'underline'
                        }
                      }}
                    >
                      {item.text}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SupportHomePage;
