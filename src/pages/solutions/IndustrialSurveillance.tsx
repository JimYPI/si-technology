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
  CardMedia,
  Chip,
  Stack
} from '@mui/material';
import {
  Factory,
  CameraAlt,
  Security,
  Analytics,
  Warning,
  CheckCircle,
  Speed,
  VerifiedUser,
  Sensors,
  CloudSync,
  Support,
  Settings
} from '@mui/icons-material';

const surveillanceFeatures = [
  {
    title: 'Surveillance Périmétrique',
    description: 'Protection avancée des zones sensibles',
    icon: <Security sx={{ color: '#2D99AE' }} />,
    details: [
      'Détection d\'intrusion',
      'Clôture virtuelle',
      'Alarmes en temps réel',
      'Suivi automatique'
    ]
  },
  {
    title: 'Analyse Vidéo AI',
    description: 'Détection intelligente des anomalies',
    icon: <Analytics sx={{ color: '#2D99AE' }} />,
    details: [
      'Reconnaissance d\'objets',
      'Détection de mouvements',
      'Analyse comportementale',
      'Alertes automatiques'
    ]
  },
  {
    title: 'Monitoring Environnemental',
    description: 'Surveillance des conditions critiques',
    icon: <Sensors sx={{ color: '#2D99AE' }} />,
    details: [
      'Température',
      'Humidité',
      'Qualité de l\'air',
      'Niveau sonore'
    ]
  },
  {
    title: 'Contrôle des Process',
    description: 'Supervision des opérations industrielles',
    icon: <Settings sx={{ color: '#2D99AE' }} />,
    details: [
      'Suivi de production',
      'Contrôle qualité',
      'Maintenance prédictive',
      'Optimisation des process'
    ]
  }
];

const applications = [
  {
    title: 'Sites Industriels',
    image: '/images/industrial-site.jpg',
    features: [
      'Protection périmétrique',
      'Surveillance des zones dangereuses',
      'Contrôle des accès',
      'Suivi des véhicules'
    ]
  },
  {
    title: 'Entrepôts Logistiques',
    image: '/images/warehouse.jpg',
    features: [
      'Gestion des stocks',
      'Traçabilité des marchandises',
      'Sécurité du personnel',
      'Optimisation des flux'
    ]
  },
  {
    title: 'Sites Énergétiques',
    image: '/images/energy-plant.jpg',
    features: [
      'Surveillance des installations',
      'Détection d\'incidents',
      'Conformité HSE',
      'Maintenance préventive'
    ]
  }
];

const technologies = [
  {
    title: 'Caméras Thermiques',
    description: 'Détection de points chauds et surveillance nocturne',
    icon: <CameraAlt />
  },
  {
    title: 'Capteurs IoT',
    description: 'Réseau de capteurs connectés pour le monitoring',
    icon: <Sensors />
  },
  {
    title: 'Analyse Edge',
    description: 'Traitement des données en temps réel sur site',
    icon: <Speed />
  },
  {
    title: 'Cloud Sécurisé',
    description: 'Stockage et analyse des données dans le cloud',
    icon: <CloudSync />
  }
];

const IndustrialSurveillance: React.FC = () => {
  return (
    <Box className="page-transition">
      {/* Hero Section */}
      <Box sx={{ backgroundColor: '#0C5776', color: '#F8DAD0', py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" component="h1" gutterBottom>
                Surveillance Industrielle
              </Typography>
              <Typography variant="h5" sx={{ mb: 4 }}>
                Solutions de surveillance avancées pour environnements industriels
              </Typography>
              <Button
                variant="contained"
                size="large"
                startIcon={<Factory />}
                sx={{
                  backgroundColor: '#2D99AE',
                  '&:hover': { backgroundColor: '#F8DAD0', color: '#0C5776' }
                }}
              >
                Découvrir Nos Solutions
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/images/industrial-surveillance-hero.jpg"
                alt="Surveillance industrielle"
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
          Fonctionnalités Spécialisées
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {surveillanceFeatures.map((feature) => (
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
                  <Typography variant="body1" paragraph>
                    {feature.description}
                  </Typography>
                  <List>
                    {feature.details.map((detail, idx) => (
                      <ListItem key={idx} sx={{ py: 0.5 }}>
                        <ListItemIcon>
                          <CheckCircle sx={{ color: '#2D99AE' }} />
                        </ListItemIcon>
                        <ListItemText primary={detail} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Applications Section */}
      <Box sx={{ backgroundColor: '#BCFEFE', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" align="center" gutterBottom>
            Applications
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {applications.map((app) => (
              <Grid item xs={12} md={4} key={app.title}>
                <Card sx={{ height: '100%' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={app.image}
                    alt={app.title}
                  />
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      {app.title}
                    </Typography>
                    <List>
                      {app.features.map((feature, idx) => (
                        <ListItem key={idx} sx={{ py: 0.5 }}>
                          <ListItemIcon>
                            <CheckCircle sx={{ color: '#2D99AE' }} />
                          </ListItemIcon>
                          <ListItemText primary={feature} />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Technologies Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" align="center" gutterBottom>
          Technologies Avancées
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {technologies.map((tech) => (
            <Grid item xs={12} sm={6} md={3} key={tech.title}>
              <Paper 
                elevation={0}
                sx={{ 
                  p: 3,
                  height: '100%',
                  backgroundColor: '#F8DAD0',
                  textAlign: 'center'
                }}
              >
                <Box sx={{ mb: 2 }}>
                  {React.cloneElement(tech.icon, { 
                    sx: { fontSize: 50, color: '#2D99AE' } 
                  })}
                </Box>
                <Typography variant="h6" gutterBottom>
                  {tech.title}
                </Typography>
                <Typography variant="body2">
                  {tech.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Benefits Section */}
      <Box sx={{ backgroundColor: '#0C5776', color: '#F8DAD0', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" align="center" gutterBottom>
            Avantages Clés
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} md={4}>
              <Stack spacing={2}>
                <Paper sx={{ p: 2, backgroundColor: 'rgba(188, 254, 254, 0.1)' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Warning sx={{ color: '#BCFEFE', mr: 2 }} />
                    <Typography variant="h6">
                      Prévention des Incidents
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mt: 1, color: '#BCFEFE' }}>
                    Détection précoce des anomalies et risques potentiels
                  </Typography>
                </Paper>
                <Paper sx={{ p: 2, backgroundColor: 'rgba(188, 254, 254, 0.1)' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Speed sx={{ color: '#BCFEFE', mr: 2 }} />
                    <Typography variant="h6">
                      Optimisation Opérationnelle
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mt: 1, color: '#BCFEFE' }}>
                    Amélioration de l'efficacité des processus industriels
                  </Typography>
                </Paper>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Stack spacing={2}>
                <Paper sx={{ p: 2, backgroundColor: 'rgba(188, 254, 254, 0.1)' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <VerifiedUser sx={{ color: '#BCFEFE', mr: 2 }} />
                    <Typography variant="h6">
                      Conformité HSE
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mt: 1, color: '#BCFEFE' }}>
                    Respect des normes de sécurité et environnementales
                  </Typography>
                </Paper>
                <Paper sx={{ p: 2, backgroundColor: 'rgba(188, 254, 254, 0.1)' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Support sx={{ color: '#BCFEFE', mr: 2 }} />
                    <Typography variant="h6">
                      Support Expert
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mt: 1, color: '#BCFEFE' }}>
                    Accompagnement technique et maintenance préventive
                  </Typography>
                </Paper>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                component="img"
                src="/images/industrial-benefits.jpg"
                alt="Avantages de la surveillance industrielle"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
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
          Optimisez la Sécurité de Votre Site Industriel
        </Typography>
        <Typography variant="h6" sx={{ mb: 4, color: '#0C5776' }}>
          Contactez-nous pour une étude personnalisée de vos besoins
        </Typography>
        <Button
          variant="contained"
          size="large"
          startIcon={<Factory />}
          sx={{
            backgroundColor: '#2D99AE',
            '&:hover': { backgroundColor: '#0C5776' },
            px: 4,
            py: 1.5
          }}
        >
          Demander une Consultation
        </Button>
      </Container>
    </Box>
  );
};

export default IndustrialSurveillance;
