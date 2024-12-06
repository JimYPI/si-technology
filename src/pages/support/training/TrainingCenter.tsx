import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
  Paper,
} from '@mui/material';
import {
  School,
  OndemandVideo,
  Assignment,
  EmojiEvents,
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const TrainingCenter = () => {
  const trainingOptions = [
    {
      title: 'Online Training',
      description: 'Access our comprehensive library of video tutorials and interactive courses.',
      icon: <OndemandVideo sx={{ fontSize: 40 }} />,
      link: '/support/training/online',
      image: '/images/online-training.jpg',
    },
    {
      title: 'Learning Center',
      description: 'Browse through our educational resources and learning materials.',
      icon: <School sx={{ fontSize: 40 }} />,
      link: '/support/training/learning',
      image: '/images/learning-center.jpg',
    },
    {
      title: 'Apply For Training',
      description: 'Register for hands-on training sessions with our expert instructors.',
      icon: <Assignment sx={{ fontSize: 40 }} />,
      link: '/support/training/apply',
      image: '/images/apply-training.jpg',
    },
    {
      title: 'Certification Program',
      description: 'Get certified and demonstrate your expertise in our solutions.',
      icon: <EmojiEvents sx={{ fontSize: 40 }} />,
      link: '/support/training/certification',
      image: '/images/certification.jpg',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper sx={{ p: 4, mb: 4, bgcolor: 'primary.main', color: 'primary.contrastText' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Training Center
        </Typography>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Enhance your knowledge and skills with our comprehensive training programs
        </Typography>
      </Paper>

      <Grid container spacing={4}>
        {trainingOptions.map((option) => (
          <Grid item xs={12} sm={6} md={6} key={option.title}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                sx={{ height: 200 }}
                image={option.image}
                alt={option.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  {option.icon}
                  <Typography variant="h5" component="h2" sx={{ ml: 1 }}>
                    {option.title}
                  </Typography>
                </Box>
                <Typography variant="body1" color="text.secondary" paragraph>
                  {option.description}
                </Typography>
                <Button
                  component={RouterLink}
                  to={option.link}
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Paper sx={{ p: 4, mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Why Choose Our Training Programs?
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center', p: 2 }}>
              <School sx={{ fontSize: 48, color: 'primary.main' }} />
              <Typography variant="h6">Expert Instructors</Typography>
              <Typography variant="body2" color="text.secondary">
                Learn from industry professionals with years of experience
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center', p: 2 }}>
              <OndemandVideo sx={{ fontSize: 48, color: 'primary.main' }} />
              <Typography variant="h6">Flexible Learning</Typography>
              <Typography variant="body2" color="text.secondary">
                Access training materials anytime, anywhere at your own pace
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center', p: 2 }}>
              <EmojiEvents sx={{ fontSize: 48, color: 'primary.main' }} />
              <Typography variant="h6">Industry Recognition</Typography>
              <Typography variant="body2" color="text.secondary">
                Earn certificates recognized throughout the industry
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default TrainingCenter;
