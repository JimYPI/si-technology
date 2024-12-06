import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Paper,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  TextField,
  Breadcrumbs,
  Link,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Card,
  CardContent,
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  QuestionAnswer as QuestionAnswerIcon,
  Build as BuildIcon,
  ContactSupport as ContactSupportIcon,
  NavigateNext as NavigateNextIcon,
  Computer as ComputerIcon,
  LiveHelp as LiveHelpIcon,
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const commonFaqs = [
  {
    question: "How do I reset my device to factory settings?",
    answer: "1. Power off the device\n2. Press and hold the reset button\n3. Power on while holding reset\n4. Wait for the LED to flash\n5. Release the reset button\n\nNote: This will erase all settings and data."
  },
  {
    question: "What should I do if the device is not connecting to the network?",
    answer: "1. Check network cable connections\n2. Verify network settings (IP, subnet, gateway)\n3. Ensure the network is operational\n4. Check firewall settings\n5. Try resetting network settings\n\nIf issues persist, contact technical support."
  },
  {
    question: "How can I update the firmware?",
    answer: "1. Download the latest firmware from our website\n2. Access the device web interface\n3. Go to System > Maintenance\n4. Select 'Firmware Update'\n5. Choose the downloaded file\n6. Click 'Update' and wait for completion\n\nWarning: Do not power off during update."
  },
  {
    question: "Why is my fingerprint recognition not working properly?",
    answer: "1. Clean the fingerprint sensor\n2. Ensure proper finger placement\n3. Re-enroll fingerprint if necessary\n4. Check sensor calibration\n5. Update firmware if available\n\nFor best results, enroll each finger multiple times."
  }
];

const troubleshootingGuides = [
  {
    title: "Network Connectivity Issues",
    description: "Step-by-step guide for resolving network connection problems",
    link: "/support/technical/network-guide"
  },
  {
    title: "Access Control Troubleshooting",
    description: "Common access control issues and their solutions",
    link: "/support/technical/access-control-guide"
  },
  {
    title: "Software Installation Problems",
    description: "Solutions for software installation and compatibility issues",
    link: "/support/technical/software-guide"
  },
  {
    title: "Hardware Diagnostics",
    description: "How to diagnose and fix common hardware problems",
    link: "/support/technical/hardware-guide"
  }
];

const TechnicalSupport = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleAccordionChange = (panel: string) => (
    event: React.SyntheticEvent,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
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
        <Typography color="text.primary">Technical Support</Typography>
      </Breadcrumbs>

      {/* Header */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" gutterBottom>
          Technical Support
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Get technical assistance and troubleshooting help for SI Technology products
        </Typography>
      </Box>

      {/* Support Options */}
      <Grid container spacing={4} sx={{ mb: 6 }}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent sx={{ textAlign: 'center' }}>
              <LiveHelpIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Live Chat Support
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Chat with our technical experts for immediate assistance
              </Typography>
              <Button
                variant="contained"
                component={RouterLink}
                to="/support/contact/chat"
                fullWidth
              >
                Start Chat
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent sx={{ textAlign: 'center' }}>
              <ContactSupportIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Create Support Ticket
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Submit a detailed support request for complex issues
              </Typography>
              <Button
                variant="contained"
                component={RouterLink}
                to="/support/technical/ticket"
                fullWidth
              >
                Submit Ticket
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent sx={{ textAlign: 'center' }}>
              <ComputerIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Remote Support
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Get remote assistance from our technical team
              </Typography>
              <Button
                variant="contained"
                component={RouterLink}
                to="/support/technical/remote"
                fullWidth
              >
                Request Remote Support
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* FAQ Section */}
      <Paper sx={{ p: 3, mb: 6 }}>
        <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
          Frequently Asked Questions
        </Typography>
        {commonFaqs.map((faq, index) => (
          <Accordion
            key={index}
            expanded={expanded === `panel${index}`}
            onChange={handleAccordionChange(`panel${index}`)}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography sx={{ fontWeight: 500 }}>
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                component="pre"
                sx={{
                  whiteSpace: 'pre-wrap',
                  fontFamily: 'inherit',
                  mb: 0
                }}
              >
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Paper>

      {/* Troubleshooting Guides */}
      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
          Troubleshooting Guides
        </Typography>
        <List>
          {troubleshootingGuides.map((guide, index) => (
            <React.Fragment key={guide.title}>
              <ListItem
                component={RouterLink}
                to={guide.link}
                sx={{
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
                  primary={guide.title}
                  secondary={guide.description}
                />
              </ListItem>
              {index < troubleshootingGuides.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default TechnicalSupport;
