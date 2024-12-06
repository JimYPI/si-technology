import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Grid,
  Paper,
  Box,
  Button,
  Alert,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Card,
  CardContent,
  Divider,
  CircularProgress,
} from '@mui/material';
import {
  Security,
  Warning,
  Update,
  Shield,
  VpnKey,
  BugReport,
  Announcement,
  VerifiedUser,
  Error as ErrorIcon,
  ArrowForward,
  Article as Description,
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const SecurityCenter = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSecurityData = async () => {
      setLoading(true);
      try {
        // Add API call here when backend is ready
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      } catch (err) {
        setError('Failed to load security information. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchSecurityData();
  }, []);

  const latestBulletins = [
    {
      id: 'SB-2024-001',
      severity: 'Critical',
      title: 'Critical Security Update for ZKBioSecurity 3.2.0',
      date: '2024-01-15',
      description: 'Important security patch addressing potential vulnerabilities in access control systems.',
    },
    {
      id: 'SB-2024-002',
      severity: 'High',
      title: 'Security Advisory for Time Attendance Devices',
      date: '2024-01-12',
      description: 'Security update for time attendance devices to prevent unauthorized access.',
    },
    {
      id: 'SB-2024-003',
      severity: 'Medium',
      title: 'Firmware Update for Biometric Readers',
      date: '2024-01-10',
      description: 'Security enhancements for biometric reader firmware.',
    },
  ];

  const securityResources = [
    {
      title: 'Security Best Practices',
      icon: <Shield />,
      description: 'Guidelines for securing your security systems',
      link: '/support/security/best-practices',
    },
    {
      title: 'Vulnerability Reporting',
      icon: <BugReport />,
      description: 'Report security vulnerabilities and issues',
      link: '/support/security/report',
    },
    {
      title: 'Security Updates',
      icon: <Update />,
      description: 'Latest security patches and updates',
      link: '/support/security/updates',
    },
    {
      title: 'Compliance Center',
      icon: <VerifiedUser />,
      description: 'Security compliance documentation and certifications',
      link: '/support/security/compliance',
    },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'critical':
        return 'error';
      case 'high':
        return 'warning';
      case 'medium':
        return 'info';
      default:
        return 'success';
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Paper sx={{ p: 4, mb: 4, bgcolor: 'primary.main', color: 'primary.contrastText' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Security sx={{ fontSize: 40, mr: 2 }} />
              <Typography variant="h3" component="h1">
                Security Center
              </Typography>
            </Box>
            <Typography variant="h6">
              Stay informed about the latest security updates and best practices
            </Typography>
          </Paper>

          <Alert 
            severity="warning" 
            sx={{ mb: 4 }}
            action={
              <Button color="inherit" size="small">
                UPDATE NOW
              </Button>
            }
          >
            Critical security update available for ZKBioSecurity 3.2.0. Please update immediately.
          </Alert>

          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Paper sx={{ p: 3, mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Warning sx={{ mr: 1 }} />
                  <Typography variant="h5">Latest Security Bulletins</Typography>
                </Box>
                <List>
                  {latestBulletins.map((bulletin) => (
                    <React.Fragment key={bulletin.id}>
                      <ListItem alignItems="flex-start">
                        <ListItemIcon>
                          <Announcement />
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                              <Typography variant="subtitle1" sx={{ mr: 2 }}>
                                {bulletin.title}
                              </Typography>
                              <Alert
                                severity={getSeverityColor(bulletin.severity) as any}
                                icon={false}
                                sx={{ py: 0, px: 1 }}
                              >
                                {bulletin.severity}
                              </Alert>
                            </Box>
                          }
                          secondary={
                            <>
                              <Typography component="span" variant="body2" color="text.primary">
                                {bulletin.id} - {bulletin.date}
                              </Typography>
                              <Typography variant="body2" sx={{ mt: 1 }}>
                                {bulletin.description}
                              </Typography>
                            </>
                          }
                        />
                      </ListItem>
                      <Divider component="li" />
                    </React.Fragment>
                  ))}
                </List>
                <Box sx={{ mt: 2, textAlign: 'right' }}>
                  <Button
                    component={RouterLink}
                    to="/support/security/bulletins"
                    endIcon={<ArrowForward />}
                  >
                    View All Bulletins
                  </Button>
                </Box>
              </Paper>

              <Grid container spacing={3}>
                {securityResources.map((resource) => (
                  <Grid item xs={12} sm={6} key={resource.title}>
                    <Card>
                      <CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          {resource.icon}
                          <Typography variant="h6" sx={{ ml: 1 }}>
                            {resource.title}
                          </Typography>
                        </Box>
                        <Typography variant="body2" color="text.secondary" paragraph>
                          {resource.description}
                        </Typography>
                        <Button
                          component={RouterLink}
                          to={resource.link}
                          variant="outlined"
                          fullWidth
                        >
                          Learn More
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 3, mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <VpnKey sx={{ mr: 1 }} />
                  <Typography variant="h6">Quick Actions</Typography>
                </Box>
                <List>
                  <ListItem
                    component={RouterLink}
                    to="/support/security/scan"
                    sx={{ 
                      cursor: 'pointer',
                      '&:hover': { bgcolor: 'action.hover' }
                    }}
                  >
                    <ListItemIcon>
                      <Security />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Security Scan"
                      secondary="Run a security scan on your system"
                    />
                    <ArrowForward />
                  </ListItem>
                  <ListItem
                    component={RouterLink}
                    to="/support/security/updates"
                    sx={{ 
                      cursor: 'pointer',
                      '&:hover': { bgcolor: 'action.hover' }
                    }}
                  >
                    <ListItemIcon>
                      <Update />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Check for Updates"
                      secondary="View and install security updates"
                    />
                    <ArrowForward />
                  </ListItem>
                  <ListItem
                    component={RouterLink}
                    to="/support/security/report"
                    sx={{ 
                      cursor: 'pointer',
                      '&:hover': { bgcolor: 'action.hover' }
                    }}
                  >
                    <ListItemIcon>
                      <BugReport />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Report Issue"
                      secondary="Report a security vulnerability"
                    />
                    <ArrowForward />
                  </ListItem>
                </List>
              </Paper>

              <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Security Resources
                </Typography>
                <List>
                  <ListItem
                    component={RouterLink}
                    to="/security/advisories"
                    sx={{ 
                      cursor: 'pointer',
                      '&:hover': { bgcolor: 'action.hover' }
                    }}
                  >
                    <ListItemIcon>
                      <Description />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Security Advisories"
                      secondary="Latest security bulletins and updates"
                    />
                    <ArrowForward />
                  </ListItem>

                  <ListItem
                    component={RouterLink}
                    to="/security/updates"
                    sx={{ 
                      cursor: 'pointer',
                      '&:hover': { bgcolor: 'action.hover' }
                    }}
                  >
                    <ListItemIcon>
                      <Update />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Security Updates"
                      secondary="Download latest security patches"
                    />
                    <ArrowForward />
                  </ListItem>

                  <ListItem
                    component={RouterLink}
                    to="/security/vulnerabilities"
                    sx={{ 
                      cursor: 'pointer',
                      '&:hover': { bgcolor: 'action.hover' }
                    }}
                  >
                    <ListItemIcon>
                      <BugReport />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Vulnerability Reports"
                      secondary="Report security vulnerabilities"
                    />
                    <ArrowForward />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="Security Whitepaper"
                      secondary="Learn about our security architecture"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="Compliance Guide"
                      secondary="Security compliance documentation"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="Security FAQ"
                      secondary="Common security questions"
                    />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
          </Grid>
        </>
      )}
    </Container>
  );
};

export default SecurityCenter;
