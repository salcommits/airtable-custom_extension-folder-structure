# Airtable Interface Extension

This is a custom Airtable Interface Extension that extends Airtable's built-in Interfaces with custom UI to serve specific needs and use cases.

## What is an Interface Extension?

Interface Extensions are custom UI components that can be added to Airtable Interfaces. They allow you to:
- Create custom visualizations and interactions with your Airtable data
- Build specialized workflows tailored to your team's needs
- Integrate with third-party services and APIs
- Display data in ways not possible with standard Interface elements

## Project Structure

```
.
├── block.json              # Extension configuration
├── frontend/
│   ├── index.js           # Main entry point - initializes the extension
│   ├── app/
│   │   └── App.jsx        # Root application component
│   ├── components/
│   │   ├── common/        # Shared/reusable components
│   │   │   ├── CommonExample1.jsx
│   │   │   ├── CommonExample2.jsx
│   │   │   └── index.js   # Barrel export for clean imports
│   │   ├── component1/    # Feature-specific component
│   │   │   ├── Component1.jsx
│   │   │   └── index.js
│   │   └── component2/    # Feature-specific component
│   │       ├── Component2.jsx
│   │       └── index.js
│   ├── hooks/             # Custom React hooks
│   │   └── useExampleHook.js
│   ├── styles/            # Global styles and CSS
│   │   └── globals.css
│   └── utils/             # Utility functions
│       └── formatExample.js
├── package.json           # Node.js dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── eslint.config.mjs      # ESLint configuration
└── LICENSE.md            # License information
```

## Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn
- An Airtable account with access to Interface Designer

## Getting Started

### Installation

1. Clone or download this repository
2. Install dependencies:

```bash
npm install
```

### Development

1. Open your Airtable base
2. Navigate to the Interface Designer
3. Add a new Interface Extension and point it to this project
4. Start building your custom extension using the folder structure
5. Changes will hot-reload in the Airtable interface

### Frontend Architecture

This project follows a scalable folder structure for React development:

#### **app/**
Contains the root `App.jsx` component that serves as the main application container.

#### **components/**
Organized into two types:
- **common/** - Shared, reusable components used across the application
- **feature folders** (e.g., `component1/`, `component2/`) - Feature-specific components

Each component folder includes an `index.js` barrel file for clean imports:
```javascript
// Instead of:
import {Component1} from '../components/component1/Component1';

// Use:
import {Component1} from '../components/component1';
```

#### **hooks/**
Custom React hooks for reusable logic. Example:
```javascript
import {useExampleHook} from '../hooks/useExampleHook';
```

#### **styles/**
Global CSS and Tailwind configuration. The `globals.css` file includes:
- Tailwind directives
- Custom utility classes
- Dark mode support

#### **utils/**
Pure utility functions for data formatting, calculations, etc.
```javascript
import {formatExample, formatDate, truncateText} from '../utils/formatExample';
```

### Linting

Run ESLint to check your code:

```bash
npm run lint
```

## Key Concepts

### Importing from the Blocks SDK

Always import from these two paths:
- `@airtable/blocks/interface/ui` - for UI hooks and functions
- `@airtable/blocks/interface/models` - for data models and types

```javascript
import {initializeBlock, useBase, useRecords} from '@airtable/blocks/interface/ui';
import {FieldType} from '@airtable/blocks/interface/models';
```

### Working with Airtable Data

```javascript
import {useBase, useRecords} from '@airtable/blocks/interface/ui';

function MyComponent() {
    const base = useBase();
    const table = base.tables[0];
    const records = useRecords(table);
    
    return (
        <div>
            {records.map(record => (
                <div key={record.id}>{record.name}</div>
            ))}
        </div>
    );
}
```

### Custom Properties

Use custom properties to make your extension configurable:

```javascript
import {useCustomProperties} from '@airtable/blocks/interface/ui';

function getCustomProperties(base) {
    const table = base.tables[0];
    return [
        {
            key: 'title',
            label: 'Title',
            type: 'string',
            defaultValue: 'My Extension',
        },
        {
            key: 'selectedField',
            label: 'Field to Display',
            type: 'field',
            table,
            defaultValue: table.fields[0],
        },
    ];
}

function MyComponent() {
    const {customPropertyValueByKey} = useCustomProperties(getCustomProperties);
    const title = customPropertyValueByKey.title;
    const field = customPropertyValueByKey.selectedField;
    
    // Use these values in your component
}
```

### Styling

This project uses Tailwind CSS for styling. Both light and dark modes are supported:

```javascript
<div className="bg-white dark:bg-gray-800 text-black dark:text-white">
    Content
</div>
```

### Entry Point

Your extension must call `initializeBlock` at the end of `frontend/index.js`:

```javascript
initializeBlock({interface: () => <MyComponent />});
```

## Available Dependencies

This project includes:
- **React 19** - UI framework
- **Airtable Blocks SDK** - Interface extension APIs
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting

## Adding Third-Party Libraries

You can add additional npm packages for charts, icons, and more:

```bash
npm install recharts @phosphor-icons/react --legacy-peer-deps
```

Popular libraries for Interface Extensions:
- `recharts` - Charts and data visualizations
- `@phosphor-icons/react` - Icon library
- `marked` - Markdown parsing
- `mapbox-gl` - Maps (with Mapbox API key)

## Best Practices

1. **Use Custom Properties** - Never hardcode table names, field names, or API keys
2. **Check Permissions** - Always check permissions before creating/updating/deleting records
3. **Handle Errors** - Use `getFieldIfExists()` instead of `getField()` to avoid errors
4. **Support Dark Mode** - Use Tailwind's `dark:` prefix for dark mode styles
5. **Responsive Design** - Ensure your extension works at different viewport sizes

## Common Patterns

### Reading Records

```javascript
const base = useBase();
const table = base.tables[0];
const records = useRecords(table);
```

### Creating Records

```javascript
if (table.hasPermissionToCreateRecords()) {
    await table.createRecordAsync({
        [field.id]: 'New Value'
    });
}
```

### Opening Record Detail Pages

```javascript
import {expandRecord} from '@airtable/blocks/interface/ui';

if (table.hasPermissionToExpandRecords()) {
    expandRecord(record);
}
```

## Resources

- [Airtable Interface Extensions Documentation](https://airtable.com/developers/extensions)
- [Blocks SDK Reference](https://airtable.com/developers/extensions/api)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

## License

See [LICENSE.md](LICENSE.md) for license information.

## Support

For questions about Interface Extensions, visit the [Airtable Community](https://community.airtable.com/) or contact Airtable support.