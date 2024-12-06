export interface ValidationError {
  key: string;
  type: 'missing' | 'format' | 'placeholder' | 'length';
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
}

type FormatTag = string;
type Placeholder = string;

const extractPlaceholders = (text: string): Placeholder[] => {
  return text.match(/\{[^}]+\}/g) || [];
};

const extractFormatTags = (text: string): FormatTag[] => {
  return text.match(/<[^>]+>/g) || [];
};

export const validateTranslation = (
  key: string,
  sourceText: string,
  translatedText: string
): ValidationResult => {
  const errors: ValidationError[] = [];

  // Check for missing translation
  if (!translatedText) {
    errors.push({
      key,
      type: 'missing',
      message: 'Translation is missing',
    });
    return { isValid: false, errors };
  }

  // Check for placeholder consistency
  const sourcePlaceholders = extractPlaceholders(sourceText);
  const translatedPlaceholders = extractPlaceholders(translatedText);

  if (sourcePlaceholders.length !== translatedPlaceholders.length) {
    errors.push({
      key,
      type: 'placeholder',
      message: 'Placeholder count mismatch',
    });
  } else {
    sourcePlaceholders.forEach((placeholder: Placeholder) => {
      if (!translatedPlaceholders.includes(placeholder)) {
        errors.push({
          key,
          type: 'placeholder',
          message: `Missing placeholder: ${placeholder}`,
        });
      }
    });
  }

  // Check for excessive length (translated text shouldn't be more than 2x the source)
  if (translatedText.length > sourceText.length * 2) {
    errors.push({
      key,
      type: 'length',
      message: 'Translation is significantly longer than source text',
    });
  }

  // Check for basic formatting consistency (e.g., HTML tags)
  const sourceFormatting = extractFormatTags(sourceText);
  const translatedFormatting = extractFormatTags(translatedText);

  if (sourceFormatting.length !== translatedFormatting.length) {
    errors.push({
      key,
      type: 'format',
      message: 'HTML tag count mismatch',
    });
  } else {
    sourceFormatting.forEach((tag: FormatTag) => {
      if (!translatedFormatting.includes(tag)) {
        errors.push({
          key,
          type: 'format',
          message: `Missing HTML tag: ${tag}`,
        });
      }
    });
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

export const validateAllTranslations = (translations: Record<string, any>): ValidationResult => {
  const allErrors: ValidationError[] = [];

  const validateNestedTranslations = (
    obj: any,
    prefix = ''
  ): void => {
    Object.entries(obj).forEach(([key, value]) => {
      const fullKey = prefix ? `${prefix}.${key}` : key;
      
      if (typeof value === 'object' && value !== null) {
        validateNestedTranslations(value, fullKey);
      } else if (typeof obj.en === 'string' && typeof value === 'string') {
        const result = validateTranslation(fullKey, obj.en, value);
        allErrors.push(...result.errors);
      }
    });
  };

  validateNestedTranslations(translations);

  return {
    isValid: allErrors.length === 0,
    errors: allErrors,
  };
};

export const generateTranslationReport = (errors: ValidationError[]): string => {
  if (errors.length === 0) {
    return 'All translations are valid.';
  }

  const report = ['Translation Validation Report:', ''];

  const groupedErrors = errors.reduce((acc, error) => {
    if (!acc[error.type]) {
      acc[error.type] = [];
    }
    acc[error.type].push(error);
    return acc;
  }, {} as Record<string, ValidationError[]>);

  Object.entries(groupedErrors).forEach(([type, typeErrors]) => {
    report.push(`${type.toUpperCase()} ERRORS (${typeErrors.length}):`);
    typeErrors.forEach((error) => {
      report.push(`- ${error.key}: ${error.message}`);
    });
    report.push('');
  });

  return report.join('\n');
};
