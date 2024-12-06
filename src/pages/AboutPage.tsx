import React from 'react';
import { 
  Container, 
  Grid, 
  Typography, 
  Box, 
  Card, 
  CardContent
} from '@mui/material';
import { 
  Security, 
  Speed, 
  Psychology, 
  Engineering 
} from '@mui/icons-material';
import { 
  Timeline, 
  TimelineItem, 
  TimelineSeparator, 
  TimelineDot, 
  TimelineConnector, 
  TimelineContent 
} from '@mui/lab';

const values = [
  {
    title: 'Innovation',
    icon: <Engineering sx={{ fontSize: 40, color: '#2D99AE' }} />,
    description: 'Pushing the boundaries of technology to create cutting-edge security solutions'
  },
  {
    title: 'Reliability',
    icon: <Security sx={{ fontSize: 40, color: '#2D99AE' }} />,
    description: 'Delivering dependable systems that protect what matters most'
  },
  {
    title: 'Performance',
    icon: <Speed sx={{ fontSize: 40, color: '#2D99AE' }} />,
    description: 'Optimizing every component for maximum efficiency and effectiveness'
  },
  {
    title: 'Expertise',
    icon: <Psychology sx={{ fontSize: 40, color: '#2D99AE' }} />,
    description: 'Leveraging years of experience to provide superior solutions'
  }
];

const milestones = [
  {
    year: '2010',
    title: 'Company Founded',
    description: 'SI Technology established with a vision to revolutionize security systems'
  },
  {
    year: '2015',
    title: 'Global Expansion',
    description: 'Expanded operations to 20+ countries worldwide'
  },
  {
    year: '2018',
    title: 'Innovation Award',
    description: 'Received industry recognition for breakthrough AI security solutions'
  },
  {
    year: '2020',
    title: 'Smart Integration',
    description: 'Launched integrated IoT security platform'
  },
  {
    year: '2024',
    title: 'Next Generation',
    description: 'Introducing advanced biometric and AI-powered solutions'
  }
];

const AboutPage: React.FC = () => {
  return (
    <Box className="page-transition">
      {/* Hero Section */}
      <Box sx={{ backgroundColor: '#0C5776', color: '#F8DAD0', py: 6, mb: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" gutterBottom>
            About SI Technology
          </Typography>
          <Typography variant="h5">
            Leading the future of security technology
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* Company Overview */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" component="h2" gutterBottom>
            Our Story
          </Typography>
          <Typography variant="body1" paragraph>
            SI Technology was founded with a vision to transform the security industry through innovative technology solutions. 
            Today, we are a global leader in providing integrated security systems that protect businesses and organizations worldwide.
          </Typography>
          <Typography variant="body1" paragraph>
            With over a decade of experience, we combine cutting-edge technology with deep industry expertise to deliver 
            solutions that meet the evolving security challenges of the modern world.
          </Typography>
        </Box>

        {/* Company Values */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" component="h2" gutterBottom>
            Our Values
          </Typography>
          <Grid container spacing={4}>
            {values.map((value) => (
              <Grid item xs={12} sm={6} md={3} key={value.title}>
                <Card 
                  className="hover-scale"
                  sx={{ 
                    height: '100%',
                    backgroundColor: '#F8DAD0'
                  }}
                >
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Box sx={{ mb: 2 }}>
                      {value.icon}
                    </Box>
                    <Typography variant="h5" component="h3" gutterBottom>
                      {value.title}
                    </Typography>
                    <Typography variant="body2">
                      {value.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Company Timeline */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" component="h2" gutterBottom>
            Our Journey
          </Typography>
          <Timeline position="alternate">
            {milestones.map((milestone, index) => (
              <TimelineItem key={milestone.year}>
                <TimelineSeparator>
                  <TimelineDot sx={{ backgroundColor: '#2D99AE' }} />
                  {index !== milestones.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <Card sx={{ backgroundColor: '#F8DAD0' }}>
                    <CardContent>
                      <Typography variant="h6" component="h3">
                        {milestone.year}
                      </Typography>
                      <Typography variant="subtitle1" sx={{ color: '#0C5776' }}>
                        {milestone.title}
                      </Typography>
                      <Typography variant="body2">
                        {milestone.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Box>

        {/* Statistics */}
        <Box sx={{ mb: 8 }}>
          <Grid container spacing={4}>
            {[
              { number: '1000+', label: 'Clients Worldwide' },
              { number: '20+', label: 'Countries' },
              { number: '50+', label: 'Patents' },
              { number: '24/7', label: 'Support' }
            ].map((stat) => (
              <Grid item xs={6} md={3} key={stat.label}>
                <Card 
                  sx={{ 
                    textAlign: 'center',
                    backgroundColor: '#F8DAD0'
                  }}
                >
                  <CardContent>
                    <Typography variant="h3" sx={{ color: '#2D99AE' }}>
                      {stat.number}
                    </Typography>
                    <Typography variant="h6">
                      {stat.label}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutPage;
