import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Grid,
  Alert,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CircularProgress,
} from '@mui/material';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import { useLanguage } from '../../../contexts/LanguageContext';
import { useForm, Controller, FieldValues } from 'react-hook-form';

interface FormData extends FieldValues {
  serialNumber: string;
}

const AntiCounterfeit: React.FC = () => {
  const { t } = useLanguage();
  const [verificationStatus, setVerificationStatus] = useState<'scanning' | 'genuine' | 'counterfeit' | 'error' | null>(null);
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      setVerificationStatus('scanning');
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // For demo purposes, consider numbers starting with '9' as genuine
      const isGenuine = data.serialNumber.startsWith('9');
      setVerificationStatus(isGenuine ? 'genuine' : 'counterfeit');
    } catch (error) {
      console.error('Verification error:', error);
      setVerificationStatus('error');
    }
  };

  const getStatusAlert = () => {
    if (!verificationStatus) return null;
    
    const severity = 
      verificationStatus === 'genuine' ? 'success' :
      verificationStatus === 'counterfeit' ? 'error' :
      verificationStatus === 'scanning' ? 'info' : 'error';

    return (
      <Alert 
        severity={severity}
        sx={{ mb: 3 }}
        onClose={() => setVerificationStatus(null)}
        icon={verificationStatus === 'scanning' ? <CircularProgress size={20} /> : undefined}
      >
        {t(`support.afterSales.antiCounterfeit.form.${verificationStatus}`)}
      </Alert>
    );
  };

  const renderField = ({ field }: { field: any }) => (
    <TextField
      {...field}
      fullWidth
      variant="outlined"
      error={!!errors.serialNumber}
      helperText={errors.serialNumber ? 'Valid serial number required' : ''}
    />
  );

  return (
    <Box component="main" sx={{ p: 3 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          {t('support.afterSales.antiCounterfeit.title')}
        </Typography>
        <Typography variant="body1" paragraph>
          {t('support.afterSales.antiCounterfeit.description')}
        </Typography>

        {getStatusAlert()}

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <List>
              <ListItem>
                <ListItemIcon>
                  <LooksOneIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary={t('support.afterSales.antiCounterfeit.instructions.step1')} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <LooksTwoIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary={t('support.afterSales.antiCounterfeit.instructions.step2')} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Looks3Icon color="primary" />
                </ListItemIcon>
                <ListItemText primary={t('support.afterSales.antiCounterfeit.instructions.step3')} />
              </ListItem>
            </List>
          </Grid>

          <Grid item xs={12} md={6}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Controller
                    name="serialNumber"
                    control={control}
                    rules={{ required: true, minLength: 6 }}
                    render={renderField}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    startIcon={<QrCodeScannerIcon />}
                    onClick={() => {
                      // TODO: Implement QR code scanning
                      console.log('QR code scanning not implemented');
                    }}
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                  >
                    Scan QR Code
                  </Button>

                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                    disabled={verificationStatus === 'scanning'}
                  >
                    {t('support.afterSales.antiCounterfeit.form.verify')}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default AntiCounterfeit;
