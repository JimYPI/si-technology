import { SupportedLanguage } from './languageUtils';

export type TranslationModule = {
  [key: string]: any;
};

export class TranslationLoader {
  private loadedTranslations: Map<string, TranslationModule> = new Map();
  private loadingPromises: Map<string, Promise<TranslationModule>> = new Map();

  async loadTranslation(
    language: SupportedLanguage,
    namespace: string
  ): Promise<TranslationModule> {
    const key = `${language}:${namespace}`;

    // Return cached translations if available
    if (this.loadedTranslations.has(key)) {
      return this.loadedTranslations.get(key)!;
    }

    // Return existing promise if translation is already being loaded
    if (this.loadingPromises.has(key)) {
      return this.loadingPromises.get(key)!;
    }

    // Create new loading promise
    const loadingPromise = this.fetchTranslation(language, namespace)
      .then(translations => {
        this.loadedTranslations.set(key, translations);
        this.loadingPromises.delete(key);
        return translations;
      })
      .catch(error => {
        this.loadingPromises.delete(key);
        throw error;
      });

    this.loadingPromises.set(key, loadingPromise);
    return loadingPromise;
  }

  private async fetchTranslation(
    language: SupportedLanguage,
    namespace: string
  ): Promise<TranslationModule> {
    try {
      const module = await import(`../translations/${namespace}/${language}.json`);
      return module.default || module;
    } catch (error) {
      console.error(`Failed to load translations for ${language}:${namespace}`, error);
      // Fallback to English if translation file is missing
      if (language !== 'en') {
        return this.fetchTranslation('en', namespace);
      }
      throw error;
    }
  }

  clearCache(language?: SupportedLanguage, namespace?: string) {
    if (!language && !namespace) {
      this.loadedTranslations.clear();
      return;
    }

    for (const key of this.loadedTranslations.keys()) {
      const [lang, ns] = key.split(':');
      if ((!language || lang === language) && (!namespace || ns === namespace)) {
        this.loadedTranslations.delete(key);
      }
    }
  }

  preloadTranslations(
    languages: SupportedLanguage[],
    namespaces: string[]
  ): Promise<void> {
    const loadingPromises = languages.flatMap(language =>
      namespaces.map(namespace =>
        this.loadTranslation(language, namespace)
      )
    );

    return Promise.all(loadingPromises).then(() => void 0);
  }
}
