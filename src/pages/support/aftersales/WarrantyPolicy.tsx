import React from 'react';
import {
  Container,
  Typography,
  Paper,
  Box,
  Grid,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from '@mui/material';
import {
  ExpandMore,
  Gavel,
  CheckCircle,
  Warning,
  Schedule,
  Build,
  LocalShipping,
  SupportAgent,
} from '@mui/icons-material';

const WarrantyPolicy = () => {
  const warrantyPolicies = [
    {
      title: 'Standard Hardware Warranty',
      coverage: [
        'Manufacturing defects',
        'Component failures',
        'Material defects',
        'Workmanship issues',
      ],
      duration: '24 months',
      conditions: [
        'Product must be registered within 30 days of purchase',
        'Warranty is non-transferable',
        'Valid only with proof of purchase',
        'Installation must be performed by certified technicians',
      ],
    },
    {
      title: 'Extended Warranty Options',
      coverage: [
        'All standard warranty coverage',
        'Preventive maintenance',
        'Priority support',
        'Parts replacement',
      ],
      duration: 'Up to 5 years',
      conditions: [
        'Must be purchased within standard warranty period',
        'Annual maintenance check required',
        'Coverage begins after standard warranty expires',
        'Available for select products only',
      ],
    },
    {
      title: 'Software Support Package',
      coverage: [
        'Software updates',
        'Bug fixes',
        'Security patches',
        'Technical support',
      ],
      duration: '12 months',
      conditions: [
        'Valid license required',
        'Support limited to current version',
        'Remote assistance only',
        'Business hours support',
      ],
    },
  ];

  const claimProcess = [
    'Contact customer support with product details',
    'Provide proof of purchase and warranty registration',
    'Describe the issue in detail',
    'Receive RMA number if required',
    'Follow shipping instructions for repair/replacement',
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper sx={{ p: 4, mb: 4, bgcolor: 'primary.main', color: 'primary.contrastText' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Gavel sx={{ fontSize: 40, mr: 2 }} />
          <Typography variant="h3" component="h1">
            Warranty Policy
          </Typography>
        </Box>
        <Typography variant="h6">
          Comprehensive warranty coverage for your security solutions
        </Typography>
      </Paper>

      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            Warranty Coverage
          </Typography>
          {warrantyPolicies.map((policy, index) => (
            <Accordion key={index} sx={{ mb: 2 }}>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant="h6">{policy.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="subtitle1" gutterBottom>
                      Coverage Includes:
                    </Typography>
                    <List dense>
                      {policy.coverage.map((item, idx) => (
                        <ListItem key={idx}>
                          <ListItemIcon>
                            <CheckCircle color="success" />
                          </ListItemIcon>
                          <ListItemText primary={item} />
                        </ListItem>
                      ))}
                    </List>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="subtitle1" gutterBottom>
                      Terms and Conditions:
                    </Typography>
                    <List dense>
                      {policy.conditions.map((condition, idx) => (
                        <ListItem key={idx}>
                          <ListItemIcon>
                            <Warning color="warning" />
                          </ListItemIcon>
                          <ListItemText primary={condition} />
                        </ListItem>
                      ))}
                    </List>
                    <Box sx={{ mt: 2 }}>
                      <Typography variant="subtitle2" color="primary">
                        Duration: {policy.duration}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            Warranty Claim Process
          </Typography>
          <Card>
            <CardContent>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <List>
                    {claimProcess.map((step, index) => (
                      <ListItem key={index}>
                        <ListItemIcon>
                          {index === 0 ? <SupportAgent color="primary" /> :
                           index === 1 ? <Schedule color="primary" /> :
                           index === 2 ? <Build color="primary" /> :
                           <LocalShipping color="primary" />}
                        </ListItemIcon>
                        <ListItemText 
                          primary={`Step ${index + 1}`}
                          secondary={step}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box sx={{ p: 2, bgcolor: 'background.default', borderRadius: 1 }}>
                    <Typography variant="h6" gutterBottom>
                      Need to File a Claim?
                    </Typography>
                    <Typography variant="body2" paragraph>
                      Our support team is ready to assist you with your warranty claim.
                      Please have your product details and proof of purchase ready.
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={<SupportAgent />}
                      fullWidth
                    >
                      Contact Support
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default WarrantyPolicy;
