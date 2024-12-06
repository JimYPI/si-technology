import React from 'react';
import { Container, Grid, Typography, Card, CardContent, CardMedia, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { 
  Security, 
  Fingerprint, 
  Videocam, 
  Computer 
} from '@mui/icons-material';

const productCategories = [
  {
    title: 'Contrôle d\'accès',
    description: 'Solutions de contrôle d\'accès avancées pour entreprises',
    icon: <Security sx={{ fontSize: 60, color: '#2D99AE' }} />,
    path: '/products/access-control',
    features: [
      'Systèmes de contrôle d\'accès',
      'Lecteurs de cartes',
      'Serrures électroniques',
      'Logiciels de gestion'
    ]
  },
  {
    title: 'Biométrie',
    description: 'Technologies biométriques de pointe pour l\'identification',
    icon: <Fingerprint sx={{ fontSize: 60, color: '#2D99AE' }} />,
    path: '/products/biometrics',
    features: [
      'Lecteurs d\'empreintes',
      'Reconnaissance faciale',
      'Scanners d\'iris',
      'Solutions multimodales'
    ]
  },
  {
    title: 'Vidéosurveillance',
    description: 'Systèmes de surveillance vidéo professionnels',
    icon: <Videocam sx={{ fontSize: 60, color: '#2D99AE' }} />,
    path: '/products/video-surveillance',
    features: [
      'Caméras IP',
      'NVR & DVR',
      'Analyse vidéo',
      'Stockage cloud'
    ]
  },
  {
    title: 'Solutions Logicielles',
    description: 'Logiciels de gestion de sécurité intégrés',
    icon: <Computer sx={{ fontSize: 60, color: '#2D99AE' }} />,
    path: '/products/software-solutions',
    features: [
      'Gestion d\'accès',
      'VMS',
      'Time & Attendance',
      'Suite Enterprise'
    ]
  }
];

const ProductsPage = () => {
  const navigate = useNavigate();

  return (
    <Box className="page-transition">
      <Box sx={{ backgroundColor: '#0C5776', color: '#F8DAD0', py: 6, mb: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" gutterBottom>
            Nos Produits
          </Typography>
          <Typography variant="h5">
            Des solutions de sécurité innovantes pour votre entreprise
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {productCategories.map((category) => (
            <Grid item xs={12} md={6} key={category.title}>
              <Card 
                className="hover-scale"
                sx={{ 
                  height: '100%',
                  backgroundColor: '#F8DAD0',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.02)'
                  }
                }}
                onClick={() => navigate(category.path)}
              >
                <CardContent>
                  <Box sx={{ textAlign: 'center', mb: 3 }}>
                    {category.icon}
                  </Box>
                  
                  <Typography variant="h4" component="h2" gutterBottom align="center">
                    {category.title}
                  </Typography>
                  
                  <Typography variant="body1" paragraph align="center">
                    {category.description}
                  </Typography>
                  
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="h6" gutterBottom>
                      Produits clés:
                    </Typography>
                    <ul style={{ paddingLeft: '20px' }}>
                      {category.features.map((feature) => (
                        <li key={feature}>
                          <Typography variant="body1">
                            {feature}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  </Box>
                  
                  <Box sx={{ mt: 3, textAlign: 'center' }}>
                    <Button 
                      variant="contained"
                      size="large"
                      sx={{ 
                        backgroundColor: '#2D99AE',
                        '&:hover': { backgroundColor: '#0C5776' }
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(category.path);
                      }}
                    >
                      Découvrir
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Call to Action */}
        <Box sx={{ textAlign: 'center', mt: 8, mb: 4 }}>
          <Typography variant="h4" gutterBottom>
            Besoin d'aide pour choisir?
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Nos experts sont là pour vous guider vers la solution idéale pour votre entreprise.
          </Typography>
          <Button 
            variant="contained"
            size="large"
            sx={{ 
              backgroundColor: '#2D99AE',
              '&:hover': { backgroundColor: '#0C5776' }
            }}
            onClick={() => navigate('/contact')}
          >
            Contactez-nous
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ProductsPage;
