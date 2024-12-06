import { SupportedLanguage } from '../types';
import { TranslationCache } from './translationCache';
import { TranslationMetrics } from './translationMetrics';

const cache = TranslationCache.getInstance();
const metrics = TranslationMetrics.getInstance();

export function getTranslation(
  language: SupportedLanguage,
  key: string,
  interpolation?: Record<string, any>
): string {
  const startTime = performance.now();
  let success = true;
  let error: string | undefined;

  try {
    // Try to get from cache first
    const cachedValue = cache.get(key, language);
    if (cachedValue !== null) {
      return interpolateTranslation(cachedValue, interpolation);
    }

    // If not in cache, get from loaded translations
    const value = getTranslationFromData(language, key);
    if (value !== null) {
      cache.set(key, language, value);
      return interpolateTranslation(value, interpolation);
    }

    success = false;
    error = 'Translation not found';
    return key;
  } catch (e) {
    success = false;
    error = (e as Error).message;
    return key;
  } finally {
    const duration = performance.now() - startTime;
    metrics.recordTranslation(key, language, duration, success, error);
  }
}

function getTranslationFromData(language: SupportedLanguage, key: string): string | null {
  // This is a placeholder - actual implementation would load from your translation files
  return null;
}

function interpolateTranslation(text: string, interpolation?: Record<string, any>): string {
  if (!interpolation) {
    return text;
  }

  return text.replace(/\{\{([^}]+)\}\}/g, (_, key) => {
    const value = interpolation[key.trim()];
    return value !== undefined ? String(value) : `{{${key}}}`;
  });
}
