import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Paper,
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  Support,
  QuestionAnswer,
  VerifiedUser,
  AssignmentTurnedIn,
  BuildCircle,
  Key,
  Download,
  Chat,
  CheckCircle,
  Schedule,
  LocationOn,
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const AfterSalesService = () => {
  const serviceOptions = [
    {
      title: 'FAQ',
      icon: <QuestionAnswer />,
      description: 'Find answers to commonly asked questions',
      link: '/support/aftersales/faq',
      color: '#2196f3',
    },
    {
      title: 'Anti-counterfeiting',
      icon: <VerifiedUser />,
      description: 'Verify the authenticity of your products',
      link: '/support/aftersales/anti-counterfeit',
      color: '#4caf50',
    },
    {
      title: 'Trouble Ticket',
      icon: <AssignmentTurnedIn />,
      description: 'Submit and track support tickets',
      link: '/support/aftersales/trouble-ticket',
      color: '#ff9800',
    },
    {
      title: 'Maintenance Service',
      icon: <BuildCircle />,
      description: 'Schedule maintenance and repairs',
      link: '/support/aftersales/maintenance',
      color: '#9c27b0',
    },
    {
      title: 'License Activation',
      icon: <Key />,
      description: 'Activate and manage product licenses',
      link: '/support/aftersales/license',
      color: '#f44336',
    },
    {
      title: 'Free License Download',
      icon: <Download />,
      description: 'Download free software licenses',
      link: '/support/aftersales/free-license',
      color: '#009688',
    },
  ];

  const supportHighlights = [
    {
      icon: <CheckCircle />,
      title: '24/7 Support',
      description: 'Round-the-clock technical assistance',
    },
    {
      icon: <Schedule />,
      title: 'Fast Response',
      description: 'Quick response to support tickets',
    },
    {
      icon: <LocationOn />,
      title: 'Global Coverage',
      description: 'Support centers worldwide',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper sx={{ p: 4, mb: 4, bgcolor: 'primary.main', color: 'primary.contrastText' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Support sx={{ fontSize: 40, mr: 2 }} />
          <Typography variant="h3" component="h1">
            After-sales Service
          </Typography>
        </Box>
        <Typography variant="h6">
          Comprehensive support services for all your needs
        </Typography>
      </Paper>

      <Grid container spacing={4}>
        {serviceOptions.map((option) => (
          <Grid item xs={12} sm={6} md={4} key={option.title}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  mb: 2,
                  color: option.color 
                }}>
                  {React.cloneElement(option.icon, { sx: { fontSize: 40 } })}
                  <Typography variant="h6" sx={{ ml: 1 }}>
                    {option.title}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {option.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  component={RouterLink}
                  to={option.link}
                  variant="contained"
                  fullWidth
                  sx={{ bgcolor: option.color }}
                >
                  Access Now
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Why Choose Our After-sales Service?
            </Typography>
            <Grid container spacing={3}>
              {supportHighlights.map((highlight) => (
                <Grid item xs={12} sm={4} key={highlight.title}>
                  <Box sx={{ textAlign: 'center', p: 2 }}>
                    {React.cloneElement(highlight.icon, { 
                      sx: { fontSize: 48, color: 'primary.main', mb: 1 } 
                    })}
                    <Typography variant="h6" gutterBottom>
                      {highlight.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {highlight.description}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Need Immediate Assistance?
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <Chat color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Live Chat"
                  secondary="Chat with our support team"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AssignmentTurnedIn color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Submit Ticket"
                  secondary="Create a support ticket"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <QuestionAnswer color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="FAQ"
                  secondary="Browse common questions"
                />
              </ListItem>
            </List>
            <Button
              variant="contained"
              fullWidth
              startIcon={<Support />}
              component={RouterLink}
              to="/support/contact"
              sx={{ mt: 2 }}
            >
              Contact Support
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AfterSalesService;
