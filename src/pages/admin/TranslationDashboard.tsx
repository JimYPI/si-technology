import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Paper,
  Grid,
  TextField,
  Button,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Alert,
  Snackbar,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Chip,
  LinearProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  AlertColor,
} from '@mui/material';
import {
  Edit,
  Save,
  Cancel,
  Add,
  Delete,
  Translate,
  Search,
  CloudUpload,
  CloudDownload,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import * as translations from '../../i18n/translations';
import { useAuth } from '../../contexts/AuthContext';
import translationService, { SupportedLanguage } from '../../services/translationService';
import { validateTranslation } from '../../utils/translationValidator';
import { importTranslations, exportTranslations, exportToExcel, importFromExcel } from '../../utils/translationIO';

interface TranslationEntry {
  key: string;
  namespace: string;
  translations: Record<SupportedLanguage, string>;
  lastModified: string;
  status: TranslationStatus;
}

interface NewTranslationEntry extends Omit<TranslationEntry, 'translations'> {
  translations: Partial<Record<SupportedLanguage, string>>;
}

type TranslationMap = Record<SupportedLanguage, Record<string, string>>;

type TranslationStatus = 'complete' | 'incomplete' | 'review';

// Initialize empty translations for all supported languages
const createEmptyTranslations = (): Record<SupportedLanguage, string> => {
  const languages: SupportedLanguage[] = ['en', 'fr', 'es', 'de', 'it', 'ja', 'ko', 'zh'];
  return languages.reduce((acc, lang) => ({ ...acc, [lang]: '' }), {} as Record<SupportedLanguage, string>);
};

// Initialize empty translation map for all supported languages
const createEmptyTranslationMap = (): TranslationMap => {
  const languages: SupportedLanguage[] = ['en', 'fr', 'es', 'de', 'it', 'ja', 'ko', 'zh'];
  const emptyMap: TranslationMap = {
    en: {},
    fr: {},
    es: {},
    de: {},
    it: {},
    ja: {},
    ko: {},
    zh: {},
  };
  return emptyMap;
};

const determineStatus = (translations: Record<SupportedLanguage, string>): TranslationStatus => {
  const hasEnglish = Boolean(translations.en?.trim());
  const hasAllTranslations = Object.values(translations).every(val => Boolean(val?.trim()));
  
  if (hasAllTranslations) return 'complete';
  if (hasEnglish) return 'incomplete';
  return 'review';
};

const flattenTranslations = (
  obj: any,
  prefix = '',
  result: TranslationEntry[] = []
): TranslationEntry[] => {
  if (typeof obj.en === 'object') {
    Object.entries(obj.en).forEach(([key, value]: [string, any]) => {
      flattenTranslations(
        Object.fromEntries(
          Object.entries(obj).map(([lang, content]) => [
            lang,
            (content as any)[key],
          ])
        ),
        prefix ? `${prefix}.${key}` : key,
        result
      );
    });
  } else {
    const translations = createEmptyTranslations();
    Object.entries(obj).forEach(([lang, value]) => {
      if (lang in translations) {
        translations[lang as SupportedLanguage] = String(value || '');
      }
    });

    result.push({
      key: prefix,
      namespace: prefix.split('.')[0],
      translations,
      lastModified: new Date().toISOString(),
      status: determineStatus(translations),
    });
  }
  return result;
};

const TranslationDashboard = () => {
  const { t } = useLanguage();
  const { isAdmin } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedNamespace, setSelectedNamespace] = useState<string>('all');
  const [translationEntries, setTranslationEntries] = useState<TranslationEntry[]>([]);
  const [editingEntry, setEditingEntry] = useState<string | null>(null);
  const [editedValues, setEditedValues] = useState<Record<SupportedLanguage, string>>(createEmptyTranslations());
  const [snackbar, setSnackbar] = useState<{ open: boolean; message: string; severity: AlertColor }>({
    open: false,
    message: '',
    severity: 'success',
  });
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [newEntry, setNewEntry] = useState<Partial<NewTranslationEntry>>({
    namespace: 'common',
    status: 'incomplete',
    translations: createEmptyTranslations(),
  });
  const [selectedLanguages, setSelectedLanguages] = useState<SupportedLanguage[]>(['en', 'fr']);
  const [isTranslating, setIsTranslating] = useState(false);
  const [validationErrors, setValidationErrors] = useState<Record<string, string[]>>({});
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = React.createRef<HTMLInputElement>();

  useEffect(() => {
    const entries: TranslationEntry[] = [];
    Object.entries(translations).forEach(([namespace, content]) => {
      flattenTranslations(content, namespace, entries);
    });
    setTranslationEntries(entries);
  }, []);

  const filteredEntries = translationEntries.filter((entry) => {
    const matchesSearch =
      searchTerm === '' ||
      entry.key.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.translations.en.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.translations.fr.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesNamespace = selectedNamespace === 'all' || entry.namespace === selectedNamespace;

    return matchesSearch && matchesNamespace;
  });

  const handleEditStart = (entry: TranslationEntry) => {
    setEditingEntry(entry.key);
    setEditedValues(entry.translations);
  };

  const handleEditSave = (entry: TranslationEntry) => {
    const updatedEntries = translationEntries.map((e) =>
      e.key === entry.key
        ? {
            ...e,
            translations: editedValues,
            lastModified: new Date().toISOString(),
            status: determineStatus(editedValues),
          }
        : e
    );
    setTranslationEntries(updatedEntries);
    setEditingEntry(null);
    setEditedValues(createEmptyTranslations());
    setSnackbar({
      open: true,
      message: 'Translation updated successfully',
      severity: 'success',
    });
  };

  const handleAdd = () => {
    if (!newEntry.key || !newEntry.translations) {
      setSnackbar({
        open: true,
        message: 'Key and English translation are required',
        severity: 'error',
      });
      return;
    }

    const entry: TranslationEntry = {
      key: newEntry.key,
      namespace: newEntry.namespace || 'common',
      translations: newEntry.translations as Record<SupportedLanguage, string>,
      lastModified: new Date().toISOString(),
      status: determineStatus(newEntry.translations as Record<SupportedLanguage, string>),
    };

    setTranslationEntries((prev) => [...prev, entry]);
    setIsAddDialogOpen(false);
    setNewEntry({ namespace: 'common', status: 'incomplete', translations: createEmptyTranslations() });
    setSnackbar({
      open: true,
      message: 'New translation added successfully',
      severity: 'success',
    });
  };

  const handleDelete = (key: string) => {
    setTranslationEntries((prev) => prev.filter((entry) => entry.key !== key));
    setSnackbar({
      open: true,
      message: 'Translation deleted successfully',
      severity: 'success',
    });
  };

  const handleExport = () => {
    try {
      const exportData: TranslationMap = createEmptyTranslationMap();
      
      // Populate the export data
      filteredEntries.forEach((entry) => {
        Object.entries(entry.translations).forEach(([lang, value]) => {
          exportData[lang as SupportedLanguage][entry.key] = value;
        });
      });

      // Create and download the export file
      const blob = new Blob([JSON.stringify(exportData, null, 2)], {
        type: 'application/json',
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `translations_${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      setSnackbar({
        open: true,
        message: 'Translations exported successfully',
        severity: 'success',
      });
    } catch (error) {
      console.error('Export error:', error);
      setSnackbar({
        open: true,
        message: 'Error exporting translations',
        severity: 'error',
      });
    }
  };

  const handleImport = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      setIsUploading(true);
      const result = await importFromExcel(file);

      if (!result.success) {
        setSnackbar({
          open: true,
          message: `Import failed: ${result.errors?.join(', ')}`,
          severity: 'error',
        });
        return;
      }

      // Update translations
      const newEntries: TranslationEntry[] = [];
      Object.entries(result.translations!).forEach(([namespace, langData]) => {
        Object.entries(langData).forEach(([key, translations]) => {
          newEntries.push({
            key,
            namespace,
            translations: translations as Record<SupportedLanguage, string>,
            lastModified: new Date().toISOString(),
            status: determineStatus(translations as Record<SupportedLanguage, string>),
          });
        });
      });

      setTranslationEntries(newEntries);
      setSnackbar({
        open: true,
        message: 'Translations imported successfully',
        severity: 'success',
      });
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Failed to import translations',
        severity: 'error',
      });
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleAutoTranslate = async (entry: TranslationEntry, targetLang: SupportedLanguage) => {
    try {
      setIsTranslating(true);
      const translated = await translationService.translateText(
        entry.translations['en'],
        targetLang,
        'en'
      );

      setTranslationEntries((prev) =>
        prev.map((e) =>
          e.key === entry.key
            ? {
                ...e,
                translations: {
                  ...e.translations,
                  [targetLang]: translated,
                },
                status: determineStatus({
                  ...e.translations,
                  [targetLang]: translated,
                }),
              }
            : e
        )
      );
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Translation failed. Please try again.',
        severity: 'error',
      });
    } finally {
      setIsTranslating(false);
    }
  };

  const handleNewEntryChange = (lang: SupportedLanguage, value: string) => {
    setNewEntry((prev) => ({
      ...prev,
      translations: {
        ...(prev.translations || createEmptyTranslations()),
        [lang]: value,
      },
    }));
  };

  const handleBulkTranslate = async () => {
    setIsTranslating(true);
    try {
      // Initialize with empty records for all languages
      const languages: SupportedLanguage[] = ['en', 'fr', 'es', 'de', 'it', 'ja', 'ko', 'zh'];
      const updatedTranslations: TranslationMap = languages.reduce((acc, lang) => ({
        ...acc,
        [lang]: {} as Record<string, string>
      }), {} as TranslationMap);

      // Add existing translations
      filteredEntries.forEach((entry) => {
        languages.forEach((lang) => {
          if (!updatedTranslations[lang][entry.key]) {
            updatedTranslations[lang][entry.key] = entry.translations[lang] || '';
          }
        });
      });

      // ... rest of the bulk translate logic ...
      
      setSnackbar({
        open: true,
        message: 'Bulk translation completed successfully',
        severity: 'success',
      });
    } catch (error) {
      console.error('Bulk translation error:', error);
      setSnackbar({
        open: true,
        message: 'Error during bulk translation',
        severity: 'error',
      });
    } finally {
      setIsTranslating(false);
    }
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Translation Management
        </Typography>

        <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                label="Search translations"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: <Search sx={{ color: 'text.secondary', mr: 1 }} />,
                }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth>
                <InputLabel>Namespace</InputLabel>
                <Select
                  value={selectedNamespace}
                  label="Namespace"
                  onChange={(e) => setSelectedNamespace(e.target.value)}
                >
                  <MenuItem value="all">All Namespaces</MenuItem>
                  {Array.from(new Set(translationEntries.map((entry) => entry.namespace))).map(
                    (namespace) => (
                      <MenuItem key={namespace} value={namespace}>
                        {namespace}
                      </MenuItem>
                    )
                  )}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button
                  variant="contained"
                  startIcon={<Add />}
                  onClick={() => setIsAddDialogOpen(true)}
                  sx={{ flex: 1 }}
                >
                  Add Translation
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<CloudDownload />}
                  onClick={handleExport}
                  sx={{ flex: 1 }}
                >
                  Export
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Key</TableCell>
                <TableCell>Namespace</TableCell>
                {selectedLanguages.map((lang) => (
                  <TableCell key={lang}>
                    {translationService.getSupportedLanguages().find((l) => l.code === lang)?.name}
                  </TableCell>
                ))}
                <TableCell>Status</TableCell>
                <TableCell>Last Modified</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredEntries.map((entry) => (
                <TableRow key={entry.key}>
                  <TableCell>{entry.key}</TableCell>
                  <TableCell>{entry.namespace}</TableCell>
                  {selectedLanguages.map((lang) => (
                    <TableCell key={lang}>
                      {editingEntry === entry.key ? (
                        <TextField
                          fullWidth
                          multiline
                          value={editedValues[lang] || ''}
                          onChange={(e) =>
                            setEditedValues((prev) => ({ ...prev, [lang]: e.target.value }))
                          }
                          error={!!validationErrors[entry.key]?.some((error) => error.includes(lang))}
                          helperText={validationErrors[entry.key]?.find((error) => error.includes(lang))}
                        />
                      ) : (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Typography>{entry.translations[lang]}</Typography>
                          {lang !== 'en' && (
                            <IconButton
                              size="small"
                              onClick={() => handleAutoTranslate(entry, lang)}
                              disabled={isTranslating}
                            >
                              <Translate />
                            </IconButton>
                          )}
                        </Box>
                      )}
                    </TableCell>
                  ))}
                  <TableCell>
                    <Chip
                      label={entry.status}
                      color={
                        entry.status === 'complete'
                          ? 'success'
                          : entry.status === 'review'
                          ? 'warning'
                          : 'error'
                      }
                      size="small"
                    />
                  </TableCell>
                  <TableCell>
                    {new Date(entry.lastModified).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    {editingEntry === entry.key ? (
                      <>
                        <IconButton
                          color="primary"
                          onClick={() => handleEditSave(entry)}
                          size="small"
                        >
                          <Save />
                        </IconButton>
                        <IconButton
                          color="error"
                          onClick={() => setEditingEntry(null)}
                          size="small"
                        >
                          <Cancel />
                        </IconButton>
                      </>
                    ) : (
                      <>
                        <IconButton
                          color="primary"
                          onClick={() => handleEditStart(entry)}
                          size="small"
                        >
                          <Edit />
                        </IconButton>
                        <IconButton
                          color="error"
                          onClick={() => handleDelete(entry.key)}
                          size="small"
                        >
                          <Delete />
                        </IconButton>
                      </>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Dialog open={isAddDialogOpen} onClose={() => setIsAddDialogOpen(false)}>
          <DialogTitle>Add New Translation</DialogTitle>
          <DialogContent>
            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Translation Key"
                  value={newEntry.key || ''}
                  onChange={(e) => setNewEntry((prev) => ({ ...prev, key: e.target.value }))}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Namespace</InputLabel>
                  <Select
                    value={newEntry.namespace}
                    label="Namespace"
                    onChange={(e) =>
                      setNewEntry((prev) => ({ ...prev, namespace: e.target.value }))
                    }
                  >
                    {Array.from(new Set(translationEntries.map((entry) => entry.namespace))).map(
                      (namespace) => (
                        <MenuItem key={namespace} value={namespace}>
                          {namespace}
                        </MenuItem>
                      )
                    )}
                  </Select>
                </FormControl>
              </Grid>
              {selectedLanguages.map((lang) => (
                <Grid item xs={12} key={lang}>
                  <TextField
                    fullWidth
                    label={translationService.getSupportedLanguages().find((l) => l.code === lang)?.name}
                    multiline
                    rows={2}
                    value={newEntry.translations?.[lang] || ''}
                    onChange={(e) => handleNewEntryChange(lang, e.target.value)}
                  />
                </Grid>
              ))}
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setIsAddDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleAdd} variant="contained">
              Add Translation
            </Button>
          </DialogActions>
        </Dialog>

        <input
          type="file"
          accept=".csv,.xlsx"
          style={{ display: 'none' }}
          ref={fileInputRef}
          onChange={handleImport}
        />
        <Button
          variant="outlined"
          startIcon={<CloudUpload />}
          onClick={() => fileInputRef.current?.click()}
          disabled={isUploading}
        >
          Import
        </Button>

        <Snackbar
          open={snackbar.open}
          autoHideDuration={4000}
          onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
        >
          <Alert severity={snackbar.severity} onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}>
            {snackbar.message}
          </Alert>
        </Snackbar>
      </motion.div>
    </Container>
  );
};

export default TranslationDashboard;
