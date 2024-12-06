import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';

const products = [
  {
    name: 'Serrure Biométrique Pro',
    description: 'Serrure de sécurité avancée avec lecteur d\'empreintes digitales et reconnaissance faciale',
    features: [
      'Multi-authentification',
      'Déverrouillage rapide',
      'Historique des accès',
      'Mode anti-intrusion'
    ],
    specifications: {
      'Type': 'Biométrique + RFID',
      'Capacité': '3000 utilisateurs',
      'Alimentation': '12V DC',
      'Installation': 'Intérieur/Extérieur'
    }
  },
  {
    name: 'Terminal RFID Enterprise',
    description: 'Solution de contrôle d\'accès RFID pour entreprises',
    features: [
      'Compatible multi-cartes',
      'Interface réseau',
      'Gestion centralisée',
      'Anti-passback'
    ],
    specifications: {
      'Type': 'RFID',
      'Fréquence': '13.56MHz',
      'Portée': '10cm',
      'Connexion': 'TCP/IP, RS485'
    }
  }
  // Add more products...
];

const AccessControlPage = () => {
  return (
    <Box className="page-transition">
      <Box sx={{ backgroundColor: '#0C5776', color: '#F8DAD0', py: 6, mb: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" gutterBottom>
            Contrôle d'Accès
          </Typography>
          <Typography variant="h5">
            Solutions de contrôle d'accès sécurisées et fiables
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item xs={12} md={6} key={product.name}>
              <Card sx={{ height: '100%', backgroundColor: '#F8DAD0' }}>
                <CardMedia
                  component="div"
                  sx={{ height: 240, backgroundColor: '#BCFEFE' }}
                  title={product.name}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {product.name}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {product.description}
                  </Typography>
                  
                  <Typography variant="h6" gutterBottom>
                    Caractéristiques:
                  </Typography>
                  {product.features.map((feature) => (
                    <Typography key={feature} variant="body2" sx={{ mb: 1 }}>
                      • {feature}
                    </Typography>
                  ))}

                  <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                    Spécifications Techniques:
                  </Typography>
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <Typography key={key} variant="body2" sx={{ mb: 1 }}>
                      <strong>{key}:</strong> {value}
                    </Typography>
                  ))}

                  <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
                    <Button 
                      variant="contained"
                      sx={{ 
                        backgroundColor: '#2D99AE',
                        '&:hover': { backgroundColor: '#0C5776' }
                      }}
                    >
                      En savoir plus
                    </Button>
                    <Button 
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
                      Télécharger la fiche
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AccessControlPage;
