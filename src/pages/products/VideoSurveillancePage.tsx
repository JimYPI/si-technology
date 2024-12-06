import React, { ReactElement } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Button,
  Tabs,
  Tab
} from '@mui/material';
import {
  Videocam,
  Storage,
  CloudQueue,
  ShoppingCart
} from '@mui/icons-material';

interface Feature {
  description: string;
}

interface Product {
  name: string;
  icon: ReactElement;
  description: string;
  features: Feature[];
  specifications: Record<string, string>;
}

interface ProductGroups {
  cameras: Product[];
  enregistreurs: Product[];
  logiciels: Product[];
}

const products: ProductGroups = {
  cameras: [
    {
      name: 'Caméra IP 4K',
      icon: <Videocam sx={{ fontSize: 40, color: '#2D99AE' }} />,
      description: 'Caméra IP professionnelle avec résolution 4K et vision nocturne',
      features: [
        { description: 'Résolution 4K Ultra HD' },
        { description: 'Vision nocturne 30m' },
        { description: 'Audio bidirectionnel' },
        { description: 'Détection de mouvement IA' }
      ],
      specifications: {
        'Résolution': '3840 x 2160',
        'Vision nocturne': '30m',
        'Audio': 'Bidirectionnel',
        'Stockage': 'MicroSD jusqu\'à 256GB',
        'Protection': 'IP67'
      }
    },
    {
      name: 'Caméra PTZ',
      icon: <Videocam sx={{ fontSize: 40, color: '#2D99AE' }} />,
      description: 'Caméra motorisée avec zoom optique 30x',
      features: [
        { description: 'Rotation 360°' },
        { description: 'Zoom optique 30x' },
        { description: 'Suivi automatique' },
        { description: 'WDR 120dB' }
      ],
      specifications: {
        'Résolution': '1080p',
        'Zoom': '30x optique',
        'Pan/Tilt': '360°',
        'Protection': 'IP66',
        'Stockage': 'MicroSD jusqu\'à 256GB'
      }
    }
  ],
  enregistreurs: [
    {
      name: 'NVR 32 Canaux',
      icon: <Storage sx={{ fontSize: 40, color: '#2D99AE' }} />,
      description: 'Enregistreur réseau 32 canaux avec analyse vidéo',
      features: [
        { description: 'Support 32 caméras IP' },
        { description: 'Stockage jusqu\'à 80TB' },
        { description: 'Analyse vidéo IA' },
        { description: 'Double flux réseau' }
      ],
      specifications: {
        'Canaux': '32',
        'Stockage': '8 baies SATA',
        'Analyse': 'IA intégrée',
        'Réseau': 'Double port Gigabit',
        'Protection': 'Rack 2U'
      }
    }
  ],
  logiciels: [
    {
      name: 'VMS Professional',
      icon: <CloudQueue sx={{ fontSize: 40, color: '#2D99AE' }} />,
      description: 'Logiciel de gestion vidéo professionnel',
      features: [
        { description: 'Interface multi-écrans' },
        { description: 'Cartographie interactive' },
        { description: 'Analyse vidéo avancée' },
        { description: 'Rapports automatisés' }
      ],
      specifications: {
        'Clients': 'Illimités',
        'Caméras': 'Jusqu\'à 128',
        'Analytics': 'Inclus',
        'Support': '24/7',
        'Protection': 'SSL/TLS'
      }
    }
  ]
};

const VideoSurveillancePage: React.FC = () => {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const renderProducts = (productList: Product[]) => (
    <Grid container spacing={4}>
      {productList.map((product) => (
        <Grid item xs={12} md={6} key={product.name}>
          <Card 
            sx={{ 
              height: '100%',
              backgroundColor: '#F8DAD0',
              '&:hover': {
                transform: 'scale(1.02)',
                transition: 'transform 0.2s ease-in-out'
              }
            }}
          >
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                {product.icon}
                <Typography variant="h5" sx={{ ml: 2 }}>
                  {product.name}
                </Typography>
              </Box>

              <Typography variant="body1" paragraph>
                {product.description}
              </Typography>

              <Typography variant="h6" gutterBottom>
                Caractéristiques:
              </Typography>
              {product.features.map((feature, index) => (
                <Typography key={index} variant="body2" sx={{ mb: 1 }}>
                  • {feature.description}
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

              <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                  variant="contained"
                  startIcon={<ShoppingCart />}
                  sx={{
                    backgroundColor: '#2D99AE',
                    '&:hover': { backgroundColor: '#0C5776' }
                  }}
                >
                  Commander
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );

  const getProductsByTab = (tabIndex: number): Product[] => {
    switch (tabIndex) {
      case 0:
        return products.cameras;
      case 1:
        return products.enregistreurs;
      case 2:
        return products.logiciels;
      default:
        return [];
    }
  };

  return (
    <Box className="page-transition">
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Solutions de Vidéosurveillance
        </Typography>
        
        <Typography variant="h5" align="center" sx={{ mb: 6 }}>
          Des solutions professionnelles pour tous vos besoins de sécurité
        </Typography>

        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
          <Tabs value={tabValue} onChange={handleTabChange} centered>
            <Tab label="Caméras" />
            <Tab label="Enregistreurs" />
            <Tab label="Logiciels" />
          </Tabs>
        </Box>

        {renderProducts(getProductsByTab(tabValue))}
      </Container>
    </Box>
  );
};

export default VideoSurveillancePage;
