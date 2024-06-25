module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        project: './tsconfig.json',
    },
    plugins: ['@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
    ],
    rules: {
        semi: ['error', 'always'],
        quotes: ['error', 'single'],
        indent: ['error', 4],

        '@typescript-eslint/no-this-alias': 'off',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-unused-vars': [
            'error',
            { argsIgnorePattern: '^_' },
        ],
    },
    ignorePatterns: ['**/*.js'],
};