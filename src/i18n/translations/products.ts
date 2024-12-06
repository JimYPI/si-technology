import { SupportedLanguage } from '../types';

export type ProductTranslations = {
  [key in SupportedLanguage]: {
    header: {
      title: string;
      subtitle: string;
    };
    categories: {
      accessControl: {
        title: string;
        description: string;
        features: {
          biometric: string;
          cardReader: string;
          timeAttendance: string;
          visitorManagement: string;
        };
      };
      surveillance: {
        title: string;
        description: string;
        features: {
          cameras: string;
          monitoring: string;
          recording: string;
          analytics: string;
        };
      };
      doorLocks: {
        title: string;
        description: string;
        features: {
          smartLocks: string;
          keyless: string;
          remoteAccess: string;
          audit: string;
        };
      };
      software: {
        title: string;
        description: string;
        features: {
          management: string;
          integration: string;
          reporting: string;
          alerts: string;
        };
      };
    };
  };
};

const translations: ProductTranslations = {
  en: {
    header: {
      title: 'Our Products',
      subtitle: 'Comprehensive Security Solutions'
    },
    categories: {
      accessControl: {
        title: 'Access Control Systems',
        description: 'Advanced access control solutions for any facility',
        features: {
          biometric: 'Biometric Authentication',
          cardReader: 'Smart Card Readers',
          timeAttendance: 'Time & Attendance',
          visitorManagement: 'Visitor Management'
        }
      },
      surveillance: {
        title: 'Surveillance Systems',
        description: 'State-of-the-art video surveillance solutions',
        features: {
          cameras: 'HD Security Cameras',
          monitoring: '24/7 Monitoring',
          recording: 'Cloud Recording',
          analytics: 'Video Analytics'
        }
      },
      doorLocks: {
        title: 'Smart Door Locks',
        description: 'Intelligent locking systems for enhanced security',
        features: {
          smartLocks: 'Smart Lock Technology',
          keyless: 'Keyless Entry',
          remoteAccess: 'Remote Access Control',
          audit: 'Access Audit Trail'
        }
      },
      software: {
        title: 'Security Software',
        description: 'Integrated security management software',
        features: {
          management: 'Central Management',
          integration: 'System Integration',
          reporting: 'Advanced Reporting',
          alerts: 'Real-time Alerts'
        }
      }
    }
  },
  es: {
    header: {
      title: 'Nuestros Productos',
      subtitle: 'Soluciones de Seguridad Integrales'
    },
    categories: {
      accessControl: {
        title: 'Sistemas de Control de Acceso',
        description: 'Soluciones avanzadas de control de acceso para cualquier instalación',
        features: {
          biometric: 'Autenticación Biométrica',
          cardReader: 'Lectores de Tarjetas Inteligentes',
          timeAttendance: 'Control de Tiempo y Asistencia',
          visitorManagement: 'Gestión de Visitantes'
        }
      },
      surveillance: {
        title: 'Sistemas de Vigilancia',
        description: 'Soluciones de videovigilancia de última generación',
        features: {
          cameras: 'Cámaras de Seguridad HD',
          monitoring: 'Monitoreo 24/7',
          recording: 'Grabación en la Nube',
          analytics: 'Análisis de Video'
        }
      },
      doorLocks: {
        title: 'Cerraduras Inteligentes',
        description: 'Sistemas de cierre inteligentes para mayor seguridad',
        features: {
          smartLocks: 'Tecnología de Cerradura Inteligente',
          keyless: 'Entrada sin Llave',
          remoteAccess: 'Control de Acceso Remoto',
          audit: 'Registro de Accesos'
        }
      },
      software: {
        title: 'Software de Seguridad',
        description: 'Software integrado de gestión de seguridad',
        features: {
          management: 'Gestión Centralizada',
          integration: 'Integración de Sistemas',
          reporting: 'Informes Avanzados',
          alerts: 'Alertas en Tiempo Real'
        }
      }
    }
  },
  fr: {
    header: {
      title: 'Nos Produits',
      subtitle: 'Solutions de Sécurité Complètes'
    },
    categories: {
      accessControl: {
        title: 'Systèmes de Contrôle d\'Accès',
        description: 'Solutions avancées de contrôle d\'accès pour tout établissement',
        features: {
          biometric: 'Authentification Biométrique',
          cardReader: 'Lecteurs de Cartes Intelligents',
          timeAttendance: 'Contrôle du Temps et de la Présence',
          visitorManagement: 'Gestion des Visiteurs'
        }
      },
      surveillance: {
        title: 'Systèmes de Surveillance',
        description: 'Solutions de vidéosurveillance de pointe',
        features: {
          cameras: 'Caméras de Sécurité HD',
          monitoring: 'Surveillance 24/7',
          recording: 'Enregistrement dans le Cloud',
          analytics: 'Analyse Vidéo'
        }
      },
      doorLocks: {
        title: 'Serrures Intelligentes',
        description: 'Systèmes de verrouillage intelligents pour une sécurité renforcée',
        features: {
          smartLocks: 'Technologie de Serrure Intelligente',
          keyless: 'Entrée sans Clé',
          remoteAccess: 'Contrôle d\'Accès à Distance',
          audit: 'Journal d\'Accès'
        }
      },
      software: {
        title: 'Logiciels de Sécurité',
        description: 'Logiciel intégré de gestion de sécurité',
        features: {
          management: 'Gestion Centralisée',
          integration: 'Intégration de Systèmes',
          reporting: 'Rapports Avancés',
          alerts: 'Alertes en Temps Réel'
        }
      }
    }
  },
  de: {
    header: {
      title: 'Unsere Produkte',
      subtitle: 'Umfassende Sicherheitslösungen'
    },
    categories: {
      accessControl: {
        title: 'Zugangskontrollsysteme',
        description: 'Fortschrittliche Zugangskontrolllösungen für jede Einrichtung',
        features: {
          biometric: 'Biometrische Authentifizierung',
          cardReader: 'Intelligente Kartenleser',
          timeAttendance: 'Zeit- und Anwesenheitskontrolle',
          visitorManagement: 'Besucherverwaltung'
        }
      },
      surveillance: {
        title: 'Überwachungssysteme',
        description: 'State-of-the-art-Überwachungslösungen',
        features: {
          cameras: 'HD-Sicherheitskameras',
          monitoring: '24/7-Überwachung',
          recording: 'Cloud-Aufzeichnung',
          analytics: 'Videoanalyse'
        }
      },
      doorLocks: {
        title: 'Intelligente Türschlösser',
        description: 'Intelligente Schließsysteme für erhöhte Sicherheit',
        features: {
          smartLocks: 'Intelligente Schloss-Technologie',
          keyless: 'Schlüssellose Eingabe',
          remoteAccess: 'Fernzugriff',
          audit: 'Zugriffsprotokoll'
        }
      },
      software: {
        title: 'Sicherheitssoftware',
        description: 'Integrierte Sicherheitsmanagementsoftware',
        features: {
          management: 'Zentrale Verwaltung',
          integration: 'Systemintegration',
          reporting: 'Erweiterte Berichterstattung',
          alerts: 'Echtzeit-Alarme'
        }
      }
    }
  },
  it: {
    header: {
      title: 'I Nostri Prodotti',
      subtitle: 'Soluzioni di Sicurezza Complete'
    },
    categories: {
      accessControl: {
        title: 'Sistemi di Controllo Accessi',
        description: 'Soluzioni avanzate di controllo accessi per qualsiasi struttura',
        features: {
          biometric: 'Autenticazione Biometrica',
          cardReader: 'Lettori di Carte Intelligenti',
          timeAttendance: 'Controllo del Tempo e della Presenza',
          visitorManagement: 'Gestione dei Visitatori'
        }
      },
      surveillance: {
        title: 'Sistemi di Sorveglianza',
        description: 'Soluzioni di videosorveglianza di ultima generazione',
        features: {
          cameras: 'Telecamere di Sicurezza HD',
          monitoring: 'Sorveglianza 24/7',
          recording: 'Registrazione nel Cloud',
          analytics: 'Analisi Video'
        }
      },
      doorLocks: {
        title: 'Serrature Intelligenti',
        description: 'Sistemi di chiusura intelligenti per una maggiore sicurezza',
        features: {
          smartLocks: 'Tecnologia di Serratura Intelligente',
          keyless: 'Ingresso senza Chiave',
          remoteAccess: 'Controllo di Accesso Remoto',
          audit: 'Registro di Accesso'
        }
      },
      software: {
        title: 'Software di Sicurezza',
        description: 'Software integrato di gestione della sicurezza',
        features: {
          management: 'Gestione Centralizzata',
          integration: 'Integrazione di Sistemi',
          reporting: 'Rapporti Avanzati',
          alerts: 'Allarmi in Tempo Reale'
        }
      }
    }
  },
  ja: {
    header: {
      title: '製品一覧',
      subtitle: '総合的なセキュリティソリューション'
    },
    categories: {
      accessControl: {
        title: '入退室管理システム',
        description: '先進的な入退室管理ソリューション',
        features: {
          biometric: '生体認証',
          cardReader: 'スマートカードリーダー',
          timeAttendance: '勤怠管理',
          visitorManagement: '来訪者管理'
        }
      },
      surveillance: {
        title: '監視システム',
        description: '先進的な監視ソリューション',
        features: {
          cameras: 'HDセキュリティカメラ',
          monitoring: '24/7監視',
          recording: 'クラウドレコーディング',
          analytics: 'ビデオ分析'
        }
      },
      doorLocks: {
        title: 'スマートドアロック',
        description: 'スマートロックシステム',
        features: {
          smartLocks: 'スマートロック技術',
          keyless: '鍵なしエントリー',
          remoteAccess: 'リモートアクセス',
          audit: 'アクセスログ'
        }
      },
      software: {
        title: 'セキュリティソフトウェア',
        description: '統合セキュリティ管理ソフトウェア',
        features: {
          management: '中央管理',
          integration: 'システム統合',
          reporting: '高度なレポート',
          alerts: 'リアルタイムアラート'
        }
      }
    }
  },
  ko: {
    header: {
      title: '제품 소개',
      subtitle: '종합 보안 솔루션'
    },
    categories: {
      accessControl: {
        title: '출입 통제 시스템',
        description: '고급 출입 통제 솔루션',
        features: {
          biometric: '생체 인식',
          cardReader: '스마트 카드 리더',
          timeAttendance: '근태 관리',
          visitorManagement: '방문자 관리'
        }
      },
      surveillance: {
        title: '영상 감시 시스템',
        description: '고화질 영상 감시 솔루션',
        features: {
          cameras: 'HD 보안 카메라',
          monitoring: '24/7 감시',
          recording: '클라우드 녹화',
          analytics: '영상 분석'
        }
      },
      doorLocks: {
        title: '스마트 도어락',
        description: '스마트 잠금 시스템',
        features: {
          smartLocks: '스마트 잠금 기술',
          keyless: '키レス 엔트리',
          remoteAccess: '원격 접근',
          audit: '접근 로그'
        }
      },
      software: {
        title: '보안 소프트웨어',
        description: '통합 보안 관리 소프트웨어',
        features: {
          management: '중앙 관리',
          integration: '시스템 통합',
          reporting: '고급 보고서',
          alerts: '실시간 알림'
        }
      }
    }
  },
  zh: {
    header: {
      title: '产品介绍',
      subtitle: '全面的安全解决方案'
    },
    categories: {
      accessControl: {
        title: '门禁控制系统',
        description: '先进的门禁控制解决方案',
        features: {
          biometric: '生物识别',
          cardReader: '智能卡读卡器',
          timeAttendance: '考勤管理',
          visitorManagement: '访客管理'
        }
      },
      surveillance: {
        title: '视频监控系统',
        description: '先进的视频监控解决方案',
        features: {
          cameras: '高清安防摄像机',
          monitoring: '24/7监控',
          recording: '云存储',
          analytics: '视频分析'
        }
      },
      doorLocks: {
        title: '智能门锁',
        description: '智能锁系统',
        features: {
          smartLocks: '智能锁技术',
          keyless: '无钥匙进入',
          remoteAccess: '远程访问',
          audit: '访问日志'
        }
      },
      software: {
        title: '安全软件',
        description: '集成安全管理软件',
        features: {
          management: '中央管理',
          integration: '系统集成',
          reporting: '高级报告',
          alerts: '实时警报'
        }
      }
    }
  }
};

export default translations;
