import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Language as LanguageIcon,
  Menu as MenuIcon,
} from '@mui/icons-material';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleLanguageClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageSelect = (lang: 'en' | 'fr') => {
    setLanguage(lang);
    handleLanguageClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null);
  };

  const navItems = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.products'), href: '/products' },
    { label: t('nav.support'), href: '/support' },
    { label: t('nav.contact'), href: '/contact' },
  ];

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#001C44' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          SI Technology
        </Typography>

        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              aria-label="menu"
              onClick={handleMobileMenuOpen}
              sx={{ ml: 1 }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={mobileMenuAnchor}
              open={Boolean(mobileMenuAnchor)}
              onClose={handleMobileMenuClose}
            >
              {navItems.map((item) => (
                <MenuItem
                  key={item.href}
                  onClick={handleMobileMenuClose}
                  component="a"
                  href={item.href}
                >
                  {item.label}
                </MenuItem>
              ))}
              <MenuItem onClick={() => handleLanguageSelect(language === 'en' ? 'fr' : 'en')}>
                <LanguageIcon sx={{ mr: 1 }} />
                {language === 'en' ? 'Français' : 'English'}
              </MenuItem>
            </Menu>
          </>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {navItems.map((item) => (
              <Button
                key={item.href}
                color="inherit"
                href={item.href}
                sx={{ mx: 1 }}
              >
                {item.label}
              </Button>
            ))}
            <IconButton
              color="inherit"
              aria-label="language"
              onClick={handleLanguageClick}
              sx={{ ml: 1 }}
            >
              <LanguageIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleLanguageClose}
            >
              <MenuItem
                onClick={() => handleLanguageSelect('en')}
                selected={language === 'en'}
              >
                English
              </MenuItem>
              <MenuItem
                onClick={() => handleLanguageSelect('fr')}
                selected={language === 'fr'}
              >
                Français
              </MenuItem>
            </Menu>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
