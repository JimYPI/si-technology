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
  Paper,
  Stepper,
  Step,
  StepLabel,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  VerifiedUser,
  ExpandMore,
  CheckCircle,
  LocalShipping,
  Build,
  Assignment,
  Info,
} from '@mui/icons-material';

const warrantyPolicies = [
  {
    title: 'Standard Warranty Coverage',
    details: [
      '2-year warranty for hardware products',
      'Free repair or replacement of defective parts',
      'Technical support during warranty period',
      'Coverage for manufacturing defects'
    ]
  },
  {
    title: 'Extended Warranty Options',
    details: [
      'Additional 1-3 years coverage available',
      'Priority technical support',
      'Advanced replacement service',
      'On-site service options'
    ]
  },
  {
    title: 'Warranty Exclusions',
    details: [
      'Physical damage from misuse',
      'Unauthorized modifications',
      'Normal wear and tear',
      'Environmental damage'
    ]
  }
];

const rmaSteps = [
  'Submit RMA Request',
  'Receive RMA Number',
  'Ship Product',
  'Repair Process',
  'Return Shipment'
];

const faqs = [
  {
    question: 'How do I check my warranty status?',
    answer: 'Enter your product serial number on our warranty check page or contact our support team with your purchase details.'
  },
  {
    question: 'What is the RMA process?',
    answer: 'The RMA process involves submitting a request, receiving an RMA number, shipping the product to our service center, repair/replacement, and return shipping.'
  },
  {
    question: 'How long does the RMA process take?',
    answer: 'Typically, the entire RMA process takes 7-10 business days from receipt of the product at our service center.'
  },
  {
    question: 'Do you offer advanced replacement?',
    answer: 'Yes, advanced replacement is available for eligible products under warranty. Additional conditions may apply.'
  }
];

const WarrantyServicePage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [serialNumber, setSerialNumber] = useState('');

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Hero Section */}
      <Box sx={{ mb: 8, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Warranty & RMA Service
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Comprehensive warranty coverage and hassle-free RMA process
        </Typography>
      </Box>

      {/* Warranty Check Section */}
      <Paper sx={{ p: 4, mb: 8 }}>
        <Typography variant="h4" gutterBottom>
          Check Warranty Status
        </Typography>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Enter Product Serial Number"
              variant="outlined"
              value={serialNumber}
              onChange={(e) => setSerialNumber(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Button
              variant="contained"
              startIcon={<VerifiedUser />}
              size="large"
            >
              Check Warranty
            </Button>
          </Grid>
        </Grid>
      </Paper>

      {/* Warranty Policy Section */}
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        Warranty Policy
      </Typography>
      <Grid container spacing={4} sx={{ mb: 8 }}>
        {warrantyPolicies.map((policy, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {policy.title}
                </Typography>
                <List>
                  {policy.details.map((detail, idx) => (
                    <ListItem key={idx}>
                      <ListItemIcon>
                        <CheckCircle color="primary" />
                      </ListItemIcon>
                      <ListItemText primary={detail} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* RMA Process Section */}
      <Paper sx={{ p: 4, mb: 8 }}>
        <Typography variant="h4" gutterBottom>
          RMA Process
        </Typography>
        <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
          {rmaSteps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Button
              variant="contained"
              startIcon={<Assignment />}
              fullWidth
            >
              Submit RMA Request
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Button
              variant="outlined"
              startIcon={<LocalShipping />}
              fullWidth
            >
              Track RMA Status
            </Button>
          </Grid>
        </Grid>
      </Paper>

      {/* Service Centers Section */}
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        Authorized Service Centers
      </Typography>
      <Grid container spacing={3} sx={{ mb: 8 }}>
        {['North America', 'Europe', 'Asia Pacific'].map((region) => (
          <Grid item xs={12} md={4} key={region}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {region}
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <Build />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Service Center"
                      secondary="Full address and contact details"
                    />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* FAQs Section */}
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        Warranty & RMA FAQs
      </Typography>
      {faqs.map((faq, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography>
              <Info sx={{ mr: 1, verticalAlign: 'middle' }} />
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}

      {/* Contact Support */}
      <Box sx={{ textAlign: 'center', mt: 8 }}>
        <Typography variant="h4" gutterBottom>
          Need Assistance?
        </Typography>
        <Typography variant="body1" paragraph color="text.secondary">
          Our warranty support team is here to help
        </Typography>
        <Button
          variant="contained"
          size="large"
          startIcon={<Build />}
        >
          Contact Warranty Support
        </Button>
      </Box>
    </Container>
  );
};

export default WarrantyServicePage;
