import React from 'react';
import { Select, MenuItem, FormControl, SelectChangeEvent } from '@mui/material';
import { useLanguage } from '../../contexts/LanguageContext';
import translationService, { SupportedLanguage } from '../../services/translationService';

interface LanguageOption {
  code: SupportedLanguage;
  name: string;
}

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const supportedLanguages = translationService.getSupportedLanguages();

  const handleChange = (event: SelectChangeEvent<SupportedLanguage>) => {
    setLanguage(event.target.value as SupportedLanguage);
  };

  return (
    <FormControl size="small" sx={{ minWidth: 120 }}>
      <Select
        value={language}
        onChange={handleChange}
        data-testid="language-switcher"
        sx={{
          '& .MuiSelect-select': {
            py: 1,
            display: 'flex',
            alignItems: 'center',
          },
        }}
      >
        {supportedLanguages.map((lang: LanguageOption) => (
          <MenuItem 
            key={lang.code} 
            value={lang.code}
          >
            {lang.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
