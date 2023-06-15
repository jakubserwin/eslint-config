module.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:tailwindcss/recommended'
  ],
  plugins: ['import', '@typescript-eslint'],
  rules: {
    // Base
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'object-curly-spacing': ['error', 'always'],
    'object-curly-newline': ['error', {
      ObjectExpression: {
        multiline: false,
        minProperties: 2,
        consistent: true
      },
      ImportDeclaration: { minProperties: 4 },
      ObjectPattern: {
        multiline: false,
        minProperties: 3,
        consistent: true
      },
      ExportDeclaration: 'always'
    }],
    'object-shorthand': ['error', 'properties'],
    'array-bracket-spacing': ['error', 'never'],
    'indent': ['error', 2],

    // TypeScript
    '@typescript-eslint/member-ordering': ['error', {
      interfaces: {
        optionalityOrder: 'required-first'
      }
    }],
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'none',
        requireLast: false
      },
      singleline: {
        delimiter: 'semi',
        requireLast: false
      }
    }],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],

    // Import
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
      },
    ],
    'import/order': [
      'error',
      {
        groups: ['external', 'builtin', 'internal', 'sibling', 'parent', 'index'],
        pathGroups: [
          {
            'pattern': 'react',
            'group': 'external',
            'position': 'before'
          }
        ],
        pathGroupsExcludedImportTypes: ['react'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  }
}
