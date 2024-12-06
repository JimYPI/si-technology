import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
  Button,
  Tabs,
  Tab,
  Paper,
  Chip,
  Rating,
  LinearProgress,
} from '@mui/material';
import {
  School,
  PlayCircle,
  Assignment,
  AccessTime,
  Star,
  Language,
  Group,
  CheckCircle,
} from '@mui/icons-material';
import SupportLayout from '../../layouts/SupportLayout';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const courses = {
  beginner: [
    {
      title: 'Access Control Fundamentals',
      description: 'Learn the basics of access control systems and their implementation',
      duration: '2 hours',
      level: 'Beginner',
      rating: 4.5,
      students: 1250,
      image: '/images/training/access-control-basics.jpg',
      modules: 8,
      progress: 0,
      certification: true
    },
    {
      title: 'Introduction to Time & Attendance',
      description: 'Understanding time and attendance management systems',
      duration: '1.5 hours',
      level: 'Beginner',
      rating: 4.8,
      students: 980,
      image: '/images/training/time-attendance-intro.jpg',
      modules: 6,
      progress: 0,
      certification: true
    }
  ],
  intermediate: [
    {
      title: 'Advanced Access Control Configuration',
      description: 'Deep dive into access control system configuration and management',
      duration: '4 hours',
      level: 'Intermediate',
      rating: 4.7,
      students: 750,
      image: '/images/training/advanced-access-control.jpg',
      modules: 12,
      progress: 0,
      certification: true
    },
    {
      title: 'Video Surveillance Systems',
      description: 'Comprehensive guide to video surveillance implementation',
      duration: '3 hours',
      level: 'Intermediate',
      rating: 4.6,
      students: 620,
      image: '/images/training/video-surveillance.jpg',
      modules: 10,
      progress: 0,
      certification: true
    }
  ],
  advanced: [
    {
      title: 'System Integration Specialist',
      description: 'Learn to integrate multiple security systems effectively',
      duration: '6 hours',
      level: 'Advanced',
      rating: 4.9,
      students: 340,
      image: '/images/training/system-integration.jpg',
      modules: 15,
      progress: 0,
      certification: true
    },
    {
      title: 'Security System Architecture',
      description: 'Design and implement comprehensive security solutions',
      duration: '8 hours',
      level: 'Advanced',
      rating: 4.8,
      students: 280,
      image: '/images/training/security-architecture.jpg',
      modules: 18,
      progress: 0,
      certification: true
    }
  ]
};

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`training-tabpanel-${index}`}
      aria-labelledby={`training-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

const CourseCard = ({ course }: { course: any }) => (
  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
    <CardMedia
      component="img"
      height="200"
      image={course.image}
      alt={course.title}
    />
    <CardContent sx={{ flexGrow: 1 }}>
      <Box sx={{ mb: 2 }}>
        <Chip
          label={course.level}
          color={
            course.level === 'Beginner'
              ? 'primary'
              : course.level === 'Intermediate'
              ? 'secondary'
              : 'error'
          }
          size="small"
          sx={{ mb: 1 }}
        />
        <Typography variant="h5" component="h2" gutterBottom>
          {course.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {course.description}
        </Typography>
      </Box>

      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid item xs={6}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <AccessTime sx={{ mr: 1, fontSize: 'small' }} />
            <Typography variant="body2">{course.duration}</Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Assignment sx={{ mr: 1, fontSize: 'small' }} />
            <Typography variant="body2">{course.modules} modules</Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Group sx={{ mr: 1, fontSize: 'small' }} />
            <Typography variant="body2">{course.students} students</Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Star sx={{ mr: 1, fontSize: 'small' }} />
            <Typography variant="body2">{course.rating}</Typography>
          </Box>
        </Grid>
      </Grid>

      {course.progress > 0 && (
        <Box sx={{ mb: 2 }}>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Progress: {course.progress}%
          </Typography>
          <LinearProgress
            variant="determinate"
            value={course.progress}
            sx={{ height: 8, borderRadius: 4 }}
          />
        </Box>
      )}

      <Button
        variant="contained"
        color="primary"
        fullWidth
        startIcon={<PlayCircle />}
      >
        Start Course
      </Button>
    </CardContent>
  </Card>
);

const TrainingPage = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <SupportLayout>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Hero Section */}
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Training Center
          </Typography>
          <Typography variant="h5" color="text.secondary" paragraph>
            Comprehensive training courses for security professionals
          </Typography>
        </Box>

        {/* Statistics Cards */}
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {[
            { icon: <School />, title: 'Courses', value: '25+' },
            { icon: <Group />, title: 'Students', value: '5,000+' },
            { icon: <CheckCircle />, title: 'Certifications', value: '12' },
            { icon: <Language />, title: 'Languages', value: '3' },
          ].map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Box sx={{ mb: 2 }}>{stat.icon}</Box>
                  <Typography variant="h4" gutterBottom>
                    {stat.value}
                  </Typography>
                  <Typography color="text.secondary">
                    {stat.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Course Tabs */}
        <Box sx={{ width: '100%', mb: 4 }}>
          <Paper sx={{ borderRadius: 2 }}>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              variant="fullWidth"
              sx={{ borderBottom: 1, borderColor: 'divider' }}
            >
              <Tab label="Beginner" />
              <Tab label="Intermediate" />
              <Tab label="Advanced" />
            </Tabs>

            <TabPanel value={tabValue} index={0}>
              <Grid container spacing={4}>
                {courses.beginner.map((course, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <CourseCard course={course} />
                  </Grid>
                ))}
              </Grid>
            </TabPanel>

            <TabPanel value={tabValue} index={1}>
              <Grid container spacing={4}>
                {courses.intermediate.map((course, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <CourseCard course={course} />
                  </Grid>
                ))}
              </Grid>
            </TabPanel>

            <TabPanel value={tabValue} index={2}>
              <Grid container spacing={4}>
                {courses.advanced.map((course, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <CourseCard course={course} />
                  </Grid>
                ))}
              </Grid>
            </TabPanel>
          </Paper>
        </Box>

        {/* Certification Section */}
        <Paper sx={{ p: 4, mt: 6, textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            Get Certified
          </Typography>
          <Typography variant="body1" paragraph color="text.secondary">
            Earn official certifications and advance your career in security technology
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<School />}
          >
            View Certification Paths
          </Button>
        </Paper>
      </Container>
    </SupportLayout>
  );
};

export default TrainingPage;
