import React from 'react';
import { 
  Container, 
  Grid, 
  Typography, 
  Card, 
  CardContent, 
  CardMedia, 
  Box, 
  Button,
  useTheme,
  useMediaQuery,
  Paper
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { 
  Business,
  Factory,
  AccessTime,
  ArrowForward
} from '@mui/icons-material';

interface SolutionCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  path: string;
  image: string;
  features: string[];
}

const solutions: SolutionCard[] = [
  {
    title: 'Sécurité d\'Entreprise',
    description: 'Solutions de sécurité complètes pour les grandes entreprises',
    icon: <Business sx={{ fontSize: 40 }} />,
    path: '/solutions/enterprise-security',
    image: '/images/enterprise-security.jpg',
    features: [
      'Contrôle d\'accès unifié',
      'Surveillance intelligente',
      'Gestion des visiteurs',
      'Intégration IoT',
      'Rapports en temps réel'
    ]
  },
  {
    title: 'Surveillance Industrielle',
    description: 'Protection avancée pour les sites industriels',
    icon: <Factory sx={{ fontSize: 40 }} />,
    path: '/solutions/industrial-surveillance',
    image: '/images/industrial-surveillance.jpg',
    features: [
      'Surveillance périmétrique',
      'Détection d\'intrusion',
      'Analyse vidéo AI',
      'Contrôle environnemental',
      'Alertes automatisées'
    ]
  },
  {
    title: 'Gestion du Temps',
    description: 'Solutions complètes de gestion du temps et de présence',
    icon: <AccessTime sx={{ fontSize: 40 }} />,
    path: '/solutions/time-management',
    image: '/images/time-management.jpg',
    features: [
      'Pointage biométrique',
      'Planification RH',
      'Intégration paie',
      'Gestion des congés',
      'Rapports analytiques'
    ]
  }
];

const SolutionsPage: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box className="page-transition">
      {/* Hero Section */}
      <Box 
        sx={{ 
          backgroundColor: '#0C5776', 
          color: '#F8DAD0',
          py: { xs: 6, md: 12 },
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography 
                variant="h1" 
                component="h1" 
                gutterBottom
                sx={{ 
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 'bold'
                }}
              >
                Solutions Intégrées
              </Typography>
              <Typography 
                variant="h5" 
                sx={{ mb: 4, color: '#BCFEFE' }}
              >
                Des solutions de sécurité innovantes adaptées à vos besoins spécifiques
              </Typography>
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: '#2D99AE',
                  '&:hover': { backgroundColor: '#F8DAD0', color: '#0C5776' },
                  px: 4,
                  py: 1.5
                }}
              >
                Découvrir Nos Solutions
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/images/solutions-hero.jpg"
                alt="Solutions de sécurité intégrées"
                sx={{
                  width: '100%',
                  maxWidth: 600,
                  height: 'auto',
                  borderRadius: 2,
                  boxShadow: 3
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Solutions Cards Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {solutions.map((solution, index) => (
            <Grid item xs={12} md={4} key={solution.title}>
              <Card 
                className="hover-scale"
                sx={{ 
                  height: '100%',
                  backgroundColor: '#F8DAD0',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': { transform: 'scale(1.02)' }
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={solution.image}
                  alt={solution.title}
                />
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box sx={{ 
                      backgroundColor: '#2D99AE',
                      borderRadius: '50%',
                      p: 1,
                      mr: 2
                    }}>
                      {solution.icon}
                    </Box>
                    <Typography variant="h5" component="h2">
                      {solution.title}
                    </Typography>
                  </Box>
                  <Typography variant="body1" paragraph>
                    {solution.description}
                  </Typography>
                  <Box sx={{ mb: 3 }}>
                    {solution.features.map((feature, idx) => (
                      <Typography 
                        key={idx} 
                        variant="body2"
                        sx={{ 
                          display: 'flex', 
                          alignItems: 'center',
                          mb: 1 
                        }}
                      >
                        <ArrowForward sx={{ mr: 1, color: '#2D99AE', fontSize: 16 }} />
                        {feature}
                      </Typography>
                    ))}
                  </Box>
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={() => navigate(solution.path)}
                    sx={{
                      backgroundColor: '#2D99AE',
                      '&:hover': { backgroundColor: '#0C5776' }
                    }}
                  >
                    En Savoir Plus
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Benefits Section */}
      <Box sx={{ backgroundColor: '#BCFEFE', py: 8 }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h3" 
            component="h2" 
            align="center" 
            gutterBottom
            sx={{ color: '#0C5776' }}
          >
            Pourquoi Choisir Nos Solutions?
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {[
              {
                title: 'Intégration Transparente',
                description: 'Nos solutions s\'intègrent parfaitement à votre infrastructure existante'
              },
              {
                title: 'Support 24/7',
                description: 'Une équipe d\'experts disponible en permanence pour vous assister'
              },
              {
                title: 'Technologie de Pointe',
                description: 'Les dernières innovations en matière de sécurité et de surveillance'
              },
              {
                title: 'Solutions Personnalisées',
                description: 'Des solutions adaptées à vos besoins spécifiques et à votre secteur d\'activité'
              }
            ].map((benefit, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Paper 
                  elevation={0}
                  sx={{ 
                    p: 3, 
                    height: '100%',
                    backgroundColor: 'rgba(45, 153, 174, 0.1)',
                    borderRadius: 2
                  }}
                >
                  <Typography 
                    variant="h5" 
                    component="h3" 
                    gutterBottom
                    sx={{ color: '#0C5776' }}
                  >
                    {benefit.title}
                  </Typography>
                  <Typography variant="body1">
                    {benefit.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box sx={{ backgroundColor: '#0C5776', color: '#F8DAD0', py: 8 }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Prêt à Sécuriser Votre Entreprise?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4 }}>
            Contactez-nous pour une consultation personnalisée
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: '#2D99AE',
              '&:hover': { backgroundColor: '#F8DAD0', color: '#0C5776' },
              px: 4,
              py: 1.5
            }}
          >
            Demander une Démonstration
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default SolutionsPage;
