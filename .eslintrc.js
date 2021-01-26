// "off" or 0 - turn the rule off
// "warn" or 1 - turn the rule on as a warning(doesn’ t affect exit code)
// "error" or 2 - turn the rule on as an error(exit code is 1 when triggered)

module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: ['react'],
    parser: 'babel-eslint',
    rules: {
        'react/jsx-uses-vars': 2,
        'no-undef': 2,
        semi: 2,
        'react/prop-types': 0,
        'react/jsx-no-bind': [
            2,
            {
                allowArrowFunctions: true
            }
        ],
        'react/jsx-no-duplicate-props': 2,
        'no-console': 0,
        'react/display-name': 0,
        'lines-between-class-members': [2, 'always'],
        'arrow-spacing': 2,
        'no-duplicate-imports': 2,
        'no-unused-vars': 1,
        'no-constant-condition': 1
    }
};
