import React, { useState } from 'react';
import {
  Container,
  Typography,
  Paper,
  Box,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Rating,
  Divider,
} from '@mui/material';
import {
  Headset,
  CalendarToday,
  AccessTime,
  Language,
  VideoCall,
  Chat,
  Person,
  Star,
} from '@mui/icons-material';

const OnlineConsultation = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedConsultant, setSelectedConsultant] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const consultants = [
    {
      id: 1,
      name: 'Dr. Sophie Martin',
      specialty: 'Security Systems Architecture',
      languages: ['English', 'French'],
      rating: 4.9,
      reviews: 128,
      image: '/assets/consultants/sophie.jpg',
      availability: ['Monday', 'Wednesday', 'Friday'],
    },
    {
      id: 2,
      name: 'Jean-Pierre Dubois',
      specialty: 'Biometric Solutions',
      languages: ['French', 'English', 'German'],
      rating: 4.8,
      reviews: 95,
      image: '/assets/consultants/jean.jpg',
      availability: ['Tuesday', 'Thursday'],
    },
    {
      id: 3,
      name: 'Maria Garcia',
      specialty: 'Access Control Systems',
      languages: ['Spanish', 'English', 'French'],
      rating: 4.7,
      reviews: 156,
      image: '/assets/consultants/maria.jpg',
      availability: ['Monday', 'Tuesday', 'Thursday'],
    },
  ];

  const consultationTypes = [
    {
      type: 'Product Selection',
      description: 'Get expert advice on choosing the right security solutions',
      duration: '30 minutes',
      icon: <VideoCall />,
    },
    {
      type: 'Technical Support',
      description: 'Resolve technical issues with our expert consultants',
      duration: '45 minutes',
      icon: <Chat />,
    },
    {
      type: 'System Design',
      description: 'Professional guidance on security system architecture',
      duration: '60 minutes',
      icon: <Person />,
    },
  ];

  const availableTimes = [
    '09:00', '10:00', '11:00', '14:00', '15:00', '16:00'
  ];

  const languages = ['English', 'French', 'Spanish', 'German'];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper sx={{ p: 4, mb: 4, bgcolor: 'primary.main', color: 'primary.contrastText' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Headset sx={{ fontSize: 40, mr: 2 }} />
          <Typography variant="h3" component="h1">
            Online Consultation
          </Typography>
        </Box>
        <Typography variant="h6">
          Schedule a personalized consultation with our security experts
        </Typography>
      </Paper>

      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Book Your Consultation
              </Typography>

              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel>Consultation Type</InputLabel>
                    <Select
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                      label="Consultation Type"
                    >
                      {consultationTypes.map((type) => (
                        <MenuItem key={type.type} value={type.type}>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            {type.icon}
                            <Box sx={{ ml: 1 }}>
                              <Typography variant="subtitle2">{type.type}</Typography>
                              <Typography variant="caption" color="text.secondary">
                                {type.duration}
                              </Typography>
                            </Box>
                          </Box>
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    type="date"
                    label="Select Date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <InputLabel>Select Time</InputLabel>
                    <Select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      label="Select Time"
                    >
                      {availableTimes.map((time) => (
                        <MenuItem key={time} value={time}>
                          {time}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel>Preferred Language</InputLabel>
                    <Select
                      value={selectedLanguage}
                      onChange={(e) => setSelectedLanguage(e.target.value)}
                      label="Preferred Language"
                    >
                      {languages.map((language) => (
                        <MenuItem key={language} value={language}>
                          {language}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    label="Consultation Topics"
                    placeholder="Please describe what you'd like to discuss"
                  />
                </Grid>
              </Grid>

              <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
                <Button variant="contained" size="large">
                  Schedule Consultation
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Available Consultants
              </Typography>
              <List>
                {consultants.map((consultant) => (
                  <React.Fragment key={consultant.id}>
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar alt={consultant.name} src={consultant.image} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={consultant.name}
                        secondary={
                          <Box>
                            <Typography variant="body2" color="text.secondary">
                              {consultant.specialty}
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                              <Rating
                                value={consultant.rating}
                                precision={0.1}
                                size="small"
                                readOnly
                              />
                              <Typography variant="caption" sx={{ ml: 1 }}>
                                ({consultant.reviews} reviews)
                              </Typography>
                            </Box>
                            <Box sx={{ mt: 1 }}>
                              {consultant.languages.map((lang) => (
                                <Chip
                                  key={lang}
                                  label={lang}
                                  size="small"
                                  variant="outlined"
                                  sx={{ mr: 0.5, mb: 0.5 }}
                                />
                              ))}
                            </Box>
                          </Box>
                        }
                      />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                  </React.Fragment>
                ))}
              </List>
            </CardContent>
          </Card>

          <Card sx={{ mt: 2 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Consultation Types
              </Typography>
              {consultationTypes.map((type, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                  <Typography variant="subtitle1" gutterBottom>
                    {type.type}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {type.description}
                  </Typography>
                  <Typography variant="caption" color="primary">
                    Duration: {type.duration}
                  </Typography>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default OnlineConsultation;
