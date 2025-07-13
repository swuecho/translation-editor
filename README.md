# Translation Editor

A simple, standalone translation editor for managing multi-language JSON files. This tool provides an intuitive web interface for editing translations across multiple languages with features like validation, Excel import, and directory export.

## Features

- 📝 **Multi-language editing** - Support for English, Traditional Chinese (HK), and Simplified Chinese
- 🔍 **Search functionality** - Filter translations by key or English text
- ✅ **Character validation** - Detect mismatched punctuation between languages
- 📊 **Statistics tracking** - View counts of total, modified, and filtered keys
- 📋 **Copy-to-clipboard** - Click on keys to copy them to clipboard
- ➕ **Add new items** - Create new translation entries with a simple modal
- 📄 **Excel import** - Paste data directly from Excel or CSV files
- 💾 **Export options** - Download as JSON files or export directly to project directories
- ⚙️ **Configuration** - Customize file paths for your project structure
- 🔄 **Change tracking** - Visual indicators for modified translations with reset functionality

## Installation

### Via npm (Recommended)

```bash
npm install -g @translation-editor/html
```

### Via GitHub

```bash
git clone https://github.com/swuecho/translation-editor.git
cd translation-editor
npm install
```

## Usage

### Command Line Interface

After installing globally, you can start the translation editor server:

```bash
translation-editor
```

This will start a local server and automatically open the translation editor in your default browser.

### Programmatic Usage

```javascript
import { initTranslationEditor } from '@translation-editor/html';

// Initialize the editor in an existing HTML page
initTranslationEditor();
```

### Manual Setup

1. Copy the `dist/` folder contents to your project
2. Include the HTML file in your project:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Translation Editor</title>
    <link rel="stylesheet" href="./styles.css">
</head>
<body>
    <div id="app"></div>
    <script type="module" src="./app.js"></script>
</body>
</html>
```

## Configuration

The editor supports configurable file paths for your translation files. By default, it looks for:

- English: `./src/translation/en/HK/hk.json`
- Traditional Chinese (HK): `./src/translation/hk/HK/hk.json`
- Simplified Chinese: `./src/translation/zh/HK/hk.json`

You can modify these paths in the Configuration page within the application. Settings are automatically saved to localStorage.

## File Structure

```
your-project/
├── src/
│   └── translation/
│       ├── en/HK/hk.json
│       ├── hk/HK/hk.json
│       └── zh/HK/hk.json
└── translation-editor files...
```

## Translation File Format

Translation files should be valid JSON with key-value pairs:

```json
{
  "welcome": "Welcome to our application",
  "goodbye": "Thank you for using our service",
  "buttons": {
    "save": "Save",
    "cancel": "Cancel"
  }
}
```

## Features in Detail

### Search and Filter
- Search by translation key names
- Search by English translation content
- Real-time filtering of results

### Validation
- Detects Chinese punctuation in English text
- Detects English punctuation in Chinese text
- Visual indicators for validation errors

### Excel Import
1. Select your data in Excel (columns: Key, English, Traditional Chinese, Simplified Chinese)
2. Copy the selection (Ctrl+C)
3. Click "Paste from Excel" in the editor
4. Paste your data (Ctrl+V) in the text area
5. Review the preview and import

### Export Options
- **Save All**: Downloads a backup JSON file with all translations
- **Export JSON**: Downloads separate JSON files for each language
- **Export to Directory**: Uses the File System Access API to save files directly to your project structure

## Browser Compatibility

- Modern browsers with ES2017+ support
- File System Access API required for directory export (Chrome 86+, Edge 86+)
- Clipboard API for copy functionality

## Dependencies

- Preact 10.19.3 (loaded via CDN)
- HTM 3.1.1 (loaded via CDN)
- Express.js (for CLI server)

## Development

```bash
git clone https://github.com/swuecho/translation-editor.git
cd translation-editor
npm install
npm run build
npm run serve
```

## License

MIT License - see LICENSE file for details

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## Support

If you encounter any issues or have feature requests, please create an issue on GitHub.