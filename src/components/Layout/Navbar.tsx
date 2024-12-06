import React, { useState, ReactNode } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box,
  Menu,
  MenuItem,
  IconButton,
  Popper,
  Paper,
  Grow,
  ClickAwayListener,
  MenuList,
  Select,
  FormControl,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LanguageIcon from '@mui/icons-material/Language';
import { useTranslation } from '../../i18n/hooks/useTranslation';

interface NavbarProps {
  children?: ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  const { t } = useTranslation();
  const [supportAnchorEl, setSupportAnchorEl] = useState<null | HTMLElement>(null);
  const [productsAnchorEl, setProductsAnchorEl] = useState<null | HTMLElement>(null);
  const [solutionsAnchorEl, setSolutionsAnchorEl] = useState<null | HTMLElement>(null);
  const [userAnchorEl, setUserAnchorEl] = useState<null | HTMLElement>(null);

  const handleSupportClick = (event: React.MouseEvent<HTMLElement>) => {
    setSupportAnchorEl(event.currentTarget);
  };

  const handleProductsClick = (event: React.MouseEvent<HTMLElement>) => {
    setProductsAnchorEl(event.currentTarget);
  };

  const handleSolutionsClick = (event: React.MouseEvent<HTMLElement>) => {
    setSolutionsAnchorEl(event.currentTarget);
  };

  const handleUserClick = (event: React.MouseEvent<HTMLElement>) => {
    setUserAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setSupportAnchorEl(null);
    setProductsAnchorEl(null);
    setSolutionsAnchorEl(null);
    setUserAnchorEl(null);
  };

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        backgroundColor: '#2D99AE',
        boxShadow: 'none',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{
            textDecoration: 'none',
            color: 'white',
            fontWeight: 'bold',
            flexGrow: 0,
            marginRight: 4
          }}
        >
          {t('common.brand')}
        </Typography>
        
        <Box sx={{ flexGrow: 1, display: 'flex', gap: 2 }}>
          <Button
            endIcon={<KeyboardArrowDownIcon />}
            onClick={handleProductsClick}
            sx={{ 
              color: '#FFFFFF',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }
            }}
          >
            {t('common.nav.products')}
          </Button>
          <Menu
            anchorEl={productsAnchorEl}
            open={Boolean(productsAnchorEl)}
            onClose={handleClose}
          >
            <MenuItem component={RouterLink} to="/products/access-control" onClick={handleClose}>Access Control</MenuItem>
            <MenuItem component={RouterLink} to="/products/biometric" onClick={handleClose}>Biometrics</MenuItem>
            <MenuItem component={RouterLink} to="/products/door-locks" onClick={handleClose}>Door Locks</MenuItem>
            <MenuItem component={RouterLink} to="/products/security-inspection" onClick={handleClose}>Security Inspection</MenuItem>
            <MenuItem component={RouterLink} to="/products/time-attendance" onClick={handleClose}>Time Attendance</MenuItem>
            <MenuItem component={RouterLink} to="/products/turnstiles-gates" onClick={handleClose}>Turnstiles & Gates</MenuItem>
          </Menu>

          <Button
            endIcon={<KeyboardArrowDownIcon />}
            onClick={handleSolutionsClick}
            sx={{ 
              color: '#FFFFFF',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }
            }}
          >
            {t('common.nav.solutions')}
          </Button>
          <Menu
            anchorEl={solutionsAnchorEl}
            open={Boolean(solutionsAnchorEl)}
            onClose={handleClose}
          >
            <MenuItem component={RouterLink} to="/solutions/enterprise-security" onClick={handleClose}>Enterprise Security</MenuItem>
            <MenuItem component={RouterLink} to="/solutions/industrial-surveillance" onClick={handleClose}>Industrial Surveillance</MenuItem>
            <MenuItem component={RouterLink} to="/solutions/time-management" onClick={handleClose}>Time Management</MenuItem>
          </Menu>

          <Button
            component={RouterLink}
            to="/resources"
            sx={{ 
              color: '#FFFFFF',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }
            }}
          >
            {t('common.nav.resources')}
          </Button>

          <Button
            endIcon={<KeyboardArrowDownIcon />}
            onClick={handleSupportClick}
            sx={{ 
              color: '#FFFFFF',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }
            }}
          >
            {t('common.nav.support')}
          </Button>
          <Menu
            anchorEl={supportAnchorEl}
            open={Boolean(supportAnchorEl)}
            onClose={handleClose}
            PaperProps={{
              sx: {
                width: 220,
                '& .MuiMenuItem-root': {
                  py: 1,
                  '&:hover': {
                    backgroundColor: 'action.hover',
                  }
                }
              }
            }}
          >
            <MenuItem component={RouterLink} to="/support/downloads" onClick={handleClose}>
              Download Center
            </MenuItem>
            <MenuItem component={RouterLink} to="/support/training" onClick={handleClose}>
              Training Center
            </MenuItem>
            <MenuItem component={RouterLink} to="/support/security" onClick={handleClose}>
              Security Center
            </MenuItem>
            <MenuItem component={RouterLink} to="/support/aftersales" onClick={handleClose}>
              After-Sales Service
            </MenuItem>
            <MenuItem component={RouterLink} to="/support/online" onClick={handleClose}>
              Online Support
            </MenuItem>
          </Menu>

          <Button
            component={RouterLink}
            to="/about"
            sx={{ 
              color: '#FFFFFF',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }
            }}
          >
            {t('common.nav.about')}
          </Button>

          <Button
            component={RouterLink}
            to="/contact"
            sx={{ 
              color: '#FFFFFF',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }
            }}
          >
            {t('common.nav.contact')}
          </Button>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
          {children}
          
          <IconButton
            onClick={handleUserClick}
            sx={{ 
              color: '#FFFFFF',
              marginLeft: 2
            }}
          >
            <PersonOutlineIcon />
          </IconButton>
          <Menu
            anchorEl={userAnchorEl}
            open={Boolean(userAnchorEl)}
            onClose={handleClose}
          >
            <MenuItem component={RouterLink} to="/auth/login" onClick={handleClose}>Login</MenuItem>
            <MenuItem component={RouterLink} to="/auth/register" onClick={handleClose}>Register</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
