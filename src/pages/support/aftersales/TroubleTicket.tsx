import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Paper,
  Grid,
  Alert,
} from '@mui/material';
import { useLanguage } from '../../../contexts/LanguageContext';
import { useForm, Controller, FieldValues, Control, UseControllerProps } from 'react-hook-form';

interface TroubleTicketForm extends FieldValues {
  productSerial: string;
  issueType: string;
  description: string;
  priority: string;
  attachments?: FileList;
}

const TroubleTicket: React.FC = () => {
  const { t } = useLanguage();
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const { control, handleSubmit, formState: { errors } } = useForm<TroubleTicketForm>();

  const onSubmit = async (data: TroubleTicketForm) => {
    try {
      // TODO: Implement API call to submit ticket
      console.log('Submitting ticket:', data);
      setSubmitStatus('success');
    } catch (error) {
      console.error('Error submitting ticket:', error);
      setSubmitStatus('error');
    }
  };

  const renderTextField = ({ field }: { field: any }) => (
    <TextField
      {...field}
      fullWidth
      variant="outlined"
      error={!!errors[field.name]}
      helperText={errors[field.name] ? 'This field is required' : ''}
    />
  );

  const renderSelect = ({ field }: { field: any }) => (
    <Select
      {...field}
      fullWidth
      variant="outlined"
      error={!!errors[field.name]}
    />
  );

  return (
    <Box component="main" sx={{ p: 3 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          {t('support.afterSales.troubleTicket.title')}
        </Typography>
        <Typography variant="body1" paragraph>
          {t('support.afterSales.troubleTicket.description')}
        </Typography>

        {submitStatus && (
          <Alert 
            severity={submitStatus} 
            sx={{ mb: 3 }}
            onClose={() => setSubmitStatus(null)}
          >
            {t(`support.afterSales.troubleTicket.form.${submitStatus}`)}
          </Alert>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Controller
                name="productSerial"
                control={control}
                rules={{ required: true }}
                render={renderTextField}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>{t('support.afterSales.troubleTicket.form.issueType')}</InputLabel>
                <Controller
                  name="issueType"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Select
                      {...field}
                      fullWidth
                      variant="outlined"
                      error={!!errors.issueType}
                      label={t('support.afterSales.troubleTicket.form.issueType')}
                    >
                      {Object.entries(t('support.afterSales.troubleTicket.issueTypes', { returnObjects: true })).map(([key, value]) => (
                        <MenuItem key={key} value={key}>
                          {value}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>{t('support.afterSales.troubleTicket.form.priority')}</InputLabel>
                <Controller
                  name="priority"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Select
                      {...field}
                      fullWidth
                      variant="outlined"
                      error={!!errors.priority}
                      label={t('support.afterSales.troubleTicket.form.priority')}
                    >
                      {Object.entries(t('support.afterSales.troubleTicket.priorities', { returnObjects: true })).map(([key, value]) => (
                        <MenuItem key={key} value={key}>
                          {value}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Controller
                name="description"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    multiline
                    rows={4}
                    variant="outlined"
                    label={t('support.afterSales.troubleTicket.form.description')}
                    error={!!errors.description}
                    helperText={errors.description ? 'This field is required' : ''}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                {t('support.afterSales.troubleTicket.form.submit')}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default TroubleTicket;
