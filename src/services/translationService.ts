import axios from 'axios';

export type SupportedLanguage = 'en' | 'fr' | 'es' | 'de' | 'it' | 'ja' | 'ko' | 'zh';

interface TranslationResponse {
  translations: {
    text: string;
    detectedLanguage?: {
      language: string;
      confidence: number;
    };
  }[];
}

class TranslationService {
  private apiKey: string;
  private endpoint: string;

  constructor() {
    this.apiKey = process.env.REACT_APP_TRANSLATION_API_KEY || '';
    this.endpoint = 'https://api.cognitive.microsofttranslator.com/translate';
  }

  async translateText(
    text: string,
    targetLanguage: SupportedLanguage,
    sourceLanguage: SupportedLanguage = 'en'
  ): Promise<string> {
    try {
      if (!this.apiKey) {
        throw new Error('Translation API key not configured');
      }

      const response = await axios.post<TranslationResponse[]>(
        `${this.endpoint}`,
        [{ text }],
        {
          params: {
            'api-version': '3.0',
            from: sourceLanguage,
            to: targetLanguage,
          },
          headers: {
            'Ocp-Apim-Subscription-Key': this.apiKey,
            'Content-Type': 'application/json',
          },
        }
      );

      return response.data[0].translations[0].text;
    } catch (error) {
      console.error('Translation error:', error);
      throw new Error('Failed to translate text');
    }
  }

  async translateBatch(
    texts: string[],
    targetLanguage: SupportedLanguage,
    sourceLanguage: SupportedLanguage = 'en'
  ): Promise<string[]> {
    try {
      if (!this.apiKey) {
        throw new Error('Translation API key not configured');
      }

      const response = await axios.post<TranslationResponse[]>(
        `${this.endpoint}`,
        texts.map(text => ({ text })),
        {
          params: {
            'api-version': '3.0',
            from: sourceLanguage,
            to: targetLanguage,
          },
          headers: {
            'Ocp-Apim-Subscription-Key': this.apiKey,
            'Content-Type': 'application/json',
          },
        }
      );

      return response.data.map(item => item.translations[0].text);
    } catch (error) {
      console.error('Batch translation error:', error);
      throw new Error('Failed to translate batch');
    }
  }

  getSupportedLanguages(): { code: SupportedLanguage; name: string }[] {
    return [
      { code: 'en', name: 'English' },
      { code: 'fr', name: 'French' },
      { code: 'es', name: 'Spanish' },
      { code: 'de', name: 'German' },
      { code: 'it', name: 'Italian' },
      { code: 'ja', name: 'Japanese' },
      { code: 'ko', name: 'Korean' },
      { code: 'zh', name: 'Chinese (Simplified)' },
    ];
  }
}

export const translationService = new TranslationService();
export default translationService;
