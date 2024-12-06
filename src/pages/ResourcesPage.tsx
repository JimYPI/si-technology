import React, { useState } from 'react';
import { 
  Container, 
  Grid, 
  Typography, 
  Card, 
  CardContent, 
  Box, 
  Tabs,
  Tab,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Divider,
  TextField,
  IconButton,
  Chip
} from '@mui/material';
import {
  Description,
  VideoLibrary,
  Article,
  QuestionAnswer,
  Download,
  Search,
  Language,
  CloudDownload,
  PlayArrow,
  BookmarkBorder,
  Share
} from '@mui/icons-material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`resources-tabpanel-${index}`}
      aria-labelledby={`resources-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
};

const resources = {
  documents: [
    {
      title: 'Guide d\'Installation - Contrôle d\'Accès',
      description: 'Manuel détaillé pour l\'installation des systèmes de contrôle d\'accès',
      type: 'PDF',
      size: '2.5 MB',
      language: 'FR',
      category: 'Installation'
    },
    {
      title: 'Catalogue Produits 2024',
      description: 'Catalogue complet de nos solutions de sécurité',
      type: 'PDF',
      size: '5.8 MB',
      language: 'FR',
      category: 'Produits'
    },
    {
      title: 'Guide Utilisateur - Logiciel VMS',
      description: 'Guide d\'utilisation du logiciel de gestion vidéo',
      type: 'PDF',
      size: '3.2 MB',
      language: 'FR',
      category: 'Utilisation'
    },
    {
      title: 'Spécifications Techniques',
      description: 'Détails techniques de tous nos produits',
      type: 'PDF',
      size: '4.1 MB',
      language: 'FR',
      category: 'Technique'
    }
  ],
  videos: [
    {
      title: 'Installation Système Biométrique',
      description: 'Guide vidéo pas à pas pour l\'installation',
      duration: '15:24',
      category: 'Installation'
    },
    {
      title: 'Démonstration VMS Enterprise',
      description: 'Présentation des fonctionnalités du VMS',
      duration: '12:45',
      category: 'Produit'
    },
    {
      title: 'Configuration Contrôle d\'Accès',
      description: 'Tutorial de configuration avancée',
      duration: '08:30',
      category: 'Configuration'
    },
    {
      title: 'Maintenance Préventive',
      description: 'Bonnes pratiques de maintenance',
      duration: '10:15',
      category: 'Maintenance'
    }
  ],
  articles: [
    {
      title: 'L\'IA dans la Vidéosurveillance',
      description: 'Les dernières avancées en matière d\'IA',
      date: '2024-01-15',
      readTime: '5 min'
    },
    {
      title: 'Sécurité Biométrique en 2024',
      description: 'Tendances et innovations',
      date: '2024-01-10',
      readTime: '7 min'
    },
    {
      title: 'Guide: Choisir son Système',
      description: 'Comment choisir le bon système',
      date: '2024-01-05',
      readTime: '10 min'
    }
  ],
  faq: [
    {
      question: 'Comment choisir le bon système de contrôle d\'accès?',
      answer: 'Le choix dépend de plusieurs facteurs: taille de l\'entreprise, niveau de sécurité requis, budget, etc. Nos experts peuvent vous guider dans ce choix.'
    },
    {
      question: 'Quelles sont les options de maintenance?',
      answer: 'Nous proposons différents contrats de maintenance: préventive, corrective, et full service. Contactez-nous pour plus de détails.'
    },
    {
      question: 'Les systèmes sont-ils évolutifs?',
      answer: 'Oui, tous nos systèmes sont modulaires et peuvent évoluer avec vos besoins. Nous assurons une compatibilité ascendante.'
    },
    {
      question: 'Proposez-vous des formations?',
      answer: 'Oui, nous proposons des formations sur site ou en ligne pour tous nos produits et solutions.'
    }
  ]
};

const ResourcesPage = () => {
  const [tabValue, setTabValue] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Box className="page-transition">
      {/* Hero Section */}
      <Box sx={{ backgroundColor: '#0C5776', color: '#F8DAD0', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" gutterBottom>
            Centre de Ressources
          </Typography>
          <Typography variant="h5" gutterBottom>
            Documentation, tutoriels et support technique
          </Typography>
          
          {/* Search Bar */}
          <Box sx={{ mt: 4, maxWidth: 600, mx: 'auto' }}>
            <Paper
              component="form"
              sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
            >
              <TextField
                fullWidth
                placeholder="Rechercher des ressources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                sx={{ 
                  '& .MuiInputBase-input': { 
                    color: '#001C44',
                    pl: 1
                  }
                }}
              />
              <IconButton type="submit" sx={{ p: '10px', color: '#2D99AE' }}>
                <Search />
              </IconButton>
            </Paper>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: 4 }}>
        {/* Tabs Navigation */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs 
            value={tabValue} 
            onChange={handleTabChange}
            variant="fullWidth"
            sx={{ 
              '& .MuiTab-root': { color: '#2D99AE' },
              '& .Mui-selected': { color: '#0C5776' }
            }}
          >
            <Tab icon={<Description />} label="Documents" />
            <Tab icon={<VideoLibrary />} label="Vidéos" />
            <Tab icon={<Article />} label="Articles" />
            <Tab icon={<QuestionAnswer />} label="FAQ" />
          </Tabs>
        </Box>

        {/* Documents Panel */}
        <TabPanel value={tabValue} index={0}>
          <Grid container spacing={3}>
            {resources.documents.map((doc) => (
              <Grid item xs={12} md={6} key={doc.title}>
                <Card 
                  className="hover-scale"
                  sx={{ 
                    backgroundColor: '#F8DAD0',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': { transform: 'scale(1.02)' }
                  }}
                >
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                      <Typography variant="h6">{doc.title}</Typography>
                      <Chip 
                        label={doc.category}
                        size="small"
                        sx={{ backgroundColor: '#2D99AE', color: 'white' }}
                      />
                    </Box>
                    <Typography variant="body2" paragraph>
                      {doc.description}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Box>
                        <Chip 
                          icon={<Language />} 
                          label={doc.language}
                          size="small"
                          sx={{ mr: 1 }}
                        />
                        <Chip 
                          label={`${doc.type} - ${doc.size}`}
                          size="small"
                        />
                      </Box>
                      <Button
                        startIcon={<CloudDownload />}
                        variant="contained"
                        sx={{ 
                          backgroundColor: '#2D99AE',
                          '&:hover': { backgroundColor: '#0C5776' }
                        }}
                      >
                        Télécharger
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </TabPanel>

        {/* Videos Panel */}
        <TabPanel value={tabValue} index={1}>
          <Grid container spacing={3}>
            {resources.videos.map((video) => (
              <Grid item xs={12} md={6} key={video.title}>
                <Card 
                  className="hover-scale"
                  sx={{ 
                    backgroundColor: '#F8DAD0',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': { transform: 'scale(1.02)' }
                  }}
                >
                  <Box 
                    sx={{ 
                      height: 200, 
                      backgroundColor: '#BCFEFE',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <IconButton 
                      sx={{ 
                        backgroundColor: '#2D99AE',
                        '&:hover': { backgroundColor: '#0C5776' }
                      }}
                    >
                      <PlayArrow sx={{ color: 'white', fontSize: 40 }} />
                    </IconButton>
                  </Box>
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                      <Typography variant="h6">{video.title}</Typography>
                      <Chip 
                        label={video.category}
                        size="small"
                        sx={{ backgroundColor: '#2D99AE', color: 'white' }}
                      />
                    </Box>
                    <Typography variant="body2" paragraph>
                      {video.description}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="body2" color="textSecondary">
                        Durée: {video.duration}
                      </Typography>
                      <Box>
                        <IconButton size="small">
                          <BookmarkBorder />
                        </IconButton>
                        <IconButton size="small">
                          <Share />
                        </IconButton>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </TabPanel>

        {/* Articles Panel */}
        <TabPanel value={tabValue} index={2}>
          <Grid container spacing={3}>
            {resources.articles.map((article) => (
              <Grid item xs={12} md={4} key={article.title}>
                <Card 
                  className="hover-scale"
                  sx={{ 
                    backgroundColor: '#F8DAD0',
                    height: '100%',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': { transform: 'scale(1.02)' }
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {article.title}
                    </Typography>
                    <Typography variant="body2" paragraph>
                      {article.description}
                    </Typography>
                    <Box sx={{ mt: 'auto' }}>
                      <Typography variant="caption" display="block" color="textSecondary">
                        Publié le {new Date(article.date).toLocaleDateString('fr-FR')}
                      </Typography>
                      <Typography variant="caption" display="block" color="textSecondary">
                        Temps de lecture: {article.readTime}
                      </Typography>
                    </Box>
                    <Button 
                      variant="outlined"
                      fullWidth
                      sx={{ 
                        mt: 2,
                        color: '#2D99AE',
                        borderColor: '#2D99AE',
                        '&:hover': {
                          borderColor: '#0C5776',
                          color: '#0C5776'
                        }
                      }}
                    >
                      Lire l'article
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </TabPanel>

        {/* FAQ Panel */}
        <TabPanel value={tabValue} index={3}>
          <Box sx={{ maxWidth: 800, mx: 'auto' }}>
            {resources.faq.map((item, index) => (
              <Paper 
                key={index}
                sx={{ 
                  mb: 2, 
                  p: 3,
                  backgroundColor: '#F8DAD0'
                }}
              >
                <Typography variant="h6" gutterBottom color="#0C5776">
                  {item.question}
                </Typography>
                <Typography variant="body1">
                  {item.answer}
                </Typography>
              </Paper>
            ))}
          </Box>
        </TabPanel>

        {/* Call to Action */}
        <Box 
          sx={{ 
            mt: 8, 
            mb: 4, 
            p: 6, 
            textAlign: 'center',
            backgroundColor: '#F8DAD0',
            borderRadius: 2
          }}
        >
          <Typography variant="h4" gutterBottom>
            Besoin d'Aide Supplémentaire?
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Notre équipe de support technique est disponible pour vous aider.
          </Typography>
          <Button 
            variant="contained"
            size="large"
            sx={{ 
              backgroundColor: '#2D99AE',
              '&:hover': { backgroundColor: '#0C5776' }
            }}
          >
            Contacter le Support
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ResourcesPage;
