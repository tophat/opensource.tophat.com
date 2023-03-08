module.exports = {
    root: true,
    extends: [
        '@tophat/eslint-config/base',
        '@tophat/eslint-config/web',
        '@tophat/eslint-config/react',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: { project: ['./tsconfig.json'] },
    ignorePatterns: ['public'],
}
