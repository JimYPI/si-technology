import React, { useState } from 'react';
import {
  Container,
  Typography,
  Paper,
  Grid,
  TextField,
  Button,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
  Stepper,
  Step,
  StepLabel,
  Stack,
  Divider,
  Chip,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../contexts/LanguageContext';
import {
  Build,
  CalendarMonth,
  LocationOn,
  Description,
  CheckCircle,
} from '@mui/icons-material';

const MaintenanceService = () => {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [formData, setFormData] = useState({
    productModel: '',
    serviceType: '',
    location: '',
    description: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const steps = [
    t('support.sections.maintenance.steps.details'),
    t('support.sections.maintenance.steps.schedule'),
    t('support.sections.maintenance.steps.confirm'),
  ];

  const handleInputChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
    // Here you would typically make an API call to submit the maintenance request
  };

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <Stack spacing={3}>
            <FormControl fullWidth>
              <InputLabel>{t('support.sections.maintenance.form.productModel')}</InputLabel>
              <Select
                value={formData.productModel}
                label={t('support.sections.maintenance.form.productModel')}
                onChange={(e) => setFormData({ ...formData, productModel: e.target.value })}
              >
                <MenuItem value="model1">SI-2000</MenuItem>
                <MenuItem value="model2">SI-3000</MenuItem>
                <MenuItem value="model3">SI-4000</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel>{t('support.sections.maintenance.form.serviceType')}</InputLabel>
              <Select
                value={formData.serviceType}
                label={t('support.sections.maintenance.form.serviceType')}
                onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
              >
                <MenuItem value="routine">{t('support.sections.maintenance.serviceTypes.routine')}</MenuItem>
                <MenuItem value="repair">{t('support.sections.maintenance.serviceTypes.repair')}</MenuItem>
                <MenuItem value="upgrade">{t('support.sections.maintenance.serviceTypes.upgrade')}</MenuItem>
              </Select>
            </FormControl>

            <TextField
              fullWidth
              label={t('support.sections.maintenance.form.location')}
              value={formData.location}
              onChange={handleInputChange('location')}
              InputProps={{
                startAdornment: <LocationOn sx={{ mr: 1, color: 'text.secondary' }} />,
              }}
            />

            <TextField
              fullWidth
              multiline
              rows={4}
              label={t('support.sections.maintenance.form.description')}
              value={formData.description}
              onChange={handleInputChange('description')}
            />
          </Stack>
        );

      case 1:
        return (
          <Stack spacing={3}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label={t('support.sections.maintenance.form.date')}
                value={selectedDate}
                onChange={(newDate) => setSelectedDate(newDate)}
                disablePast
                sx={{ width: '100%' }}
              />
            </LocalizationProvider>

            <Alert severity="info" icon={<CalendarMonth />}>
              {t('support.sections.maintenance.scheduling.availability')}
            </Alert>
          </Stack>
        );

      case 2:
        return (
          <Stack spacing={3}>
            <Typography variant="h6" gutterBottom>
              {t('support.sections.maintenance.confirmation.summary')}
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography color="text.secondary">
                  {t('support.sections.maintenance.form.productModel')}
                </Typography>
                <Typography variant="subtitle1">{formData.productModel}</Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography color="text.secondary">
                  {t('support.sections.maintenance.form.serviceType')}
                </Typography>
                <Typography variant="subtitle1">
                  {t(`support.sections.maintenance.serviceTypes.${formData.serviceType}`)}
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Divider sx={{ my: 2 }} />
              </Grid>

              <Grid item xs={12}>
                <Typography color="text.secondary">
                  {t('support.sections.maintenance.form.location')}
                </Typography>
                <Typography variant="subtitle1">{formData.location}</Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography color="text.secondary">
                  {t('support.sections.maintenance.form.date')}
                </Typography>
                <Typography variant="subtitle1">
                  {selectedDate?.toLocaleDateString()}
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography color="text.secondary">
                  {t('support.sections.maintenance.form.description')}
                </Typography>
                <Typography variant="subtitle1">{formData.description}</Typography>
              </Grid>
            </Grid>
          </Stack>
        );

      default:
        return null;
    }
  };

  if (submitted) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
          <CheckCircle sx={{ fontSize: 60, color: 'success.main', mb: 2 }} />
          <Typography variant="h5" gutterBottom>
            {t('support.sections.maintenance.confirmation.success')}
          </Typography>
          <Typography color="text.secondary" paragraph>
            {t('support.sections.maintenance.confirmation.message')}
          </Typography>
          <Button
            variant="outlined"
            onClick={() => {
              setSubmitted(false);
              setActiveStep(0);
              setFormData({
                productModel: '',
                serviceType: '',
                location: '',
                description: '',
              });
              setSelectedDate(null);
            }}
          >
            {t('support.sections.maintenance.confirmation.newRequest')}
          </Button>
        </Paper>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h3" component="h1" gutterBottom align="center">
          {t('support.sections.maintenance.title')}
        </Typography>
        <Typography variant="h6" color="text.secondary" align="center" paragraph>
          {t('support.sections.maintenance.description')}
        </Typography>

        <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
          <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <form onSubmit={handleSubmit}>
            {renderStepContent(activeStep)}

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                {t('support.sections.maintenance.buttons.back')}
              </Button>
              <Box>
                {activeStep === steps.length - 1 ? (
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{
                      bgcolor: '#2D99AE',
                      '&:hover': { bgcolor: '#1B8A9E' },
                    }}
                  >
                    {t('support.sections.maintenance.buttons.submit')}
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{
                      bgcolor: '#2D99AE',
                      '&:hover': { bgcolor: '#1B8A9E' },
                    }}
                  >
                    {t('support.sections.maintenance.buttons.next')}
                  </Button>
                )}
              </Box>
            </Box>
          </form>
        </Paper>
      </motion.div>
    </Container>
  );
};

export default MaintenanceService;
