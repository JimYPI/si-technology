import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, CardMedia, Button, Chip } from '@mui/material';
import { Fingerprint, Face, TouchApp, Security } from '@mui/icons-material';

const biometricProducts = [
  {
    name: 'Scanner d\'Empreintes ProScan X1',
    icon: <Fingerprint sx={{ fontSize: 40, color: '#2D99AE' }} />,
    description: 'Scanner d\'empreintes digitales haute précision pour contrôle d\'accès professionnel',
    features: [
      'Reconnaissance ultra-rapide < 0.5s',
      'Capacité de 10,000 empreintes',
      'Anti-falsification avancé',
      'Interface USB et TCP/IP'
    ],
    specifications: {
      'Résolution': '500 DPI',
      'Surface de scan': '20mm x 20mm',
      'Taux de rejet': '< 0.01%',
      'Certification': 'ISO/IEC 19794-2'
    },
    category: 'Empreintes'
  },
  {
    name: 'Caméra Faciale AI-Vision',
    icon: <Face sx={{ fontSize: 40, color: '#2D99AE' }} />,
    description: 'Système de reconnaissance faciale avec intelligence artificielle',
    features: [
      'Reconnaissance en temps réel',
      'Détection de vivacité',
      'Base de données jusqu\'à 50,000 visages',
      'Intégration avec contrôle d\'accès'
    ],
    specifications: {
      'Résolution': '2MP',
      'Distance de détection': '0.3-3m',
      'Précision': '99.9%',
      'Temps de reconnaissance': '< 0.2s'
    },
    category: 'Facial'
  },
  {
    name: 'Terminal Multi-Bio',
    icon: <TouchApp sx={{ fontSize: 40, color: '#2D99AE' }} />,
    description: 'Terminal biométrique multimodal pour haute sécurité',
    features: [
      'Empreintes + Facial + RFID',
      'Écran tactile 7"',
      'Connexion WiFi/4G',
      'Batterie de secours'
    ],
    specifications: {
      'Écran': 'LCD 7" tactile',
      'Stockage': '32GB',
      'Interfaces': 'TCP/IP, RS485, Wiegand',
      'Alimentation': '12V DC'
    },
    category: 'Multi-Bio'
  }
];

const BiometricsPage = () => {
  return (
    <Box className="page-transition">
      <Box sx={{ backgroundColor: '#0C5776', color: '#F8DAD0', py: 6, mb: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" gutterBottom>
            Solutions Biométriques
          </Typography>
          <Typography variant="h5">
            Technologies de pointe pour l'identification et l'authentification
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* Introduction Section */}
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Security sx={{ fontSize: 60, color: '#2D99AE', mb: 2 }} />
          <Typography variant="h4" gutterBottom>
            Sécurité Biométrique Avancée
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: '800px', mx: 'auto' }}>
            Nos solutions biométriques offrent une sécurité inégalée grâce à des technologies 
            de pointe en reconnaissance d'empreintes digitales, faciale et multimodale.
          </Typography>
        </Box>

        {/* Products Grid */}
        <Grid container spacing={4}>
          {biometricProducts.map((product) => (
            <Grid item xs={12} md={4} key={product.name}>
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
                    {product.icon}
                    <Chip 
                      label={product.category}
                      sx={{ 
                        mt: 1,
                        backgroundColor: '#2D99AE',
                        color: 'white'
                      }}
                    />
                  </Box>
                  
                  <Typography variant="h5" gutterBottom align="center">
                    {product.name}
                  </Typography>
                  
                  <Typography variant="body1" paragraph>
                    {product.description}
                  </Typography>
                  
                  <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                    Caractéristiques:
                  </Typography>
                  {product.features.map((feature) => (
                    <Typography key={feature} variant="body2" sx={{ mb: 1 }}>
                      • {feature}
                    </Typography>
                  ))}
                  
                  <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                    Spécifications:
                  </Typography>
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <Typography key={key} variant="body2" sx={{ mb: 1 }}>
                      <strong>{key}:</strong> {value}
                    </Typography>
                  ))}
                  
                  <Box sx={{ mt: 'auto', pt: 2, display: 'flex', gap: 1 }}>
                    <Button 
                      fullWidth
                      variant="contained"
                      sx={{ 
                        backgroundColor: '#2D99AE',
                        '&:hover': { backgroundColor: '#0C5776' }
                      }}
                    >
                      Détails
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

        {/* Call to Action */}
        <Box sx={{ textAlign: 'center', mt: 8, mb: 4 }}>
          <Typography variant="h4" gutterBottom>
            Besoin d'une Solution Sur Mesure?
          </Typography>
          <Button 
            variant="contained"
            size="large"
            sx={{ 
              mt: 2,
              backgroundColor: '#2D99AE',
              '&:hover': { backgroundColor: '#0C5776' }
            }}
          >
            Contactez Nos Experts
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default BiometricsPage;
