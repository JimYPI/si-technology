import React from 'react';
import {
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Box,
  Tooltip,
} from '@mui/material';
import { Language as LanguageIcon } from '@mui/icons-material';
import { useLanguage } from '../../contexts/LanguageContext';
import translationService, { SupportedLanguage } from '../../services/translationService';
import { motion } from 'framer-motion';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const supportedLanguages = translationService.getSupportedLanguages();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageSelect = (lang: SupportedLanguage) => {
    setLanguage(lang);
    handleClose();
  };

  const getCurrentLanguageName = () => {
    return supportedLanguages.find((lang) => lang.code === language)?.name || 'English';
  };

  return (
    <Box>
      <Tooltip title="Change language">
        <IconButton
          onClick={handleClick}
          size="large"
          sx={{ ml: 2 }}
          aria-controls="language-menu"
          aria-haspopup="true"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <LanguageIcon />
          </motion.div>
        </IconButton>
      </Tooltip>
      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          elevation: 3,
          sx: {
            mt: 1.5,
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {supportedLanguages.map((lang) => (
          <MenuItem
            key={lang.code}
            selected={lang.code === language}
            onClick={() => handleLanguageSelect(lang.code)}
          >
            <Typography>
              {lang.name}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default LanguageSelector;
