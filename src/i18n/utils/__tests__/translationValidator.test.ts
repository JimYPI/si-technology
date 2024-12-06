import { describe, it, expect } from 'vitest';
import { TranslationValidator } from '../translationValidator';
import { SupportedLanguage } from '../../types';

describe('TranslationValidator', () => {
  const validator = new TranslationValidator();

  const completeTranslations: Record<SupportedLanguage, Record<string, any>> = {
    en: {
      common: {
        submit: 'Submit',
        cancel: 'Cancel'
      }
    },
    fr: {
      common: {
        submit: 'Soumettre',
        cancel: 'Annuler'
      }
    },
    es: {
      common: {
        submit: 'Enviar',
        cancel: 'Cancelar'
      }
    },
    de: {
      common: {
        submit: 'Einreichen',
        cancel: 'Abbrechen'
      }
    },
    it: {
      common: {
        submit: 'Invia',
        cancel: 'Annulla'
      }
    },
    ja: {
      common: {
        submit: '送信',
        cancel: 'キャンセル'
      }
    },
    ko: {
      common: {
        submit: '제출',
        cancel: '취소'
      }
    },
    zh: {
      common: {
        submit: '提交',
        cancel: '取消'
      }
    }
  };

  describe('basic validation', () => {
    it('validates complete translations', () => {
      const result = validator.validateTranslations(completeTranslations);
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
      expect(result.warnings).toHaveLength(0);
    });

    it('detects missing translations', () => {
      const incompleteTranslations = { ...completeTranslations };
      delete incompleteTranslations.fr.common.cancel;

      const result = validator.validateTranslations(incompleteTranslations);
      expect(result.isValid).toBe(false);
      expect(result.errors).toHaveLength(1);
      expect(result.errors[0]).toMatchObject({
        type: 'missing_key',
        language: 'fr',
        key: 'common.cancel'
      });
    });
  });

  describe('structure validation', () => {
    it('validates nested structure consistency', () => {
      const inconsistentTranslations = {
        ...completeTranslations,
        en: {
          common: {
            submit: 'Submit',
            cancel: 'Cancel',
            extra: 'Extra'
          }
        }
      };

      const result = validator.validateTranslations(inconsistentTranslations);
      expect(result.isValid).toBe(false);
      expect(result.errors.some(e => e.type === 'structure_mismatch')).toBe(true);
    });
  });

  describe('placeholder validation', () => {
    it('validates placeholder consistency', () => {
      const translationsWithPlaceholders = {
        ...completeTranslations,
        en: {
          messages: {
            welcome: 'Welcome, {name}!',
            count: '{count} items'
          }
        },
        fr: {
          messages: {
            welcome: 'Bienvenue, {name}!',
            count: '{count} éléments'
          }
        }
      };

      const result = validator.validateTranslations(translationsWithPlaceholders);
      expect(result.isValid).toBe(true);
      expect(result.warnings).toHaveLength(0);
    });

    it('should detect inconsistent placeholders', () => {
      const translationsWithInconsistentPlaceholders = {
        ...completeTranslations,
        en: {
          messages: {
            welcome: 'Welcome, {name}!',
            count: 'You have {count} items'
          }
        },
        fr: {
          messages: {
            welcome: 'Bienvenue, {username}!', // wrong placeholder
            count: 'Vous avez {nombre} articles' // wrong placeholder
          }
        }
      };

      const result = validator.validateTranslations(translationsWithInconsistentPlaceholders);
      expect(result.warnings).toHaveLength(4); // 2 missing + 2 extra
      expect(result.warnings[0].type).toBe('inconsistent_placeholder');
    });
  });

  describe('duplicate detection', () => {
    it('should detect possible duplicate translations', () => {
      const duplicateTranslations = {
        ...completeTranslations,
        en: {
          buttons: {
            save: 'Save',
            submit: 'Submit',
            store: 'Save'  // Duplicate of 'save'
          }
        },
        fr: {
          buttons: {
            save: 'Sauvegarder',
            submit: 'Soumettre',
            store: 'Sauvegarder'  // Duplicate of 'save'
          }
        },
        es: {
          buttons: {
            save: 'Guardar',
            submit: 'Enviar',
            store: 'Guardar'
          }
        },
        de: {
          buttons: {
            save: 'Speichern',
            submit: 'Einreichen',
            store: 'Speichern'
          }
        },
        it: {
          buttons: {
            save: 'Salva',
            submit: 'Invia',
            store: 'Salva'
          }
        },
        ja: {
          buttons: {
            save: '保存',
            submit: '送信',
            store: '保存'
          }
        },
        ko: {
          buttons: {
            save: '저장',
            submit: '제출',
            store: '저장'
          }
        },
        zh: {
          buttons: {
            save: '保存',
            submit: '提交',
            store: '保存'
          }
        }
      };

      const result = validator.validate(duplicateTranslations);
      expect(result.warnings).toContain('Possible duplicate translation: buttons.save and buttons.store have the same value');
    });
  });

  describe('extra keys validation', () => {
    it('should detect extra keys not present in base language', () => {
      const translations = {
        en: {
          common: {
            submit: 'Submit'
          }
        },
        fr: {
          common: {
            submit: 'Soumettre',
            extra: 'Extra Key' // key not present in English
          }
        }
      };

      const result = validator.validateTranslations(translations);
      expect(result.warnings.some(w => w.type === 'unused_key')).toBe(true);
    });
  });

  describe('missing language validation', () => {
    it('should detect completely missing language translations', () => {
      const translations = {
        en: {
          common: {
            submit: 'Submit'
          }
        }
        // fr is completely missing
      };

      const result = validator.validateTranslations(translations);
      expect(result.isValid).toBe(false);
      expect(result.errors.some(e => e.type === 'missing_key' && e.key === '*')).toBe(true);
    });
  });

  describe('nested key validation', () => {
    it('should validate deeply nested translations', () => {
      const translations = {
        en: {
          forms: {
            user: {
              profile: {
                title: 'Profile Settings',
                fields: {
                  name: 'Name',
                  email: 'Email'
                }
              }
            }
          }
        },
        fr: {
          forms: {
            user: {
              profile: {
                title: 'Paramètres du Profil',
                fields: {
                  name: 'Nom'
                  // email is missing
                }
              }
            }
          }
        }
      };

      const result = validator.validateTranslations(translations);
      expect(result.isValid).toBe(false);
      expect(result.errors.some(e => e.key === 'forms.user.profile.fields.email')).toBe(true);
    });
  });
});
