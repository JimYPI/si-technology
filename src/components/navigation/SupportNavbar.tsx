import React from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Button,
  Menu,
  MenuItem,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const SupportNavbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const menuItems = {
    'Training Center': {
      path: '/support/training',
      subItems: [
        { label: 'Online Training', path: '/support/training/online' },
        { label: 'Learning Center', path: '/support/training/learning' },
        { label: 'Apply For Training', path: '/support/training/apply' },
      ],
    },
    'Download Center': {
      path: '/support/downloads',
      subItems: [
        { label: 'Datasheet', path: '/support/downloads/datasheet' },
        { label: 'Software', path: '/support/downloads/software' },
        { label: 'User Manual', path: '/support/downloads/manual' },
        { label: 'Installation Guide', path: '/support/downloads/installation' },
        { label: 'Quick Guide', path: '/support/downloads/quickguide' },
        { label: 'SDK', path: '/support/downloads/sdk' },
        { label: 'A&E Specifications', path: '/support/downloads/specifications' },
        { label: 'Solutions', path: '/support/downloads/solutions' },
        { label: 'Case Studies', path: '/support/downloads/cases' },
        { label: 'Biometrics Technology', path: '/support/downloads/biometrics' },
        { label: 'Catalog', path: '/support/downloads/catalog' },
      ],
    },
    'Security Center': {
      path: '/support/security',
      subItems: [
        { label: 'Security Center', path: '/support/security' },
        { label: 'Security Bulletins', path: '/support/security/bulletins' },
      ],
    },
    'After-sales Service': {
      path: '/support/aftersales',
      subItems: [
        { label: 'FAQ', path: '/support/aftersales/faq' },
        { label: 'Anti-counterfeiting', path: '/support/aftersales/anti-counterfeit' },
        { label: 'Trouble Ticket', path: '/support/aftersales/trouble-ticket' },
        { label: 'Maintenance Service', path: '/support/aftersales/maintenance' },
        { label: 'License Activation', path: '/support/aftersales/license' },
        { label: 'Warranty Policy', path: '/support/aftersales/warranty' },
        { label: 'Free License Download', path: '/support/aftersales/free-license' },
      ],
    },
    'Online Support': {
      path: '/support/online',
      subItems: [
        { label: 'Online Consultation', path: '/support/online/consultation' },
      ],
    },
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  if (isMobile) {
    return (
      <AppBar position="static" color="default">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {Object.entries(menuItems).map(([key, { path, subItems }]) => [
              <MenuItem
                key={path}
                component={RouterLink}
                to={path}
                onClick={handleClose}
              >
                {key}
              </MenuItem>,
              ...subItems.map((item) => (
                <MenuItem
                  key={item.path}
                  component={RouterLink}
                  to={item.path}
                  onClick={handleClose}
                  sx={{ pl: 4 }}
                >
                  {item.label}
                </MenuItem>
              )),
            ])}
          </Menu>
        </Toolbar>
      </AppBar>
    );
  }

  return (
    <AppBar position="static" color="default">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex' }}>
            {Object.entries(menuItems).map(([key, { path, subItems }]) => (
              <Box
                key={key}
                sx={{
                  position: 'relative',
                  '&:hover > .MuiMenu-root': { display: 'block' },
                }}
              >
                <Button
                  component={RouterLink}
                  to={path}
                  sx={{ color: 'text.primary', display: 'block', px: 2 }}
                >
                  {key}
                </Button>
                <Menu
                  sx={{
                    display: 'none',
                    '&:hover': { display: 'block' },
                  }}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={false}
                >
                  {subItems.map((item) => (
                    <MenuItem
                      key={item.path}
                      component={RouterLink}
                      to={item.path}
                      onClick={handleClose}
                    >
                      {item.label}
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default SupportNavbar;
