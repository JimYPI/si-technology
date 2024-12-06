import { Translations } from '../types';

const supportTranslations: Translations = {
  en: {
    support: {
      title: 'Customer Support',
      description: 'Get help with SI Technology products and services',
      afterSales: {
        title: 'After-Sales Support',
        description: 'Get assistance with your purchased products',
        troubleTicket: {
          title: 'Submit Trouble Ticket',
          description: 'Report an issue or request technical support',
          form: {
            productSerial: 'Product Serial Number',
            issueType: 'Issue Type',
            description: 'Issue Description',
            priority: 'Priority',
            submit: 'Submit Ticket',
            success: 'Ticket submitted successfully',
            error: 'Error submitting ticket'
          },
          issueTypes: {
            hardware: 'Hardware Issue',
            software: 'Software Issue',
            network: 'Network Issue',
            other: 'Other'
          },
          priorities: {
            low: 'Low',
            medium: 'Medium',
            high: 'High',
            critical: 'Critical'
          }
        }
      },
      faq: {
        title: 'Frequently Asked Questions',
        description: 'Find answers to common questions',
        categories: {
          general: 'General',
          technical: 'Technical',
          billing: 'Billing',
          security: 'Security'
        }
      },
      contact: {
        title: 'Contact Support',
        description: 'Get in touch with our support team',
        methods: {
          email: 'Email Support',
          phone: 'Phone Support',
          chat: 'Live Chat'
        },
        availability: '24/7 Support Available',
        response: 'Typical response time: 1-2 business days'
      }
    }
  },
  fr: {
    support: {
      title: 'Support Client',
      description: 'Obtenez de l\'aide pour les produits et services SI Technology',
      afterSales: {
        title: 'Support Après-Vente',
        description: 'Obtenez de l\'assistance pour vos produits achetés',
        troubleTicket: {
          title: 'Soumettre un Ticket',
          description: 'Signalez un problème ou demandez un support technique',
          form: {
            productSerial: 'Numéro de Série du Produit',
            issueType: 'Type de Problème',
            description: 'Description du Problème',
            priority: 'Priorité',
            submit: 'Soumettre le Ticket',
            success: 'Ticket soumis avec succès',
            error: 'Erreur lors de la soumission du ticket'
          },
          issueTypes: {
            hardware: 'Problème Matériel',
            software: 'Problème Logiciel',
            network: 'Problème Réseau',
            other: 'Autre'
          },
          priorities: {
            low: 'Basse',
            medium: 'Moyenne',
            high: 'Haute',
            critical: 'Critique'
          }
        }
      },
      faq: {
        title: 'Questions Fréquentes',
        description: 'Trouvez des réponses aux questions courantes',
        categories: {
          general: 'Général',
          technical: 'Technique',
          billing: 'Facturation',
          security: 'Sécurité'
        }
      },
      contact: {
        title: 'Contacter le Support',
        description: 'Contactez notre équipe de support',
        methods: {
          email: 'Support par Email',
          phone: 'Support Téléphonique',
          chat: 'Chat en Direct'
        },
        availability: 'Support Disponible 24/7',
        response: 'Temps de réponse typique : 1-2 jours ouvrables'
      }
    }
  }
};

export default supportTranslations;
