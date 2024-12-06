import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  TextField,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Breadcrumbs,
  Link,
  Chip,
  Button,
  InputAdornment,
} from '@mui/material';
import {
  Search,
  Help,
  ExpandMore,
  Article,
  Build,
  LiveHelp,
  TipsAndUpdates,
  ArrowForward,
  Bookmark,
  ThumbUp,
} from '@mui/icons-material';
import SupportLayout from '../../layouts/SupportLayout';

// Sample knowledge base data
const knowledgeBaseData = {
  popularArticles: [
    {
      id: 1,
      title: 'How to Reset Your Access Control Device',
      category: 'Access Control',
      views: 2500,
      helpful: 95,
      lastUpdated: '2024-01-15',
      content: 'Detailed steps for resetting various access control devices...',
    },
    {
      id: 2,
      title: 'Troubleshooting Network Connection Issues',
      category: 'Network',
      views: 1800,
      helpful: 92,
      lastUpdated: '2024-01-12',
      content: 'Common network connection problems and their solutions...',
    },
    {
      id: 3,
      title: 'Setting Up Time Attendance Software',
      category: 'Time & Attendance',
      views: 1500,
      helpful: 88,
      lastUpdated: '2024-01-10',
      content: 'Step-by-step guide for time attendance software setup...',
    },
  ],
  categories: {
    'access-control': {
      title: 'Access Control',
      articles: [
        {
          id: 'ac-1',
          title: 'Common Access Card Reader Problems',
          type: 'Troubleshooting',
          content: 'Solutions for frequent card reader issues...',
        },
        {
          id: 'ac-2',
          title: 'Configuring Access Levels',
          type: 'Guide',
          content: 'How to set up and manage access levels...',
        },
      ],
    },
    'time-attendance': {
      title: 'Time & Attendance',
      articles: [
        {
          id: 'ta-1',
          title: 'Fixing Time Sync Issues',
          type: 'Troubleshooting',
          content: 'Resolving time synchronization problems...',
        },
        {
          id: 'ta-2',
          title: 'Setting Up Attendance Rules',
          type: 'Guide',
          content: 'Configure attendance rules and policies...',
        },
      ],
    },
    'video-surveillance': {
      title: 'Video Surveillance',
      articles: [
        {
          id: 'vs-1',
          title: 'Camera Connection Problems',
          type: 'Troubleshooting',
          content: 'Solutions for camera connectivity issues...',
        },
        {
          id: 'vs-2',
          title: 'Optimizing Video Storage',
          type: 'Guide',
          content: 'Best practices for video storage management...',
        },
      ],
    },
  },
  faqs: [
    {
      question: 'How do I reset my administrator password?',
      answer: 'To reset your administrator password, follow these steps...',
      category: 'General',
    },
    {
      question: 'What should I do if the device is offline?',
      answer: 'If your device appears offline, try these troubleshooting steps...',
      category: 'Network',
    },
    {
      question: 'How often should I update the firmware?',
      answer: 'We recommend checking for firmware updates monthly...',
      category: 'Maintenance',
    },
  ],
};

const KnowledgeBasePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCategory, setExpandedCategory] = useState<string | false>(false);

  const handleCategoryChange = (panel: string) => (
    event: React.SyntheticEvent,
    isExpanded: boolean
  ) => {
    setExpandedCategory(isExpanded ? panel : false);
  };

  const handleArticleClick = (article: any) => {
    console.log(article);
  };

  return (
    <SupportLayout>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Hero Section */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Knowledge Base
          </Typography>
          <Typography variant="h5" color="text.secondary" paragraph>
            Find answers, troubleshooting guides, and support articles
          </Typography>

          {/* Search Bar */}
          <Paper sx={{ p: 2, mt: 4 }}>
            <TextField
              fullWidth
              placeholder="Search the knowledge base..."
              variant="outlined"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search color="action" />
                  </InputAdornment>
                ),
              }}
            />
          </Paper>
        </Box>

        {/* Quick Links */}
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {[
            { icon: <Article />, title: 'Guides', count: '50+' },
            { icon: <Build />, title: 'Troubleshooting', count: '30+' },
            { icon: <LiveHelp />, title: 'FAQs', count: '100+' },
            { icon: <TipsAndUpdates />, title: 'Tips & Tricks', count: '25+' },
          ].map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Box sx={{ mb: 2 }}>{item.icon}</Box>
                  <Typography variant="h6" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {item.count} articles
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Popular Articles */}
        <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
          Popular Articles
        </Typography>
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {knowledgeBaseData.popularArticles.map((article) => (
            <Grid item xs={12} md={4} key={article.id}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Box sx={{ mb: 2 }}>
                    <Chip
                      label={article.category}
                      size="small"
                      color="primary"
                      sx={{ mb: 1 }}
                    />
                    <Typography variant="h6" gutterBottom>
                      {article.title}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <ThumbUp sx={{ fontSize: 'small', mr: 0.5 }} />
                    <Typography variant="body2" color="text.secondary">
                      {article.helpful}% found this helpful
                    </Typography>
                  </Box>
                  <Button
                    endIcon={<ArrowForward />}
                    variant="outlined"
                    fullWidth
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Categories */}
        <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
          Browse by Category
        </Typography>
        {Object.entries(knowledgeBaseData.categories).map(([key, category]) => (
          <Accordion
            key={key}
            expanded={expandedCategory === key}
            onChange={handleCategoryChange(key)}
            sx={{ mb: 2 }}
          >
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant="h6">{category.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                {category.articles.map((article) => (
                  <ListItem
                    key={article.id}
                    sx={{
                      borderRadius: 1,
                      '&:hover': {
                        backgroundColor: 'action.hover',
                      },
                      cursor: 'pointer',
                    }}
                    onClick={() => handleArticleClick(article)}
                  >
                    <ListItemIcon>
                      <Article />
                    </ListItemIcon>
                    <ListItemText
                      primary={article.title}
                      secondary={article.type}
                    />
                    <Chip
                      label={article.type}
                      size="small"
                      color={article.type === 'Guide' ? 'primary' : 'secondary'}
                    />
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        ))}

        {/* FAQs */}
        <Typography variant="h4" gutterBottom sx={{ mt: 6, mb: 3 }}>
          Frequently Asked Questions
        </Typography>
        {knowledgeBaseData.faqs.map((faq, index) => (
          <Accordion key={index} sx={{ mb: 1 }}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography>
                <Help sx={{ mr: 1, verticalAlign: 'middle' }} />
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}

        {/* Contact Support */}
        <Paper sx={{ p: 4, mt: 6, textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom>
            Can't find what you're looking for?
          </Typography>
          <Typography variant="body1" paragraph color="text.secondary">
            Our support team is available 24/7 to help you with any questions
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<LiveHelp />}
          >
            Contact Support
          </Button>
        </Paper>
      </Container>
    </SupportLayout>
  );
};

export default KnowledgeBasePage;
