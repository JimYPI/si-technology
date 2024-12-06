import React from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Card, 
  CardContent, 
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip
} from '@mui/material';
import { 
  Computer,
  Schedule,
  Security,
  Group,
  CloudQueue,
  Assessment,
  IntegrationInstructions,
  Support
} from '@mui/icons-material';

const softwareSolutions = [
  {
    name: 'SI Access Manager',
    icon: <Security sx={{ fontSize: 40, color: '#2D99AE' }} />,
    description: 'Logiciel de gestion centralisée du contrôle d\'accès',
    features: [
      'Gestion multi-sites',
      'Rapports en temps réel',
      'Intégration biométrique',
      'Gestion des visiteurs'
    ],
    modules: [
      'Module de base',
      'Module visiteurs',
      'Module rapports',
      'Module API'
    ],
    type: 'Contrôle d\'accès'
  },
  {
    name: 'SI Time & Attendance',
    icon: <Schedule sx={{ fontSize: 40, color: '#2D99AE' }} />,
    description: 'Solution complète de gestion du temps et des présences',
    features: [
      'Planification des horaires',
      'Calcul automatique des heures',
      'Gestion des congés',
      'Export paie'
    ],
    modules: [
      'Gestion des temps',
      'Planning',
      'Module RH',
      'Interface paie'
    ],
    type: 'Gestion du temps'
  },
  {
    name: 'SI Video Management',
    icon: <Computer sx={{ fontSize: 40, color: '#2D99AE' }} />,
    description: 'Plateforme de gestion vidéo intelligente',
    features: [
      'Interface multi-écrans',
      'Analyse vidéo AI',
      'Stockage cloud',
      'Mobile App'
    ],
    modules: [
      'Visualisation',
      'Enregistrement',
      'Analytics',
      'Mobile'
    ],
    type: 'Vidéosurveillance'
  },
  {
    name: 'SI Enterprise Suite',
    icon: <CloudQueue sx={{ fontSize: 40, color: '#2D99AE' }} />,
    description: 'Suite logicielle complète pour la sécurité d\'entreprise',
    features: [
      'Dashboard unifié',
      'Gestion centralisée',
      'Reporting avancé',
      'API complète'
    ],
    modules: [
      'Access Control',
      'Video',
      'Time & Attendance',
      'Visitor Management'
    ],
    type: 'Suite Enterprise'
  }
];

const SoftwareSolutionsPage = () => {
  return (
    <Box className="page-transition">
      <Box sx={{ backgroundColor: '#0C5776', color: '#F8DAD0', py: 6, mb: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" gutterBottom>
            Solutions Logicielles
          </Typography>
          <Typography variant="h5">
            Logiciels professionnels de gestion de la sécurité
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* Introduction */}
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <IntegrationInstructions sx={{ fontSize: 60, color: '#2D99AE', mb: 2 }} />
          <Typography variant="h4" gutterBottom>
            Des Solutions Adaptées à Vos Besoins
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: '800px', mx: 'auto', mb: 4 }}>
            Notre gamme de solutions logicielles offre des outils puissants et flexibles 
            pour gérer tous les aspects de votre sécurité d'entreprise.
          </Typography>
        </Box>

        {/* Software Solutions Grid */}
        <Grid container spacing={4}>
          {softwareSolutions.map((solution) => (
            <Grid item xs={12} md={6} key={solution.name}>
              <Card 
                className="hover-scale"
                sx={{ 
                  height: '100%', 
                  backgroundColor: '#F8DAD0',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <CardContent>
                  <Box sx={{ textAlign: 'center', mb: 2 }}>
                    {solution.icon}
                    <Chip 
                      label={solution.type}
                      sx={{ 
                        mt: 1,
                        backgroundColor: '#2D99AE',
                        color: 'white'
                      }}
                    />
                  </Box>

                  <Typography variant="h5" gutterBottom align="center">
                    {solution.name}
                  </Typography>

                  <Typography variant="body1" paragraph>
                    {solution.description}
                  </Typography>

                  <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                    Fonctionnalités principales:
                  </Typography>
                  <List dense>
                    {solution.features.map((feature) => (
                      <ListItem key={feature}>
                        <ListItemIcon>
                          <Assessment sx={{ color: '#2D99AE' }} />
                        </ListItemIcon>
                        <ListItemText primary={feature} />
                      </ListItem>
                    ))}
                  </List>

                  <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                    Modules disponibles:
                  </Typography>
                  <List dense>
                    {solution.modules.map((module) => (
                      <ListItem key={module}>
                        <ListItemIcon>
                          <IntegrationInstructions sx={{ color: '#2D99AE' }} />
                        </ListItemIcon>
                        <ListItemText primary={module} />
                      </ListItem>
                    ))}
                  </List>

                  <Box sx={{ mt: 'auto', pt: 2, display: 'flex', gap: 1 }}>
                    <Button 
                      fullWidth
                      variant="contained"
                      sx={{ 
                        backgroundColor: '#2D99AE',
                        '&:hover': { backgroundColor: '#0C5776' }
                      }}
                    >
                      Démonstration
                    </Button>
                    <Button 
                      fullWidth
                      variant="outlined"
                      sx={{ 
                        color: '#2D99AE',
                        borderColor: '#2D99AE',
                        '&:hover': {
                          borderColor: '#0C5776',
                          color: '#0C5776'
                        }
                      }}
                    >
                      Documentation
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Support Section */}
        <Box sx={{ mt: 8, mb: 4, textAlign: 'center' }}>
          <Support sx={{ fontSize: 60, color: '#2D99AE', mb: 2 }} />
          <Typography variant="h4" gutterBottom>
            Support Technique Dédié
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: '800px', mx: 'auto', mb: 4 }}>
            Notre équipe de support technique est disponible 24/7 pour vous assister 
            dans l'installation, la configuration et l'utilisation de nos solutions logicielles.
          </Typography>
          <Button 
            variant="contained"
            size="large"
            startIcon={<Support />}
            sx={{ 
              mt: 2,
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

export default SoftwareSolutionsPage;
