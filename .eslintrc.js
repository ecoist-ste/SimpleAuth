module.exports = {
extends: [
    'expo',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
],
parser: '@typescript-eslint/parser',
parserOptions: {
    ecmaFeatures: {
    jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
},
plugins: ['@typescript-eslint', 'import'],
settings: {
    'import/parsers': {
    '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
    typescript: {
        alwaysTryTypes: true,
    },
    },
},
rules: {
    'import/no-unresolved': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
},
ignorePatterns: ['/dist/*'],
};
