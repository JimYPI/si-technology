import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  LinearProgress,
  Tabs,
  Tab,
  Chip,
  Divider,
} from '@mui/material';
import { useLanguage } from '../../../contexts/LanguageContext';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import DownloadIcon from '@mui/icons-material/Download';

interface Course {
  id: string;
  progress: number;
  duration: string;
  level: string;
  prerequisites: string;
}

const MOCK_COURSES: Record<string, Course[]> = {
  beginner: [
    { id: 'course1', progress: 100, duration: '2h', level: 'Beginner', prerequisites: 'None' },
    { id: 'course2', progress: 0, duration: '3h', level: 'Beginner', prerequisites: 'None' },
  ],
  intermediate: [
    { id: 'course3', progress: 60, duration: '4h', level: 'Intermediate', prerequisites: 'Beginner courses' },
    { id: 'course4', progress: 0, duration: '5h', level: 'Intermediate', prerequisites: 'Beginner courses' },
  ],
  advanced: [
    { id: 'course5', progress: 30, duration: '6h', level: 'Advanced', prerequisites: 'Intermediate courses' },
    { id: 'course6', progress: 0, duration: '8h', level: 'Advanced', prerequisites: 'Intermediate courses' },
  ],
  certification: [
    { id: 'cert1', progress: 0, duration: '10h', level: 'Professional', prerequisites: 'All previous courses' },
    { id: 'cert2', progress: 0, duration: '12h', level: 'Expert', prerequisites: 'Professional certification' },
  ],
};

const OnlineTraining: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('beginner');

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setActiveTab(newValue);
  };

  const getProgressStatus = (progress: number) => {
    if (progress === 0) return t('support.training.online.progress.notStarted');
    if (progress === 100) return t('support.training.online.progress.completed');
    return t('support.training.online.progress.inProgress');
  };

  const renderCourseCard = (course: Course) => (
    <Card key={course.id} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" gutterBottom>
          {t(`support.training.online.categories.${activeTab}`)} - {course.id}
        </Typography>

        <Box sx={{ mt: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <AccessTimeIcon fontSize="small" />
                <Typography variant="body2">
                  {t('support.training.online.courseInfo.duration', { duration: course.duration })}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <SignalCellularAltIcon fontSize="small" />
                <Typography variant="body2">
                  {t('support.training.online.courseInfo.level', { level: course.level })}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <MenuBookIcon fontSize="small" />
                <Typography variant="body2">
                  {t('support.training.online.courseInfo.prerequisites', { prerequisites: course.prerequisites })}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ mt: 3 }}>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            {getProgressStatus(course.progress)}
          </Typography>
          <LinearProgress 
            variant="determinate" 
            value={course.progress} 
            sx={{ height: 8, borderRadius: 4 }}
          />
        </Box>
      </CardContent>

      <Divider />

      <CardActions>
        {course.progress === 100 ? (
          <Button
            startIcon={<DownloadIcon />}
            fullWidth
            variant="contained"
            color="success"
          >
            {t('support.training.online.progress.certificate')}
          </Button>
        ) : (
          <Button
            fullWidth
            variant="contained"
            color="primary"
          >
            {course.progress > 0 
              ? t('support.training.online.courseInfo.continueCourse')
              : t('support.training.online.courseInfo.startCourse')
            }
          </Button>
        )}
      </CardActions>
    </Card>
  );

  return (
    <Box component="main" sx={{ p: 3 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {t('support.training.online.title')}
        </Typography>
        <Typography variant="body1" paragraph>
          {t('support.training.online.description')}
        </Typography>

        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
          >
            {Object.keys(MOCK_COURSES).map((category) => (
              <Tab
                key={category}
                label={t(`support.training.online.categories.${category}`)}
                value={category}
              />
            ))}
          </Tabs>
        </Box>

        <Grid container spacing={3}>
          {MOCK_COURSES[activeTab].map((course) => (
            <Grid item xs={12} md={6} key={course.id}>
              {renderCourseCard(course)}
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
};

export default OnlineTraining;
