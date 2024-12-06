import { vi, describe, it, expect, beforeEach } from 'vitest';
import axios from 'axios';
import translationService from '../translationService';
import config from '../../config';

vi.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('TranslationService', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('translateText', () => {
    it('should successfully translate text', async () => {
      const mockResponse = {
        data: [
          {
            translations: [
              {
                text: 'Bonjour',
                to: 'fr',
              },
            ],
          },
        ],
      };

      mockedAxios.post.mockResolvedValueOnce(mockResponse);

      const result = await translationService.translateText('Hello', 'fr', 'en');
      expect(result).toBe('Bonjour');

      expect(mockedAxios.post).toHaveBeenCalledWith(
        expect.stringContaining('/translate'),
        [{ text: 'Hello' }],
        expect.objectContaining({
          params: {
            'api-version': '3.0',
            from: 'en',
            to: 'fr',
          },
        })
      );
    });

    it('should throw error when API key is not configured', async () => {
      vi.spyOn(config.i18n.translationApi, 'key', 'get').mockReturnValue('');

      await expect(translationService.translateText('Hello', 'fr', 'en')).rejects.toThrow(
        'Translation API key not configured'
      );
    });

    it('should handle API errors', async () => {
      mockedAxios.post.mockRejectedValueOnce(new Error('API Error'));

      await expect(translationService.translateText('Hello', 'fr', 'en')).rejects.toThrow(
        'Failed to translate text'
      );
    });
  });

  describe('translateBatch', () => {
    it('should successfully translate multiple texts', async () => {
      const mockResponse = {
        data: [
          {
            translations: [{ text: 'Bonjour' }],
          },
          {
            translations: [{ text: 'Au revoir' }],
          },
        ],
      };

      mockedAxios.post.mockResolvedValueOnce(mockResponse);

      const result = await translationService.translateBatch(['Hello', 'Goodbye'], 'fr', 'en');
      expect(result).toEqual(['Bonjour', 'Au revoir']);
    });

    it('should handle empty input array', async () => {
      const result = await translationService.translateBatch([], 'fr', 'en');
      expect(result).toEqual([]);
      expect(mockedAxios.post).not.toHaveBeenCalled();
    });

    it('should throw error for API failures', async () => {
      mockedAxios.post.mockRejectedValueOnce(new Error('API Error'));

      await expect(translationService.translateBatch(['Hello'], 'fr', 'en')).rejects.toThrow(
        'Failed to translate batch'
      );
    });
  });

  describe('getSupportedLanguages', () => {
    it('should return all supported languages', () => {
      const languages = translationService.getSupportedLanguages();
      expect(languages).toContainEqual({ code: 'en', name: 'English' });
      expect(languages).toContainEqual({ code: 'fr', name: 'French' });
      expect(languages).toContainEqual({ code: 'es', name: 'Spanish' });
      expect(languages.length).toBeGreaterThan(0);
    });

    it('should return unique language codes', () => {
      const languages = translationService.getSupportedLanguages();
      const codes = languages.map(lang => lang.code);
      const uniqueCodes = new Set(codes);
      expect(codes.length).toBe(uniqueCodes.size);
    });
  });
});
