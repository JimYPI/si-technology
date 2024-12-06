import React, { useState } from 'react';
import {
  Container,
  Typography,
  Paper,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  InputAdornment,
  Tabs,
  Tab,
  Chip,
  Grid,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  ExpandMore,
  Search,
  QuestionAnswer,
  Category,
  Build,
  Security,
  AccessTime,
  Settings,
  ThumbUp,
  ThumbDown,
} from '@mui/icons-material';

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
      id={`faq-tabpanel-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
};

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [tabValue, setTabValue] = useState(0);
  const [expandedAccordion, setExpandedAccordion] = useState<string | false>(false);

  const faqCategories = [
    {
      name: 'General',
      icon: <Category />,
      questions: [
        {
          id: 'g1',
          question: 'How do I contact technical support?',
          answer: 'You can contact our technical support team through multiple channels: Live chat, email support@sitech.com, or by creating a support ticket through our portal.',
        },
        {
          id: 'g2',
          question: 'What are your support hours?',
          answer: 'Our technical support team is available 24/7 for critical issues. Regular support hours are Monday to Friday, 9 AM to 6 PM in your local time zone.',
        },
      ],
    },
    {
      name: 'Installation',
      icon: <Build />,
      questions: [
        {
          id: 'i1',
          question: 'How do I install the ZKBioSecurity software?',
          answer: 'Download the latest version from our download center, run the installer, and follow the step-by-step installation wizard. Detailed instructions are available in our installation guide.',
        },
        {
          id: 'i2',
          question: 'What are the system requirements?',
          answer: 'Minimum requirements: Windows 10/11, 8GB RAM, Intel Core i5 processor or equivalent, 10GB free disk space. See our documentation for full requirements.',
        },
      ],
    },
    {
      name: 'Security',
      icon: <Security />,
      questions: [
        {
          id: 's1',
          question: 'How secure is the biometric data?',
          answer: 'All biometric data is encrypted using AES-256 encryption. Templates are stored securely and cannot be reverse-engineered into original biometric images.',
        },
        {
          id: 's2',
          question: 'How often should I update the security patches?',
          answer: 'We recommend installing security updates as soon as they are available. Critical security patches should be installed within 24 hours of release.',
        },
      ],
    },
    {
      name: 'Maintenance',
      icon: <Settings />,
      questions: [
        {
          id: 'm1',
          question: 'How often should devices be maintained?',
          answer: 'We recommend performing routine maintenance every 3 months. This includes cleaning sensors, checking connections, and updating firmware.',
        },
        {
          id: 'm2',
          question: 'How do I update the firmware?',
          answer: 'Download the latest firmware from our download center. Connect to the device through the web interface and use the firmware update tool.',
        },
      ],
    },
  ];

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleAccordionChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpandedAccordion(isExpanded ? panel : false);
  };

  const handleFeedback = (questionId: string, helpful: boolean) => {
    console.log(`Feedback for ${questionId}: ${helpful ? 'Helpful' : 'Not Helpful'}`);
    // Add feedback handling logic here
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper sx={{ p: 4, mb: 4, bgcolor: 'primary.main', color: 'primary.contrastText' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <QuestionAnswer sx={{ fontSize: 40, mr: 2 }} />
          <Typography variant="h3" component="h1">
            Frequently Asked Questions
          </Typography>
        </Box>
        <Typography variant="h6" gutterBottom>
          Find answers to common questions about our products and services
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search FAQ..."
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

      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ mb: 4 }}>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons="auto"
            >
              <Tab icon={<Category />} label="All" />
              {faqCategories.map((category) => (
                <Tab
                  key={category.name}
                  icon={category.icon}
                  label={category.name}
                />
              ))}
            </Tabs>

            <TabPanel value={tabValue} index={0}>
              {faqCategories.map((category) => (
                <Box key={category.name} sx={{ mb: 3 }}>
                  <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                    {category.icon}
                    <Box sx={{ ml: 1 }}>{category.name}</Box>
                  </Typography>
                  {category.questions.map((qa) => (
                    <Accordion
                      key={qa.id}
                      expanded={expandedAccordion === qa.id}
                      onChange={handleAccordionChange(qa.id)}
                    >
                      <AccordionSummary expandIcon={<ExpandMore />}>
                        <Typography>{qa.question}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography paragraph>{qa.answer}</Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
                          <Button
                            size="small"
                            startIcon={<ThumbUp />}
                            onClick={() => handleFeedback(qa.id, true)}
                          >
                            Helpful
                          </Button>
                          <Button
                            size="small"
                            startIcon={<ThumbDown />}
                            onClick={() => handleFeedback(qa.id, false)}
                          >
                            Not Helpful
                          </Button>
                        </Box>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </Box>
              ))}
            </TabPanel>

            {faqCategories.map((category, index) => (
              <TabPanel key={category.name} value={tabValue} index={index + 1}>
                {category.questions.map((qa) => (
                  <Accordion
                    key={qa.id}
                    expanded={expandedAccordion === qa.id}
                    onChange={handleAccordionChange(qa.id)}
                  >
                    <AccordionSummary expandIcon={<ExpandMore />}>
                      <Typography>{qa.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography paragraph>{qa.answer}</Typography>
                      <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
                        <Button
                          size="small"
                          startIcon={<ThumbUp />}
                          onClick={() => handleFeedback(qa.id, true)}
                        >
                          Helpful
                        </Button>
                        <Button
                          size="small"
                          startIcon={<ThumbDown />}
                          onClick={() => handleFeedback(qa.id, false)}
                        >
                          Not Helpful
                        </Button>
                      </Box>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </TabPanel>
            ))}
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Popular Topics
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <AccessTime color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Installation Guide"
                  secondary="Step-by-step installation instructions"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Security color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Security Settings"
                  secondary="Configure security options"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Build color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Troubleshooting"
                  secondary="Common issues and solutions"
                />
              </ListItem>
            </List>
          </Paper>

          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Can't find what you're looking for?
            </Typography>
            <Typography variant="body2" paragraph>
              Our support team is here to help you with any questions you may have.
            </Typography>
            <Button
              variant="contained"
              fullWidth
              startIcon={<QuestionAnswer />}
              href="/support/contact"
            >
              Contact Support
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FAQ;
