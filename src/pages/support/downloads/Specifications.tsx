import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Paper,
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
  InputAdornment,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import {
  Description,
  Search,
  Download,
  Language,
  CalendarToday,
  Storage,
  ExpandMore,
  Settings,
} from '@mui/icons-material';

interface SpecItem {
  name: string;
  value: string;
}

const Specifications = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const specs = [
    {
      title: 'ZKBioSecurity Technical Specifications',
      description: 'Detailed technical specifications for ZKBioSecurity platform',
      version: '3.2.0',
      date: '2024-01-15',
      size: '3.2 MB',
      languages: ['English', 'French', 'Spanish'],
      categories: {
        system: [
          { name: 'Operating System', value: 'Windows Server 2016/2019' },
          { name: 'Database', value: 'SQL Server 2016+' },
          { name: 'Memory', value: '8GB RAM minimum' },
          { name: 'Storage', value: '100GB free space' },
        ],
        network: [
          { name: 'Protocol', value: 'TCP/IP' },
          { name: 'Ports', value: '80, 443, 8088' },
          { name: 'Bandwidth', value: '100Mbps minimum' },
        ],
        security: [
          { name: 'Encryption', value: 'AES-256' },
          { name: 'Authentication', value: 'OAuth 2.0' },
          { name: 'SSL/TLS', value: 'TLS 1.2+' },
        ],
      },
    },
    {
      title: 'ProFace X Hardware Specifications',
      description: 'Technical specifications for ProFace X biometric terminal',
      version: '2.0.0',
      date: '2024-01-10',
      size: '2.8 MB',
      languages: ['English', 'French', 'German'],
      categories: {
        hardware: [
          { name: 'CPU', value: 'Dual-core 900MHz' },
          { name: 'Memory', value: '2GB RAM' },
          { name: 'Storage', value: '16GB Flash' },
          { name: 'Display', value: '5" Touch LCD' },
        ],
        biometric: [
          { name: 'Face Algorithm', value: 'ZKFace V5.8' },
          { name: 'Recognition Speed', value: '<0.3s' },
          { name: 'FAR', value: '≤0.001%' },
        ],
        physical: [
          { name: 'Dimensions', value: '227×143×26mm' },
          { name: 'Operating Temp', value: '-10°C to 45°C' },
          { name: 'Power Supply', value: '12V DC' },
        ],
      },
    },
  ];

  const filteredSpecs = specs.filter(
    (spec) =>
      spec.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      spec.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper sx={{ p: 4, mb: 4, bgcolor: 'primary.main', color: 'primary.contrastText' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Settings sx={{ fontSize: 40, mr: 2 }} />
          <Typography variant="h3" component="h1">
            Technical Specifications
          </Typography>
        </Box>
        <Typography variant="h6">
          Detailed technical specifications for all products
        </Typography>
      </Paper>

      <Paper sx={{ p: 3, mb: 4 }}>
        <TextField
          fullWidth
          placeholder="Search specifications..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
      </Paper>

      <Grid container spacing={3}>
        {filteredSpecs.map((spec, index) => (
          <Grid item xs={12} key={index}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Description color="primary" sx={{ mr: 1 }} />
                  <Typography variant="h5">
                    {spec.title}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {spec.description}
                </Typography>

                {Object.entries(spec.categories).map(([category, items]) => (
                  <Accordion key={category}>
                    <AccordionSummary
                      expandIcon={<ExpandMore />}
                    >
                      <Typography variant="subtitle1" sx={{ textTransform: 'capitalize' }}>
                        {category} Specifications
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <TableContainer>
                        <Table size="small">
                          <TableHead>
                            <TableRow>
                              <TableCell sx={{ fontWeight: 'bold' }}>Specification</TableCell>
                              <TableCell sx={{ fontWeight: 'bold' }}>Value</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {items.map((item: SpecItem, idx: number) => (
                              <TableRow key={idx}>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.value}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </AccordionDetails>
                  </Accordion>
                ))}

                <Box sx={{ mt: 2 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <CalendarToday sx={{ fontSize: 'small', mr: 1 }} />
                        <Typography variant="body2" color="text.secondary">
                          Updated: {spec.date}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Storage sx={{ fontSize: 'small', mr: 1 }} />
                        <Typography variant="body2" color="text.secondary">
                          Version: {spec.version} | Size: {spec.size}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Language sx={{ fontSize: 'small' }} />
                        {spec.languages.map((lang) => (
                          <Chip
                            key={lang}
                            label={lang}
                            size="small"
                            variant="outlined"
                          />
                        ))}
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  startIcon={<Download />}
                  fullWidth
                >
                  Download Specifications
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Specifications;
