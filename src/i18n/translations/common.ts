import { SupportedLanguage } from '../types';

export type CommonTranslations = {
  [key in SupportedLanguage]: {
    navigation: {
      home: string;
      products: string;
      solutions: string;
      support: string;
      contact: string;
      login: string;
      register: string;
    };
    buttons: {
      learnMore: string;
      getStarted: string;
      viewDetails: string;
      contactUs: string;
      submit: string;
      cancel: string;
      back: string;
      next: string;
    };
    footer: {
      company: string;
      aboutUs: string;
      careers: string;
      news: string;
      legal: string;
      privacy: string;
      terms: string;
      contact: string;
      followUs: string;
      newsletter: string;
      subscribeText: string;
      emailPlaceholder: string;
      subscribe: string;
    };
    brand: string;
    nav: {
      products: string;
      solutions: string;
      resources: string;
      support: string;
      about: string;
      contact: string;
    };
  };
};

const translations: CommonTranslations = {
  en: {
    navigation: {
      home: 'Home',
      products: 'Products',
      solutions: 'Solutions',
      support: 'Support',
      contact: 'Contact',
      login: 'Login',
      register: 'Register'
    },
    buttons: {
      learnMore: 'Learn More',
      getStarted: 'Get Started',
      viewDetails: 'View Details',
      contactUs: 'Contact Us',
      submit: 'Submit',
      cancel: 'Cancel',
      back: 'Back',
      next: 'Next'
    },
    footer: {
      company: 'Company',
      aboutUs: 'About Us',
      careers: 'Careers',
      news: 'News',
      legal: 'Legal',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      contact: 'Contact',
      followUs: 'Follow Us',
      newsletter: 'Newsletter',
      subscribeText: 'Subscribe to our newsletter',
      emailPlaceholder: 'Enter your email',
      subscribe: 'Subscribe'
    },
    brand: 'SI TECHNOLOGY',
    nav: {
      products: 'Products',
      solutions: 'Solutions',
      resources: 'Resources',
      support: 'Support',
      about: 'About',
      contact: 'Contact'
    }
  },
  fr: {
    navigation: {
      home: 'Accueil',
      products: 'Produits',
      solutions: 'Solutions',
      support: 'Support',
      contact: 'Contact',
      login: 'Connexion',
      register: 'Inscription'
    },
    buttons: {
      learnMore: 'En Savoir Plus',
      getStarted: 'Commencer',
      viewDetails: 'Voir les Détails',
      contactUs: 'Contactez-nous',
      submit: 'Soumettre',
      cancel: 'Annuler',
      back: 'Retour',
      next: 'Suivant'
    },
    footer: {
      company: 'Entreprise',
      aboutUs: 'À Propos',
      careers: 'Carrières',
      news: 'Actualités',
      legal: 'Mentions Légales',
      privacy: 'Politique de Confidentialité',
      terms: 'Conditions d\'Utilisation',
      contact: 'Contact',
      followUs: 'Suivez-nous',
      newsletter: 'Newsletter',
      subscribeText: 'Abonnez-vous à notre newsletter',
      emailPlaceholder: 'Entrez votre email',
      subscribe: 'S\'abonner'
    },
    brand: 'SI TECHNOLOGY',
    nav: {
      products: 'Produits',
      solutions: 'Solutions',
      resources: 'Ressources',
      support: 'Support',
      about: 'À propos',
      contact: 'Contact'
    }
  },
  es: {
    navigation: {
      home: 'Inicio',
      products: 'Productos',
      solutions: 'Soluciones',
      support: 'Soporte',
      contact: 'Contacto',
      login: 'Iniciar Sesión',
      register: 'Registrarse'
    },
    buttons: {
      learnMore: 'Más Información',
      getStarted: 'Comenzar',
      viewDetails: 'Ver Detalles',
      contactUs: 'Contáctenos',
      submit: 'Enviar',
      cancel: 'Cancelar',
      back: 'Atrás',
      next: 'Siguiente'
    },
    footer: {
      company: 'Empresa',
      aboutUs: 'Sobre Nosotros',
      careers: 'Carreras',
      news: 'Noticias',
      legal: 'Legal',
      privacy: 'Política de Privacidad',
      terms: 'Términos de Servicio',
      contact: 'Contacto',
      followUs: 'Síguenos',
      newsletter: 'Boletín',
      subscribeText: 'Suscríbete a nuestro boletín',
      emailPlaceholder: 'Ingresa tu correo',
      subscribe: 'Suscribirse'
    },
    brand: '',
    nav: {
      products: '',
      solutions: '',
      resources: '',
      support: '',
      about: '',
      contact: ''
    }
  },
  de: {
    navigation: {
      home: 'Startseite',
      products: 'Produkte',
      solutions: 'Lösungen',
      support: 'Support',
      contact: 'Kontakt',
      login: 'Anmelden',
      register: 'Registrieren'
    },
    buttons: {
      learnMore: 'Mehr Erfahren',
      getStarted: 'Loslegen',
      viewDetails: 'Details Anzeigen',
      contactUs: 'Kontaktieren Sie Uns',
      submit: 'Absenden',
      cancel: 'Abbrechen',
      back: 'Zurück',
      next: 'Weiter'
    },
    footer: {
      company: 'Unternehmen',
      aboutUs: 'Über Uns',
      careers: 'Karriere',
      news: 'Neuigkeiten',
      legal: 'Rechtliches',
      privacy: 'Datenschutz',
      terms: 'Nutzungsbedingungen',
      contact: 'Kontakt',
      followUs: 'Folgen Sie Uns',
      newsletter: 'Newsletter',
      subscribeText: 'Abonnieren Sie unseren Newsletter',
      emailPlaceholder: 'Geben Sie Ihre E-Mail-Adresse ein',
      subscribe: 'Abonnieren'
    },
    brand: '',
    nav: {
      products: '',
      solutions: '',
      resources: '',
      support: '',
      about: '',
      contact: ''
    }
  },
  it: {
    navigation: {
      home: 'Home',
      products: 'Prodotti',
      solutions: 'Soluzioni',
      support: 'Supporto',
      contact: 'Contatti',
      login: 'Accedi',
      register: 'Registrati'
    },
    buttons: {
      learnMore: 'Scopri di Più',
      getStarted: 'Inizia',
      viewDetails: 'Vedi Dettagli',
      contactUs: 'Contattaci',
      submit: 'Invia',
      cancel: 'Annulla',
      back: 'Indietro',
      next: 'Avanti'
    },
    footer: {
      company: 'Azienda',
      aboutUs: 'Chi Siamo',
      careers: 'Lavora con Noi',
      news: 'Notizie',
      legal: 'Note Legali',
      privacy: 'Privacy',
      terms: 'Termini di Servizio',
      contact: 'Contatti',
      followUs: 'Seguici',
      newsletter: 'Newsletter',
      subscribeText: 'Iscriviti alla nostra newsletter',
      emailPlaceholder: 'Inserisci la tua email',
      subscribe: 'Iscriviti'
    },
    brand: '',
    nav: {
      products: '',
      solutions: '',
      resources: '',
      support: '',
      about: '',
      contact: ''
    }
  },
  ja: {
    navigation: {
      home: 'ホーム',
      products: '製品',
      solutions: 'ソリューション',
      support: 'サポート',
      contact: 'お問い合わせ',
      login: 'ログイン',
      register: '登録'
    },
    buttons: {
      learnMore: '詳細',
      getStarted: '始める',
      viewDetails: '詳細を見る',
      contactUs: 'お問い合わせ',
      submit: '送信',
      cancel: 'キャンセル',
      back: '戻る',
      next: '次へ'
    },
    footer: {
      company: '会社情報',
      aboutUs: '私たちについて',
      careers: '採用情報',
      news: 'ニュース',
      legal: '法的情報',
      privacy: 'プライバシーポリシー',
      terms: '利用規約',
      contact: 'お問い合わせ',
      followUs: 'フォローする',
      newsletter: 'ニュースレター',
      subscribeText: 'ニュースレターを購読する',
      emailPlaceholder: 'メールアドレスを入力してください',
      subscribe: '購読する'
    },
    brand: '',
    nav: {
      products: '',
      solutions: '',
      resources: '',
      support: '',
      about: '',
      contact: ''
    }
  },
  ko: {
    navigation: {
      home: '홈',
      products: '제품',
      solutions: '솔루션',
      support: '지원',
      contact: '문의',
      login: '로그인',
      register: '회원가입'
    },
    buttons: {
      learnMore: '자세히 보기',
      getStarted: '시작하기',
      viewDetails: '상세 보기',
      contactUs: '문의하기',
      submit: '제출',
      cancel: '취소',
      back: '뒤로',
      next: '다음'
    },
    footer: {
      company: '회사',
      aboutUs: '회사 소개',
      careers: '채용',
      news: '뉴스',
      legal: '법적 고지',
      privacy: '개인정보 처리방침',
      terms: '이용약관',
      contact: '문의',
      followUs: '팔로우',
      newsletter: '뉴스레터',
      subscribeText: '뉴스레터를 구독하세요',
      emailPlaceholder: '이메일 주소를 입력하세요',
      subscribe: '구독'
    },
    brand: '',
    nav: {
      products: '',
      solutions: '',
      resources: '',
      support: '',
      about: '',
      contact: ''
    }
  },
  zh: {
    navigation: {
      home: '首页',
      products: '产品',
      solutions: '解决方案',
      support: '支持',
      contact: '联系我们',
      login: '登录',
      register: '注册'
    },
    buttons: {
      learnMore: '了解更多',
      getStarted: '开始使用',
      viewDetails: '查看详情',
      contactUs: '联系我们',
      submit: '提交',
      cancel: '取消',
      back: '返回',
      next: '下一步'
    },
    footer: {
      company: '公司',
      aboutUs: '关于我们',
      careers: '招聘',
      news: '新闻',
      legal: '法律信息',
      privacy: '隐私政策',
      terms: '服务条款',
      contact: '联系方式',
      followUs: '关注我们',
      newsletter: '新闻通讯',
      subscribeText: '订阅我们的新闻通讯',
      emailPlaceholder: '输入您的电子邮件地址',
      subscribe: '订阅'
    },
    brand: '',
    nav: {
      products: '',
      solutions: '',
      resources: '',
      support: '',
      about: '',
      contact: ''
    }
  }
};

export default translations;
