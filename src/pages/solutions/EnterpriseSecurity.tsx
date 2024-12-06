import React, { ReactElement } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper
} from '@mui/material';
import {
  Security,
  Shield,
  VerifiedUser,
  Lock,
  Settings,
  Business,
  Support,
  Speed,
  CloudSync,
  Analytics,
  Warning,
  CameraAlt
} from '@mui/icons-material';

interface Feature {
  title: string;
  description: string;
  icon: ReactElement;
  details: string[];
}

interface Benefit {
  title: string;
  description: string;
  icon: typeof Security | typeof Shield | typeof VerifiedUser | typeof Settings;
}

interface Industry {
  name: string;
  description: string;
  icon: ReactElement;
  benefits: string[];
}

const securityFeatures: Feature[] = [
  {
    title: 'Contrôle d\'Accès Unifié',
    description: 'Gestion centralisée des accès pour tous vos sites',
    icon: <Lock sx={{ color: '#2D99AE' }} />,
    details: [
      'Authentification multi-facteurs',
      'Gestion des visiteurs',
      'Contrôle d\'accès mobile',
      'Intégration SSO'
    ]
  },
  {
    title: 'Protection Périmétrique',
    description: 'Sécurisation complète de votre périmètre',
    icon: <Shield sx={{ color: '#2D99AE' }} />,
    details: [
      'Détection d\'intrusion',
      'Surveillance vidéo',
      'Contrôle des accès',
      'Alarmes intelligentes'
    ]
  },
  {
    title: 'Cybersécurité Avancée',
    description: 'Protection contre les menaces numériques',
    icon: <Security sx={{ color: '#2D99AE' }} />,
    details: [
      'Pare-feu nouvelle génération',
      'Protection DDoS',
      'Détection des menaces',
      'Réponse aux incidents'
    ]
  },
  {
    title: 'Surveillance Intelligente',
    description: 'Analyse vidéo et détection automatisée',
    icon: <Analytics sx={{ color: '#2D99AE' }} />,
    details: [
      'Reconnaissance faciale',
      'Détection d\'objets',
      'Analyse comportementale',
      'Alertes en temps réel'
    ]
  }
];

const benefits: Benefit[] = [
  {
    title: 'Protection Continue',
    description: 'Surveillance et protection 24/7 de vos installations',
    icon: Security
  },
  {
    title: 'Conformité Garantie',
    description: 'Respect des normes et réglementations en vigueur',
    icon: VerifiedUser
  },
  {
    title: 'Intégration Complète',
    description: 'Solutions compatibles avec vos systèmes existants',
    icon: Settings
  }
];

const industries: Industry[] = [
  {
    name: 'Finance',
    description: 'Protection des établissements financiers',
    icon: <Business sx={{ fontSize: 40 }} />,
    benefits: [
      'Protection des données sensibles',
      'Contrôle d\'accès strict',
      'Surveillance 24/7',
      'Conformité réglementaire'
    ]
  },
  {
    name: 'Industrie',
    description: 'Sécurité des sites industriels',
    icon: <Warning sx={{ fontSize: 40 }} />,
    benefits: [
      'Protection périmétrique',
      'Contrôle des accès',
      'Surveillance des zones sensibles',
      'Gestion des risques'
    ]
  },
  {
    name: 'Commerce',
    description: 'Solutions pour points de vente',
    icon: <Speed sx={{ fontSize: 40 }} />,
    benefits: [
      'Prévention des pertes',
      'Analyse des flux',
      'Protection des biens',
      'Sécurité des clients'
    ]
  }
];

const EnterpriseSecurity: React.FC = () => {
  return (
    <Box className="page-transition">
      {/* Hero Section */}
      <Box sx={{ backgroundColor: '#0C5776', color: '#F8DAD0', py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" component="h1" gutterBottom>
                Sécurité Entreprise
              </Typography>
              <Typography variant="h5" sx={{ mb: 4 }}>
                Solutions de sécurité intégrées pour entreprises
              </Typography>
              <Button
                variant="contained"
                size="large"
                startIcon={<Security />}
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
                src="/images/enterprise-security.jpg"
                alt="Sécurité Entreprise"
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
          Fonctionnalités Clés
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {securityFeatures.map((feature) => (
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
                          <VerifiedUser sx={{ color: '#2D99AE' }} />
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

      {/* Industries Section */}
      <Box sx={{ backgroundColor: '#BCFEFE', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" align="center" gutterBottom>
            Solutions par Secteur
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {industries.map((industry) => (
              <Grid item xs={12} md={4} key={industry.name}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Box sx={{ textAlign: 'center', mb: 2 }}>
                      {industry.icon}
                    </Box>
                    <Typography variant="h5" gutterBottom align="center">
                      {industry.name}
                    </Typography>
                    <Typography variant="body1" paragraph align="center">
                      {industry.description}
                    </Typography>
                    <List>
                      {industry.benefits.map((benefit, idx) => (
                        <ListItem key={idx} sx={{ py: 0.5 }}>
                          <ListItemIcon>
                            <VerifiedUser sx={{ color: '#2D99AE' }} />
                          </ListItemIcon>
                          <ListItemText primary={benefit} />
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

      {/* Benefits Section */}
      <Box sx={{ backgroundColor: '#0C5776', color: '#F8DAD0', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" align="center" gutterBottom>
            Avantages
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {benefits.map((benefit) => (
              <Grid item xs={12} md={4} key={benefit.title}>
                <Paper sx={{ p: 3, backgroundColor: 'rgba(188, 254, 254, 0.1)' }}>
                  <Box sx={{ textAlign: 'center', mb: 2 }}>
                    {React.createElement(benefit.icon, { 
                      sx: { fontSize: 50, color: '#BCFEFE' } 
                    })}
                  </Box>
                  <Typography variant="h5" gutterBottom align="center">
                    {benefit.title}
                  </Typography>
                  <Typography variant="body1" align="center" sx={{ color: '#BCFEFE' }}>
                    {benefit.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Integration Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" gutterBottom>
              Intégration & Support
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <Support sx={{ color: '#2D99AE' }} />
                </ListItemIcon>
                <ListItemText 
                  primary="Support 24/7" 
                  secondary="Une équipe d'experts à votre disposition"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CloudSync sx={{ color: '#2D99AE' }} />
                </ListItemIcon>
                <ListItemText 
                  primary="Intégration Transparente" 
                  secondary="Compatible avec vos systèmes existants"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Settings sx={{ color: '#2D99AE' }} />
                </ListItemIcon>
                <ListItemText 
                  primary="API Ouvertes" 
                  secondary="Personnalisation et extensions faciles"
                />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/images/integration-support.jpg"
              alt="Intégration et Support"
              sx={{
                width: '100%',
                borderRadius: 2,
                boxShadow: 3
              }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* Call to Action */}
      <Box sx={{ backgroundColor: '#F8DAD0', py: 8 }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            Sécurisez Votre Entreprise
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, color: '#0C5776' }}>
            Contactez-nous pour une évaluation personnalisée
          </Typography>
          <Button
            variant="contained"
            size="large"
            startIcon={<Security />}
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
    </Box>
  );
};

export default EnterpriseSecurity;
