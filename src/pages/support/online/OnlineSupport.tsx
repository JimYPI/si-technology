import React, { useState } from 'react';
import {
  Container,
  Typography,
  Paper,
  Box,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Avatar,
  Badge,
  IconButton,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import {
  Chat,
  Support,
  Computer as RemoteDesktop,
  Search,
  Schedule,
  Person,
  PhoneInTalk,
  Email,
  QuestionAnswer,
  AccessTime,
  Language,
  Message,
  Close,
  Send,
} from '@mui/icons-material';

interface ChatMessage {
  id: number;
  sender: 'user' | 'agent';
  message: string;
  timestamp: Date;
}

const OnlineSupport = () => {
  const [openChat, setOpenChat] = useState(false);
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      sender: 'agent',
      message: 'Hello! How can I help you today?',
      timestamp: new Date(),
    },
  ]);

  const supportChannels = [
    {
      title: 'Live Chat',
      icon: <Chat color="primary" />,
      description: 'Chat with our support team in real-time',
      action: 'Start Chat',
      onClick: () => setOpenChat(true),
      available: true,
    },
    {
      title: 'Remote Assistance',
      icon: <RemoteDesktop color="primary" />,
      description: 'Get help through screen sharing',
      action: 'Request Session',
      onClick: () => console.log('Remote assistance requested'),
      available: true,
    },
    {
      title: 'Phone Support',
      icon: <PhoneInTalk color="primary" />,
      description: '24/7 technical phone support',
      action: 'Call Now',
      onClick: () => console.log('Phone support requested'),
      available: true,
    },
    {
      title: 'Email Support',
      icon: <Email color="primary" />,
      description: 'Send us your questions via email',
      action: 'Send Email',
      onClick: () => console.log('Email support requested'),
      available: true,
    },
  ];

  const recentTickets = [
    {
      id: 'TK-2024-001',
      subject: 'ZKBioSecurity Integration Issue',
      status: 'Open',
      lastUpdate: '2 hours ago',
    },
    {
      id: 'TK-2024-002',
      subject: 'Access Control Configuration',
      status: 'In Progress',
      lastUpdate: '1 day ago',
    },
    {
      id: 'TK-2024-003',
      subject: 'License Activation Help',
      status: 'Resolved',
      lastUpdate: '3 days ago',
    },
  ];

  const supportStats = [
    {
      icon: <AccessTime />,
      value: '24/7',
      label: 'Support Hours',
    },
    {
      icon: <Language />,
      value: '15+',
      label: 'Languages',
    },
    {
      icon: <Schedule />,
      value: '< 1h',
      label: 'Avg Response',
    },
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage: ChatMessage = {
        id: chatMessages.length + 1,
        sender: 'user',
        message: message.trim(),
        timestamp: new Date(),
      };
      setChatMessages([...chatMessages, newMessage]);
      setMessage('');

      // Simulate agent response
      setTimeout(() => {
        const agentResponse: ChatMessage = {
          id: chatMessages.length + 2,
          sender: 'agent',
          message: 'Thank you for your message. An agent will assist you shortly.',
          timestamp: new Date(),
        };
        setChatMessages(prev => [...prev, agentResponse]);
      }, 1000);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper sx={{ p: 4, mb: 4, bgcolor: 'primary.main', color: 'primary.contrastText' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Support sx={{ fontSize: 40, mr: 2 }} />
          <Typography variant="h3" component="h1">
            Online Support
          </Typography>
        </Box>
        <Typography variant="h6">
          Get instant help from our expert support team
        </Typography>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          {supportStats.map((stat) => (
            <Grid item xs={12} md={4} key={stat.label}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {React.cloneElement(stat.icon, { sx: { fontSize: 30, mr: 1 } })}
                <Box>
                  <Typography variant="h4">{stat.value}</Typography>
                  <Typography variant="body2">{stat.label}</Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Paper>

      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Typography variant="h5" gutterBottom>
            Support Channels
          </Typography>
          <Grid container spacing={3}>
            {supportChannels.map((channel) => (
              <Grid item xs={12} sm={6} key={channel.title}>
                <Card>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      {channel.icon}
                      <Typography variant="h6" sx={{ ml: 1 }}>
                        {channel.title}
                      </Typography>
                    </Box>
                    <Typography color="text.secondary">
                      {channel.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      fullWidth
                      variant="contained"
                      startIcon={channel.icon}
                      onClick={channel.onClick}
                    >
                      {channel.action}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Paper sx={{ p: 3, mt: 4 }}>
            <Typography variant="h5" gutterBottom>
              Recent Support Tickets
            </Typography>
            <List>
              {recentTickets.map((ticket, index) => (
                <React.Fragment key={ticket.id}>
                  <ListItem>
                    <ListItemIcon>
                      <QuestionAnswer color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary={ticket.subject}
                      secondary={
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Typography variant="caption">
                            {ticket.id} • {ticket.lastUpdate}
                          </Typography>
                          <Chip
                            label={ticket.status}
                            size="small"
                            color={
                              ticket.status === 'Open' ? 'error' :
                              ticket.status === 'In Progress' ? 'warning' :
                              'success'
                            }
                          />
                        </Box>
                      }
                    />
                    <Button variant="outlined" size="small">
                      View Details
                    </Button>
                  </ListItem>
                  {index < recentTickets.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Quick Search
            </Typography>
            <TextField
              fullWidth
              placeholder="Search knowledge base..."
              InputProps={{
                startAdornment: <Search sx={{ color: 'text.secondary', mr: 1 }} />,
              }}
            />
          </Paper>

          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Support Resources
            </Typography>
            <List>
              <ListItem
                component="a"
                href="/support/knowledge-base"
                sx={{ 
                  textDecoration: 'none',
                  '&:hover': {
                    backgroundColor: 'action.hover',
                  }
                }}
              >
                <ListItemIcon>
                  <QuestionAnswer />
                </ListItemIcon>
                <ListItemText primary="Knowledge Base" secondary="Browse articles and tutorials" />
              </ListItem>
              <ListItem
                component="a"
                href="/support/downloads"
                sx={{ 
                  textDecoration: 'none',
                  '&:hover': {
                    backgroundColor: 'action.hover',
                  }
                }}
              >
                <ListItemIcon>
                  <RemoteDesktop />
                </ListItemIcon>
                <ListItemText primary="Remote Support Tools" secondary="Download assistance software" />
              </ListItem>
              <ListItem
                component="a"
                href="/support/training"
                sx={{ 
                  textDecoration: 'none',
                  '&:hover': {
                    backgroundColor: 'action.hover',
                  }
                }}
              >
                <ListItemIcon>
                  <Person />
                </ListItemIcon>
                <ListItemText primary="Training Resources" secondary="Learn about our products" />
              </ListItem>
              <ListItem
                component="a"
                href="/support/chat"
                sx={{ 
                  textDecoration: 'none',
                  '&:hover': {
                    backgroundColor: 'action.hover',
                  }
                }}
              >
                <ListItemIcon>
                  <Chat />
                </ListItemIcon>
                <ListItemText primary="Live Chat Support" secondary="Connect with our support team instantly" />
              </ListItem>
              <ListItem
                component="a"
                href="/support/remote-assistance"
                sx={{ 
                  textDecoration: 'none',
                  '&:hover': {
                    backgroundColor: 'action.hover',
                  }
                }}
              >
                <ListItemIcon>
                  <RemoteDesktop />
                </ListItemIcon>
                <ListItemText primary="Remote Assistance" secondary="Get help with screen sharing" />
              </ListItem>
              <ListItem
                component="a"
                href="/support/schedule-call"
                sx={{ 
                  textDecoration: 'none',
                  '&:hover': {
                    backgroundColor: 'action.hover',
                  }
                }}
              >
                <ListItemIcon>
                  <Schedule />
                </ListItemIcon>
                <ListItemText primary="Schedule a Call" secondary="Book a time with our support team" />
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>

      <Dialog
        open={openChat}
        onClose={() => setOpenChat(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant="dot"
                color="success"
              >
                <Avatar>
                  <Support />
                </Avatar>
              </Badge>
              <Box sx={{ ml: 2 }}>
                <Typography variant="h6">Support Chat</Typography>
                <Typography variant="caption" color="text.secondary">
                  Online • Typically replies in minutes
                </Typography>
              </Box>
            </Box>
            <IconButton onClick={() => setOpenChat(false)}>
              <Close />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent dividers>
          <Box sx={{ height: '400px', display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ flexGrow: 1, overflow: 'auto', p: 2 }}>
              {chatMessages.map((msg) => (
                <Box
                  key={msg.id}
                  sx={{
                    display: 'flex',
                    justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                    mb: 2,
                  }}
                >
                  {msg.sender === 'agent' && (
                    <Avatar sx={{ mr: 1 }}>
                      <Support />
                    </Avatar>
                  )}
                  <Paper
                    sx={{
                      p: 2,
                      bgcolor: msg.sender === 'user' ? 'primary.main' : 'grey.100',
                      color: msg.sender === 'user' ? 'primary.contrastText' : 'text.primary',
                      maxWidth: '70%',
                    }}
                  >
                    <Typography variant="body1">{msg.message}</Typography>
                    <Typography variant="caption" color={msg.sender === 'user' ? 'inherit' : 'text.secondary'}>
                      {msg.timestamp.toLocaleTimeString()}
                    </Typography>
                  </Paper>
                  {msg.sender === 'user' && (
                    <Avatar sx={{ ml: 1 }}>
                      <Person />
                    </Avatar>
                  )}
                </Box>
              ))}
            </Box>
          </Box>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <TextField
            fullWidth
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSendMessage();
              }
            }}
            InputProps={{
              endAdornment: (
                <IconButton color="primary" onClick={handleSendMessage}>
                  <Send />
                </IconButton>
              ),
            }}
          />
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default OnlineSupport;
