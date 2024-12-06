import React from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
  Box,
} from '@mui/material';
import {
  Download,
  Description,
  School,
  Help,
  CloudDownload,
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const supportLinks = [
  {
    title: 'Download Center',
    path: '/support/download-center',
    icon: <CloudDownload />,
    description: 'Access software, firmware, and tools'
  },
  {
    title: 'Documentation',
    path: '/support/documentation',
    icon: <Description />,
    description: 'Product manuals and guides'
  },
  {
    title: 'Downloads',
    path: '/support/downloads',
    icon: <Download />,
    description: 'Software and drivers'
  },
  {
    title: 'Training',
    path: '/support/training',
    icon: <School />,
    description: 'Training materials and courses'
  },
  {
    title: 'Knowledge Base',
    path: '/support/knowledge-base',
    icon: <Help />,
    description: 'FAQs and troubleshooting'
  },
];

const SupportNavigation = () => {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom sx={{ px: 2 }}>
        Support Resources
      </Typography>
      <List>
        {supportLinks.map((link) => (
          <ListItem
            component={RouterLink}
            to={link.path}
            key={link.path}
            sx={{
              '&:hover': {
                backgroundColor: 'action.hover',
              },
              borderRadius: 1,
              mb: 0.5
            }}
          >
            <ListItemIcon>{link.icon}</ListItemIcon>
            <ListItemText
              primary={link.title}
              secondary={link.description}
              primaryTypographyProps={{
                variant: 'subtitle1',
                fontWeight: 'medium',
              }}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default SupportNavigation;
