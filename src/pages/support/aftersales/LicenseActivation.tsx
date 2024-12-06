import React, { useState } from 'react';
import {
  Container,
  Typography,
  Paper,
  Box,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Stepper,
  Step,
  StepLabel,
  Alert,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Chip,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import {
  Key,
  Computer,
  CloudUpload,
  CheckCircle,
  Error,
  Help,
  Download,
  Lock,
  LockOpen,
  DevicesOther,
  Article,
  Schedule,
} from '@mui/icons-material';

const LicenseActivation = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [licenseKey, setLicenseKey] = useState('');
  const [product, setProduct] = useState('');
  const [activationResult, setActivationResult] = useState<'success' | 'error' | null>(null);

  const steps = ['Select Product', 'Enter License Key', 'Activate License'];

  const products = [
    {
      name: 'ZKBioSecurity',
      versions: ['3.0', '3.1', '4.0', '4.1'],
      type: 'Access Control Software',
    },
    {
      name: 'ZKTime.Net',
      versions: ['2.0', '2.5', '3.0'],
      type: 'Time Attendance Software',
    },
    {
      name: 'ZKBioAccess',
      versions: ['1.0', '2.0'],
      type: 'Mobile Access Control',
    },
  ];

  const activationMethods = [
    {
      title: 'Online Activation',
      description: 'Instantly activate through internet connection',
      icon: <CloudUpload />,
      recommended: true,
    },
    {
      title: 'Offline Activation',
      description: 'Generate activation file for offline use',
      icon: <Computer />,
      recommended: false,
    },
  ];

  const handleActivate = () => {
    // Simulated activation logic
    if (licenseKey.length === 25 && licenseKey.includes('-')) {
      setActivationResult('success');
    } else {
      setActivationResult('error');
    }
    setActiveStep(3);
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <Box sx={{ mt: 3 }}>
            <Typography variant="h6" gutterBottom>
              Select Your Product
            </Typography>
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Product</InputLabel>
              <Select
                value={product}
                label="Product"
                onChange={(e) => setProduct(e.target.value)}
              >
                {products.map((prod) => (
                  <MenuItem key={prod.name} value={prod.name}>
                    {prod.name} - {prod.type}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {product && (
              <Card sx={{ mb: 2 }}>
                <CardContent>
                  <Typography variant="subtitle1" gutterBottom>
                    Available Versions
                  </Typography>
                  {products
                    .find((p) => p.name === product)
                    ?.versions.map((version) => (
                      <Chip
                        key={version}
                        label={version}
                        sx={{ mr: 1, mb: 1 }}
                      />
                    ))}
                </CardContent>
              </Card>
            )}
            <Button
              variant="contained"
              onClick={() => setActiveStep(1)}
              disabled={!product}
            >
              Next
            </Button>
          </Box>
        );

      case 1:
        return (
          <Box sx={{ mt: 3 }}>
            <Typography variant="h6" gutterBottom>
              Enter License Key
            </Typography>
            <TextField
              fullWidth
              label="License Key"
              value={licenseKey}
              onChange={(e) => setLicenseKey(e.target.value)}
              placeholder="XXXXX-XXXXX-XXXXX-XXXXX-XXXXX"
              helperText="Enter the 25-character license key"
              sx={{ mb: 3 }}
            />
            <Alert severity="info" sx={{ mb: 2 }}>
              The license key can be found in your purchase confirmation email or product package
            </Alert>
            <Button
              variant="contained"
              onClick={() => setActiveStep(2)}
              disabled={!licenseKey}
            >
              Next
            </Button>
          </Box>
        );

      case 2:
        return (
          <Box sx={{ mt: 3 }}>
            <Typography variant="h6" gutterBottom>
              Choose Activation Method
            </Typography>
            <Grid container spacing={2}>
              {activationMethods.map((method) => (
                <Grid item xs={12} sm={6} key={method.title}>
                  <Card>
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        {method.icon}
                        <Typography variant="h6" sx={{ ml: 1 }}>
                          {method.title}
                          {method.recommended && (
                            <Chip
                              label="Recommended"
                              color="primary"
                              size="small"
                              sx={{ ml: 1 }}
                            />
                          )}
                        </Typography>
                      </Box>
                      <Typography color="text.secondary">
                        {method.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Button
              variant="contained"
              onClick={handleActivate}
              sx={{ mt: 2 }}
            >
              Activate License
            </Button>
          </Box>
        );

      case 3:
        return (
          <Box sx={{ mt: 3 }}>
            <Typography variant="h6" gutterBottom>
              Activation Result
            </Typography>
            {activationResult === 'success' ? (
              <Alert
                severity="success"
                icon={<CheckCircle fontSize="large" />}
                sx={{ mb: 2 }}
              >
                License activated successfully! Your product is ready to use.
              </Alert>
            ) : (
              <Alert
                severity="error"
                icon={<Error fontSize="large" />}
                sx={{ mb: 2 }}
              >
                License activation failed. Please check your license key and try again.
              </Alert>
            )}
            <Button
              variant="outlined"
              onClick={() => {
                setActiveStep(0);
                setLicenseKey('');
                setProduct('');
                setActivationResult(null);
              }}
              sx={{ mt: 2 }}
            >
              Activate Another License
            </Button>
          </Box>
        );

      default:
        return null;
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper sx={{ p: 4, mb: 4, bgcolor: 'primary.main', color: 'primary.contrastText' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Key sx={{ fontSize: 40, mr: 2 }} />
          <Typography variant="h3" component="h1">
            License Activation
          </Typography>
        </Box>
        <Typography variant="h6">
          Activate your SI Technology software products
        </Typography>
      </Paper>

      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3 }}>
            <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {getStepContent(activeStep)}
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              License Information
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <Lock />
                </ListItemIcon>
                <ListItemText
                  primary="License Types"
                  secondary="Standard, Professional, and Enterprise licenses available"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <DevicesOther />
                </ListItemIcon>
                <ListItemText
                  primary="Device Limit"
                  secondary="Varies by license type"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Schedule />
                </ListItemIcon>
                <ListItemText
                  primary="Validity"
                  secondary="1-year or perpetual licenses"
                />
              </ListItem>
            </List>
          </Paper>

          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Need Help?
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <Help />
                </ListItemIcon>
                <ListItemText
                  primary="Activation Guide"
                  secondary="Step-by-step activation instructions"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Article />
                </ListItemIcon>
                <ListItemText
                  primary="FAQ"
                  secondary="Common activation questions"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Download />
                </ListItemIcon>
                <ListItemText
                  primary="Download Software"
                  secondary="Get the latest version"
                />
              </ListItem>
            </List>
            <Button
              variant="contained"
              fullWidth
              startIcon={<Help />}
              href="/support/contact"
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

export default LicenseActivation;
