# SI Technology Website

A modern, responsive website for SI Technology, showcasing security and management solutions. Built with React, TypeScript, and Material-UI.

## Features

- Modern, responsive design using the Seven Mile Beach color palette
- Complete product and solutions catalog
- Resource center with documentation and videos
- Interactive contact form
- Company information and history
- Mobile-first approach

## Tech Stack

- React 19
- TypeScript
- Material-UI
- React Router
- Tailwind CSS

## Color Palette

- Primary: #2D99AE
- Secondary: #0C5776
- Accent: #F8DAD0
- Background: #BCFEFE
- Dark: #001C44

## Project Structure

```
si-technology/
├── src/
│   ├── components/
│   │   └── Layout/
│   │       ├── Layout.tsx
│   │       ├── Navbar.tsx
│   │       └── Footer.tsx
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── ProductsPage.tsx
│   │   ├── SolutionsPage.tsx
│   │   ├── ResourcesPage.tsx
│   │   ├── AboutPage.tsx
│   │   └── ContactPage.tsx
│   └── App.tsx
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

## Deployment

The application can be deployed to any static hosting service:

1. Build the project:
   ```bash
   npm run build
   ```
2. Deploy the contents of the `build` folder

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## Internationalization (i18n)

The SI Technology web platform supports multiple languages through a comprehensive internationalization system. Here's how to work with translations:

### Setup

1. Configure environment variables:
   - Copy `.env.example` to `.env`
   - Set your Azure Translation API key and region:
     ```
     REACT_APP_TRANSLATION_API_KEY=your_key_here
     REACT_APP_TRANSLATION_API_REGION=your_region_here
     ```

2. Access the Translation Dashboard:
   - Navigate to `/admin/translations`
   - Login with admin credentials
   - Manage translations for all supported languages

### Features

- **Multi-language Support**: Currently supports English, French, Spanish, German, Italian, Japanese, Korean, and Chinese
- **AI-powered Translation**: Automatic translation suggestions using Azure's Translation API
- **Translation Management**:
  - Import/Export translations in CSV format
  - Validation for placeholders and HTML tags
  - Translation status tracking
  - Batch translation operations

### Development

1. Adding new translations:
   ```typescript
   // In your component
   const { t } = useLanguage();
   
   // Use translations
   <Typography>{t('key.to.translation')}</Typography>
   ```

2. Adding new languages:
   - Update `SupportedLanguage` type in `translationService.ts`
   - Add language to the supported languages list
   - Add translations for the new language

3. Translation validation:
   - Placeholder consistency
   - HTML tag preservation
   - Length validation
   - Missing translation detection

### Best Practices

1. Use semantic keys (e.g., 'common.buttons.submit' instead of 'submit_button')
2. Keep translations organized by feature/module
3. Always provide English translations as the source
4. Use placeholders for dynamic content: '{value} items'
5. Run validation before deploying new translations

## License

This project is licensed under the MIT License.
