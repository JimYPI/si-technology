import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Divider,
  Chip
} from '@mui/material';
import {
  AccessTime,
  People,
  Assessment,
  CloudSync,
  CheckCircle,
  Fingerprint,
  CalendarMonth,
  TrendingUp,
  Settings,
  Support
} from '@mui/icons-material';

const features = [
  {
    title: 'Pointage Biométrique',
    description: 'Authentification sécurisée par empreinte digitale ou reconnaissance faciale',
    icon: <Fingerprint sx={{ color: '#2D99AE' }} />
  },
  {
    title: 'Planning Avancé',
    description: 'Gestion intuitive des plannings et des rotations d\'équipes',
    icon: <CalendarMonth sx={{ color: '#2D99AE' }} />
  },
  {
    title: 'Analyse en Temps Réel',
    description: 'Tableaux de bord et rapports détaillés sur la présence',
    icon: <TrendingUp sx={{ color: '#2D99AE' }} />
  },
  {
    title: 'Configuration Flexible',
    description: 'Paramétrage adapté à vos règles d\'entreprise',
    icon: <Settings sx={{ color: '#2D99AE' }} />
  }
];

const benefits = [
  'Réduction des erreurs de saisie',
  'Optimisation de la gestion RH',
  'Conformité légale assurée',
  'Gain de temps administratif',
  'Amélioration de la productivité',
  'Réduction des coûts de gestion'
];

const modules = [
  {
    title: 'Gestion des Temps',
    items: [
      'Pointage multi-terminal',
      'Gestion des horaires variables',
      'Suivi des heures supplémentaires',
      'Calcul automatique des temps de présence'
    ]
  },
  {
    title: 'Planification RH',
    items: [
      'Planning graphique intuitif',
      'Gestion des rotations d\'équipes',
      'Alertes de sous-effectif',
      'Optimisation des ressources'
    ]
  },
  {
    title: 'Administration',
    items: [
      'Gestion des congés et absences',
      'Workflow de validation',
      'Interface de paie',
      'Exports personnalisables'
    ]
  }
];

const TimeManagement: React.FC = () => {
  return (
    <Box className="page-transition">
      {/* Hero Section */}
      <Box sx={{ backgroundColor: '#0C5776', color: '#F8DAD0', py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" component="h1" gutterBottom>
                Gestion du Temps
              </Typography>
              <Typography variant="h5" sx={{ mb: 4 }}>
                Solution complète de gestion des temps et des activités
              </Typography>
              <Button
                variant="contained"
                size="large"
                startIcon={<AccessTime />}
                sx={{
                  backgroundColor: '#2D99AE',
                  '&:hover': { backgroundColor: '#F8DAD0', color: '#0C5776' }
                }}
              >
                Demander une Démonstration
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/images/time-management-hero.jpg"
                alt="Gestion du temps"
                sx={{
                  width: '100%',
                  borderRadius: 2,
                  boxShadow: 3
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" align="center" gutterBottom>
          Fonctionnalités Principales
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {features.map((feature) => (
            <Grid item xs={12} md={6} key={feature.title}>
              <Card 
                sx={{ 
                  height: '100%',
                  backgroundColor: '#F8DAD0'
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    {feature.icon}
                    <Typography variant="h5" sx={{ ml: 2 }}>
                      {feature.title}
                    </Typography>
                  </Box>
                  <Typography variant="body1">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Modules Section */}
      <Box sx={{ backgroundColor: '#BCFEFE', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" align="center" gutterBottom>
            Modules Disponibles
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {modules.map((module) => (
              <Grid item xs={12} md={4} key={module.title}>
                <Paper 
                  elevation={0}
                  sx={{ 
                    p: 3,
                    height: '100%',
                    backgroundColor: 'white'
                  }}
                >
                  <Typography variant="h5" gutterBottom color="#0C5776">
                    {module.title}
                  </Typography>
                  <List>
                    {module.items.map((item, index) => (
                      <ListItem key={index} sx={{ py: 1 }}>
                        <ListItemIcon>
                          <CheckCircle sx={{ color: '#2D99AE' }} />
                        </ListItemIcon>
                        <ListItemText primary={item} />
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Benefits Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" align="center" gutterBottom>
          Avantages
        </Typography>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          {benefits.map((benefit, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Chip
                icon={<CheckCircle />}
                label={benefit}
                sx={{
                  width: '100%',
                  height: 'auto',
                  padding: 1,
                  '& .MuiChip-label': {
                    whiteSpace: 'normal',
                    textAlign: 'left'
                  },
                  backgroundColor: '#F8DAD0',
                  '& .MuiSvgIcon-root': {
                    color: '#2D99AE'
                  }
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Integration Section */}
      <Box sx={{ backgroundColor: '#0C5776', color: '#F8DAD0', py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h3" component="h2" gutterBottom>
                Intégration & Support
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CloudSync sx={{ color: '#F8DAD0' }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Intégration Transparente" 
                    secondary="Compatible avec vos systèmes existants"
                    sx={{ '& .MuiListItemText-secondary': { color: '#BCFEFE' } }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <People sx={{ color: '#F8DAD0' }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Formation Complète" 
                    secondary="Programme de formation adapté à vos besoins"
                    sx={{ '& .MuiListItemText-secondary': { color: '#BCFEFE' } }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Support sx={{ color: '#F8DAD0' }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Support 24/7" 
                    secondary="Une équipe dédiée à votre service"
                    sx={{ '& .MuiListItemText-secondary': { color: '#BCFEFE' } }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Assessment sx={{ color: '#F8DAD0' }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Rapports Personnalisés" 
                    secondary="Création de rapports selon vos besoins"
                    sx={{ '& .MuiListItemText-secondary': { color: '#BCFEFE' } }}
                  />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/images/time-management-integration.jpg"
                alt="Intégration et support"
                sx={{
                  width: '100%',
                  borderRadius: 2,
                  boxShadow: 3
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Call to Action */}
      <Container maxWidth="md" sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Prêt à Optimiser Votre Gestion du Temps?
        </Typography>
        <Typography variant="h6" sx={{ mb: 4, color: '#0C5776' }}>
          Contactez-nous pour une démonstration personnalisée
        </Typography>
        <Button
          variant="contained"
          size="large"
          startIcon={<AccessTime />}
          sx={{
            backgroundColor: '#2D99AE',
            '&:hover': { backgroundColor: '#0C5776' },
            px: 4,
            py: 1.5
          }}
        >
          Demander un Devis
        </Button>
      </Container>
    </Box>
  );
};

export default TimeManagement;
