/**
 * 'off' or 0 - turn the rule off
 * 'warn' or 1 - turn the rule on as a warning (doesn't affect exit code)
 * 'error' or 2 - turn the rule on as an error (exit code will be 1)
 */
module.exports = {
    env: {
        browser: false,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    ],
    ignorePatterns: [
        // List of all the dir which you want eslint to ignore.
        'src/**/*.test.ts',
        'dist/**',
        'node_modules/**',
        '.eslintrc.js',
        'src/test/'
    ],
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    parserOptions: {
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        project: ['tsconfig.json'],
    },
    plugins: ['unused-imports'],
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. '@typescript-eslint/explicit-function-return-type': 'off',
    rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-explicit-any': 2,
        '@typescript-eslint/no-var-requires': 0,
        'consistent-return': 2,
        'no-console': 2,

        /**
         * Enforces Naming Convention
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/naming-convention.md
         */
        '@typescript-eslint/naming-convention': [
            'error',
            {
                'selector': 'typeLike',   // should be in pascal case
                'format': ['PascalCase']
            },
            {
                'selector': 'class',      // should be in pascal case
                'format': ['PascalCase']
            },
            {
                'selector': 'interface',  // Enforce that interface names do not begin with an I
                'format': ['PascalCase'],
                'custom': {
                    'regex': '^I[A-Z]',
                    'match': false
                }
            },
            {
                'selector': 'variable',   // Enforce that all variables are either in camelCase or UPPER_CASE & leading underscore are allowed
                'format': ['camelCase', 'UPPER_CASE'],
                'leadingUnderscore': 'allow'
            },
            {
                'selector': 'variable',   // Enforce that boolean variables are prefixed with an allowed verb
                'types': ['boolean'],
                'format': ['PascalCase'],
                'prefix': ['is', 'should', 'has', 'can', 'did', 'will']
            },
            {
                'selector': 'function',   //should not allow leading underscore
                'format': ['camelCase', 'PascalCase'],
                'leadingUnderscore': 'forbid'
            },
            {
                'selector': 'parameter',  //should allow leading underscore
                'format': ['camelCase'],
                'leadingUnderscore': 'allow'
            },
            {
                'selector': 'method',     //should not allow leading underscore
                'format': ['camelCase'],
                'leadingUnderscore': 'forbid'
            },
            {
                'selector': 'memberLike', //should not allow leading underscore
                'format': ['camelCase'],
                'leadingUnderscore': 'forbid'
            },
            {
                'selector': 'enumMember', //should not allow leading underscore
                'format': ['camelCase', 'PascalCase'],
                'leadingUnderscore': 'forbid'
            },
            {
                'selector': 'typeParameter',  // Enforce that type parameters (generics) are prefixed with T
                'format': ['PascalCase'],
                'prefix': ['T']
            },
            {
                'selector': 'property',
                'format': null
            }
        ],

        /**
         * Variables
         */
        'no-unused-vars': 'off',          // http://eslint.org/docs/rules/no-unused-vars
        'unused-imports/no-unused-imports': 'error',  //https://www.npmjs.com/package/eslint-plugin-unused-imports
        'unused-imports/no-unused-vars': ['error', {  //https://www.npmjs.com/package/eslint-plugin-unused-imports
            vars: 'all',
            varsIgnorePattern: '^_',
            args: 'after-used',
            argsIgnorePattern: '^_'
        }],
        'no-use-before-define': 2,       // http://eslint.org/docs/rules/no-use-before-define

        /**
         * Possible errors
         */
        'comma-dangle': [2, 'never'],    // http://eslint.org/docs/rules/comma-dangle
        'no-duplicate-case': 2,          // http://eslint.org/docs/rules/no-duplicate-case
        'no-empty': 2,                   // http://eslint.org/docs/rules/no-empty
        'no-ex-assign': 2,               // http://eslint.org/docs/rules/no-ex-assign
        'no-extra-boolean-cast': 0,      // http://eslint.org/docs/rules/no-extra-boolean-cast
        'no-extra-semi': 2,              // http://eslint.org/docs/rules/no-extra-semi
        'no-irregular-whitespace': 2,    // http://eslint.org/docs/rules/no-irregular-whitespace
        'no-sparse-arrays': 2,           // http://eslint.org/docs/rules/no-sparse-arrays
        'no-invalid-regexp': 2,          // http://eslint.org/docs/rules/no-invalid-regexp
        'no-restricted-globals': ['error', // https://eslint.org/docs/rules/no-restricted-globals
            { 'name': 'setTimeout' },
            { 'name': 'clearTimeout' },
            { 'name': 'setInterval' },
            { 'name': 'clearInterval' },
            { 'name': 'setImmediate' },
            { 'name': 'clearImmediate' }
        ],

        /**
         * Style
         */
        'indent': ['error', 2,              // http://eslint.org/docs/rules/indent
            { 'SwitchCase': 1 }
        ],
        'quotes': [
            2, 'single', 'avoid-escape'     // http://eslint.org/docs/rules/quotes
        ],
        'comma-spacing': [2, {              // http://eslint.org/docs/rules/comma-spacing
            'before': false,
            'after': true
        }],
        'comma-style': [2, 'last'],         // http://eslint.org/docs/rules/comma-style
        'no-multiple-empty-lines': [2, {    // http://eslint.org/docs/rules/no-multiple-empty-lines
            'max': 2
        }],
        'no-trailing-spaces': 2,            // http://eslint.org/docs/rules/no-trailing-spaces
        'no-extra-parens': [2, 'functions'],// http://eslint.org/docs/rules/no-extra-parens
        'semi': [2, 'never'],               // http://eslint.org/docs/rules/semi
        'semi-spacing': [2, {               // http://eslint.org/docs/rules/semi-spacing
            'before': false,
            'after': true
        }],
        'sort-imports': ['error', {
            'ignoreCase': false,
            'ignoreDeclarationSort': true,
            'ignoreMemberSort': false,
            'memberSyntaxSortOrder': ['all', 'single', 'multiple', 'none'],
            'allowSeparatedGroups': false
        }],
        'no-duplicate-imports': ['error', { 'includeExports': true }] //https://eslint.org/docs/rules/no-duplicate-imports
    }
}  