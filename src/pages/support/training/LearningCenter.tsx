import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Paper,
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import {
  MenuBook,
  VideoLibrary,
  Quiz,
  EmojiEvents,
  School,
  Assignment,
  PlayCircle,
} from '@mui/icons-material';

const LearningCenter = () => {
  const learningResources = [
    {
      title: 'Video Tutorials',
      icon: <VideoLibrary color="primary" />,
      description: 'Step-by-step video guides for all our products',
      items: [
        'Product Installation Guides',
        'Configuration Tutorials',
        'Troubleshooting Videos',
        'Best Practices',
      ],
    },
    {
      title: 'Documentation',
      icon: <MenuBook color="primary" />,
      description: 'Comprehensive product documentation and guides',
      items: [
        'User Manuals',
        'Technical Specifications',
        'Integration Guides',
        'API Documentation',
      ],
    },
    {
      title: 'Practice Labs',
      icon: <Assignment color="primary" />,
      description: 'Hands-on virtual labs for practical experience',
      items: [
        'Virtual System Setup',
        'Configuration Exercises',
        'Problem-Solving Scenarios',
        'Performance Testing',
      ],
    },
    {
      title: 'Certification Programs',
      icon: <EmojiEvents color="primary" />,
      description: 'Professional certification paths for career growth',
      items: [
        'Basic Certification',
        'Advanced Certification',
        'Expert Certification',
        'Specialist Tracks',
      ],
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper sx={{ p: 4, mb: 4, bgcolor: 'primary.main', color: 'primary.contrastText' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <School sx={{ fontSize: 40, mr: 2 }} />
          <Typography variant="h3" component="h1">
            Learning Center
          </Typography>
        </Box>
        <Typography variant="h6">
          Your hub for learning and professional development
        </Typography>
      </Paper>

      <Grid container spacing={4}>
        {learningResources.map((resource, index) => (
          <Grid item xs={12} md={6} key={index}>
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
                <List dense>
                  {resource.items.map((item, idx) => (
                    <ListItem key={idx}>
                      <ListItemIcon>
                        <PlayCircle color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
              <CardActions>
                <Button variant="contained" fullWidth>
                  Explore {resource.title}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Paper sx={{ p: 3, mt: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Quiz color="primary" sx={{ mr: 1 }} />
          <Typography variant="h6">Assessment Center</Typography>
        </Box>
        <Typography paragraph>
          Test your knowledge and track your progress with our comprehensive assessment tools.
        </Typography>
        <Button variant="outlined">Take an Assessment</Button>
      </Paper>
    </Container>
  );
};

export default LearningCenter;
