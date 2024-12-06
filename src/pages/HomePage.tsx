import React, { useState, useRef, useEffect } from 'react';
import {
  Container,
  Typography,
  Grid,
  Box,
  Button,
  useTheme,
  useMediaQuery,
  Paper,
} from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Speed,
  Security,
  CloudDone,
  TrendingUp,
  LocationOn,
  Groups,
  Build,
  School,
  VerifiedUser,
  SupportAgent
} from '@mui/icons-material';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

interface StatType {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
}

interface FeatureType {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const HomePage = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Handle scroll for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants
  const parallaxVariants = {
    initial: { y: 0 },
    animate: { y: scrollY * 0.5 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const stats: StatType[] = [
    {
      icon: <LocationOn />,
      value: 5000,
      suffix: "+",
      label: t('home.stats.globalInstallations')
    },
    {
      icon: <TrendingUp />,
      value: 50,
      suffix: "+",
      label: t('home.stats.countriesServed')
    },
    {
      icon: <Groups />,
      value: 10000,
      suffix: "+",
      label: t('home.stats.satisfiedClients')
    }
  ];

  const features: FeatureType[] = [
    {
      icon: <Speed />,
      title: t('home.features.advancedSecurity.title'),
      description: t('home.features.advancedSecurity.description')
    },
    {
      icon: <Security />,
      title: t('home.features.support.title'),
      description: t('home.features.support.description')
    },
    {
      icon: <CloudDone />,
      title: t('home.features.easyIntegration.title'),
      description: t('home.features.easyIntegration.description')
    }
  ];

  const slides = [
    {
      title: t('home.hero.title'),
      subtitle: t('home.hero.subtitle'),
      description: t('home.hero.description'),
      cta: t('home.hero.cta'),
      image: "/images/slides/security.svg",
      link: "/products/security"
    }
  ];

  return (
    <Box>
      {/* Hero Section with Parallax */}
      <motion.div
        style={{
          position: 'relative', 
          height: '80vh', 
          overflow: 'hidden'
        }}
      >
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: currentSlide === index ? 1 : 0,
              scale: currentSlide === index ? 1 : 1.1
            }}
            transition={{ duration: 0.7 }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {/* Parallax Background Effect */}
            <motion.div
              ref={parallaxRef}
              variants={parallaxVariants}
              initial="initial"
              animate="animate"
              style={{
                position: 'absolute',
                width: '100%',
                height: '120%',
                top: -20,
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: -1,
              }}
            />

            <Container maxWidth="lg">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={currentSlide === index ? "visible" : "hidden"}
              >
                <motion.div variants={itemVariants}>
                  <Typography
                    variant="overline"
                    sx={{ 
                      fontSize: '1.2rem', 
                      letterSpacing: 4, 
                      mb: 2, 
                      display: 'block',
                      color: '#fff',
                    }}
                  >
                    {slide.subtitle}
                  </Typography>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Typography 
                    variant="h1" 
                    sx={{ 
                      fontSize: { xs: '2.5rem', md: '4rem' }, 
                      fontWeight: 700, 
                      mb: 2,
                      color: '#fff',
                    }}
                  >
                    {slide.title}
                  </Typography>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      mb: 4, 
                      maxWidth: '600px',
                      color: '#fff',
                    }}
                  >
                    {slide.description}
                  </Typography>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Button
                    variant="contained"
                    size="large"
                    href={slide.link}
                    sx={{
                      backgroundColor: '#2D99AE',
                      '&:hover': { 
                        backgroundColor: '#001C44',
                        transform: 'scale(1.05)',
                      },
                      px: 4,
                      py: 1.5,
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {slide.cta}
                  </Button>
                </motion.div>
              </motion.div>
            </Container>
          </motion.div>
        ))}
        
        {/* Enhanced Slider Controls */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 32,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: 2,
            zIndex: 1,
          }}
        >
          {slides.map((_, index) => (
            <Box
              key={index}
              component="div"
              onClick={() => setCurrentSlide(index)}
              sx={{
                width: 12,
                height: 12,
                p: 0,
                borderRadius: '50%',
                backgroundColor: currentSlide === index ? '#2D99AE' : '#fff',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.2)',
                  backgroundColor: currentSlide === index ? '#2D99AE' : '#fff',
                },
                '&:active': {
                  transform: 'scale(0.9)',
                }
              }}
            />
          ))}
        </Box>
      </motion.div>

      {/* Statistics Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <Box sx={{ py: 8, backgroundColor: '#f5f5f5' }}>
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              {stats.map((stat, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <motion.div variants={itemVariants}>
                    <Paper
                      sx={{
                        p: 3,
                        textAlign: 'center',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        transition: 'box-shadow 0.3s ease',
                        '&:hover': {
                          boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                        },
                      }}
                    >
                      <Box sx={{ color: '#2D99AE', mb: 2 }}>
                        {stat.icon}
                      </Box>
                      <Typography 
                        variant="h3" 
                        component="div"
                        sx={{ fontWeight: 700, color: '#001C44' }}
                      >
                        {stat.value.toLocaleString()}{stat.suffix}
                      </Typography>
                      <Typography variant="h6" color="text.secondary">
                        {stat.label}
                      </Typography>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </motion.div>

      {/* Support Services Section */}
      <Box component="section" sx={{ py: 8, bgcolor: 'background.default' }}>
        <Container>
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            sx={{ mb: 6 }}
          >
            {t('home.support.title')}
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
            sx={{ mb: 8 }}
          >
            {t('home.support.description')}
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6} lg={3}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                >
                  <Build sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                  <Typography variant="h5" component="h3" gutterBottom>
                    {t('home.support.services.maintenance.title')}
                  </Typography>
                  <Typography color="text.secondary" paragraph>
                    {t('home.support.services.maintenance.description')}
                  </Typography>
                  <Button
                    variant="outlined"
                    component={Link}
                    to="/support/aftersales/maintenance"
                    sx={{ mt: 'auto' }}
                  >
                    {t('home.support.services.maintenance.button')}
                  </Button>
                </Paper>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                >
                  <School sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                  <Typography variant="h5" component="h3" gutterBottom>
                    {t('home.support.services.training.title')}
                  </Typography>
                  <Typography color="text.secondary" paragraph>
                    {t('home.support.services.training.description')}
                  </Typography>
                  <Button
                    variant="outlined"
                    component={Link}
                    to="/support/training/online"
                    sx={{ mt: 'auto' }}
                  >
                    {t('home.support.services.training.button')}
                  </Button>
                </Paper>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                >
                  <VerifiedUser sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                  <Typography variant="h5" component="h3" gutterBottom>
                    {t('home.support.services.antiCounterfeit.title')}
                  </Typography>
                  <Typography color="text.secondary" paragraph>
                    {t('home.support.services.antiCounterfeit.description')}
                  </Typography>
                  <Button
                    variant="outlined"
                    component={Link}
                    to="/support/aftersales/anti-counterfeit"
                    sx={{ mt: 'auto' }}
                  >
                    {t('home.support.services.antiCounterfeit.button')}
                  </Button>
                </Paper>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                >
                  <SupportAgent sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                  <Typography variant="h5" component="h3" gutterBottom>
                    {t('home.support.services.troubleTicket.title')}
                  </Typography>
                  <Typography color="text.secondary" paragraph>
                    {t('home.support.services.troubleTicket.description')}
                  </Typography>
                  <Button
                    variant="outlined"
                    component={Link}
                    to="/support/aftersales/trouble-ticket"
                    sx={{ mt: 'auto' }}
                  >
                    {t('home.support.services.troubleTicket.button')}
                  </Button>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <Box sx={{ py: 8 }}>
          <Container maxWidth="lg">
            <motion.div variants={itemVariants}>
              <Typography 
                variant="h3" 
                component="h2" 
                align="center" 
                gutterBottom
                sx={{ mb: 6 }}
              >
                {t('home.features.title')}
              </Typography>
            </motion.div>
            <Grid container spacing={4}>
              {features.map((feature, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <motion.div variants={itemVariants}>
                    <Paper
                      sx={{
                        p: 4,
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                        },
                      }}
                    >
                      <Box
                        sx={{ 
                          width: 80, 
                          height: 80, 
                          backgroundColor: '#2D99AE',
                          mb: 2,
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        {feature.icon}
                      </Box>
                      <Typography 
                        variant="h5" 
                        component="h3" 
                        gutterBottom
                        sx={{ color: '#001C44' }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography color="text.secondary">
                        {feature.description}
                      </Typography>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </motion.div>

      {/* Call to Action Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Box
          sx={{
            backgroundColor: '#001C44',
            color: '#fff',
            py: 8,
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Container maxWidth="md">
            <Typography variant="h3" gutterBottom>
              {t('home.cta.title')}
            </Typography>
            <Typography variant="h6" paragraph sx={{ mb: 4 }}>
              {t('home.cta.subtitle')}
            </Typography>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="contained"
                size="large"
                href="/contact"
                sx={{
                  backgroundColor: '#2D99AE',
                  '&:hover': { backgroundColor: '#38b5d0' },
                  px: 6,
                  py: 2,
                }}
              >
                {t('home.cta.button')}
              </Button>
            </motion.div>
          </Container>
        </Box>
      </motion.div>
    </Box>
  );
};

export default HomePage;
