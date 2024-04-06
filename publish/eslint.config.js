
import globals from 'globals';

export default [
    {
        languageOptions: {
            globals: {
                ...globals.es2020,
                ...globals.browser,
                ...globals.node,
            },
            sourceType: 'module'
        },
        rules: {
            'accessor-pairs': 'error',
            'array-bracket-spacing': 'error',
            'array-callback-return': 'error',
            // 'arrow-body-style': 'error',
            'arrow-parens': 'error',
            'block-scoped-var': 'error',
            'brace-style': 'error',
            // 'camelcase': 'error',
            // 'capitalized-comments': 'error',
            // 'class-methods-use-this': 'error',
            // 'complexity': 'error',
            'computed-property-spacing': 'error',
            'consistent-return': 'error',
            // 'consistent-this': 'error',
            'constructor-super': 'error',
            'curly': 'error',
            'default-case': 'error',
            'default-case-last': 'error',
            'default-param-last': 'error',
            'dot-notation': 'error',
            'eqeqeq': 'error',
            'for-direction': 'error',
            'func-name-matching': 'error',
            // 'func-names': 'error',
            // 'func-style': 'error',
            'getter-return': 'error',
            'grouped-accessor-pairs': 'error',
            // 'guard-for-in': 'error',
            'id-denylist': 'error',
            // 'id-length': 'error',
            'id-match': 'error',
            'indent': ['error', 4, { 'SwitchCase': 1 }],
            'init-declarations': 'error',
            'keyword-spacing': 'error',
            // 'line-comment-position': 'error',
            // 'logical-assignment-operators': 'error',
            // 'max-classes-per-file': 'error',
            // 'max-depth': 'error',
            // 'max-lines': 'error',
            // 'max-lines-per-function': 'error',
            'max-nested-callbacks': 'error',
            // 'max-params': 'error',
            // 'max-statements': 'error',
            // 'multiline-comment-style': 'error',
            // 'new-cap': 'error',
            // 'no-alert': 'error',
            'no-array-constructor': 'error',
            'no-async-promise-executor': 'error',
            'no-await-in-loop': 'error',
            // 'no-bitwise': 'error',
            'no-caller': 'error',
            'no-case-declarations': 'error',
            'no-class-assign': 'error',
            'no-compare-neg-zero': 'error',
            'no-cond-assign': 'error',
            'no-console': 'error',
            'no-const-assign': 'error',
            'no-constant-binary-expression': 'error',
            'no-constant-condition': 'error',
            'no-constructor-return': 'error',
            // 'no-continue': 'error',
            'no-control-regex': 'error',
            'no-debugger': 'error',
            'no-delete-var': 'error',
            'no-div-regex': 'error',
            'no-dupe-args': 'error',
            'no-dupe-class-members': 'error',
            'no-dupe-else-if': 'error',
            'no-dupe-keys': 'error',
            'no-duplicate-case': 'error',
            'no-duplicate-imports': 'error',
            'no-else-return': 'error',
            'no-empty': 'error',
            'no-empty-character-class': 'error',
            // 'no-empty-function': 'error',
            'no-empty-pattern': 'error',
            'no-empty-static-block': 'error',
            'no-eq-null': 'error',
            'no-eval': 'error',
            'no-ex-assign': 'error',
            'no-extend-native': 'error',
            'no-extra-bind': 'error',
            'no-extra-boolean-cast': 'error',
            'no-extra-label': 'error',
            'no-extra-semi': 'error',
            'no-fallthrough': 'error',
            'no-func-assign': 'error',
            'no-global-assign': 'error',
            'no-implicit-coercion': 'error',
            'no-implicit-globals': 'error',
            'no-implied-eval': 'error',
            'no-import-assign': 'error',
            // 'no-inline-comments': 'error',
            'no-inner-declarations': 'error',
            'no-invalid-regexp': 'error',
            'no-invalid-this': 'error',
            'no-irregular-whitespace': 'error',
            'no-iterator': 'error',
            'no-label-var': 'error',
            'no-labels': 'error',
            'no-lone-blocks': 'error',
            'no-lonely-if': 'error',
            // 'no-loop-func': 'error',
            'no-loss-of-precision': 'error',
            // 'no-magic-numbers': 'error',
            'no-misleading-character-class': 'error',
            'no-multi-assign': 'error',
            'no-multi-str': 'error',
            'no-multiple-empty-lines': ['error', { 'max': 1 }],
            // 'no-negated-condition': 'error',
            'no-nested-ternary': 'error',
            // 'no-new': 'error',
            'no-new-func': 'error',
            'no-new-native-nonconstructor': 'error',
            'no-new-wrappers': 'error',
            'no-nonoctal-decimal-escape': 'error',
            'no-obj-calls': 'error',
            'no-object-constructor': 'error',
            'no-octal': 'error',
            'no-octal-escape': 'error',
            // 'no-param-reassign': 'error',
            // 'no-plusplus': 'error',
            'no-promise-executor-return': 'error',
            'no-proto': 'error',
            'no-prototype-builtins': 'error',
            'no-redeclare': 'error',
            'no-regex-spaces': 'error',
            'no-restricted-exports': 'error',
            'no-restricted-globals': 'error',
            'no-restricted-imports': 'error',
            'no-restricted-properties': 'error',
            'no-restricted-syntax': 'error',
            'no-return-assign': 'error',
            'no-script-url': 'error',
            'no-self-assign': 'error',
            'no-self-compare': 'error',
            'no-sequences': 'error',
            'no-setter-return': 'error',
            // 'no-shadow': 'error',
            'no-shadow-restricted-names': 'error',
            'no-sparse-arrays': 'error',
            'no-template-curly-in-string': 'error',
            // 'no-ternary': 'error',
            'no-this-before-super': 'error',
            'no-throw-literal': 'error',
            'no-trailing-spaces': 'error',
            'no-undef': 'error',
            'no-undef-init': 'error',
            // 'no-undefined': 'error',
            // 'no-underscore-dangle': 'error',
            'no-unexpected-multiline': 'error',
            'no-unmodified-loop-condition': 'error',
            // 'no-unneeded-ternary': 'error',
            'no-unreachable': 'error',
            'no-unreachable-loop': 'error',
            'no-unsafe-finally': 'error',
            'no-unsafe-negation': 'error',
            'no-unsafe-optional-chaining': 'error',
            'no-unused-expressions': 'error',
            'no-unused-labels': 'error',
            'no-unused-private-class-members': 'error',
            'no-unused-vars': 'error',
            'no-use-before-define': 'error',
            // 'no-useless-assignment': 'error',
            'no-useless-backreference': 'error',
            'no-useless-call': 'error',
            'no-useless-catch': 'error',
            'no-useless-computed-key': 'error',
            'no-useless-concat': 'error',
            'no-useless-constructor': 'error',
            'no-useless-escape': 'error',
            'no-useless-rename': 'error',
            'no-useless-return': 'error',
            'no-var': 'error',
            'no-void': 'error',
            // 'no-warning-comments': 'error',
            'no-with': 'error',
            'object-curly-spacing': ['error', 'always'],
            'object-shorthand': 'error',
            // 'one-var': 'error',
            'operator-assignment': 'error',
            'prefer-arrow-callback': 'error',
            'prefer-const': 'error',
            'prefer-destructuring': ['error', { 'array': true }],
            // 'prefer-exponentiation-operator': 'error',
            // 'prefer-named-capture-group': 'error',
            'prefer-numeric-literals': 'error',
            // 'prefer-object-has-own': 'error',
            // 'prefer-object-spread': 'error',
            'prefer-promise-reject-errors': 'error',
            // 'prefer-regex-literals': 'error',
            'prefer-rest-params': 'error',
            'prefer-spread': 'error',
            'prefer-template': 'error',
            'radix': 'error',
            'require-atomic-updates': 'error',
            // 'require-await': 'error',
            // 'require-unicode-regexp': 'error',
            'require-yield': 'error',
            'semi': ['error', 'always'],
            // 'sort-imports': 'error',
            // 'sort-keys': 'error',
            // 'sort-vars': 'error',
            'space-before-blocks': 'error',
            'space-in-parens': 'error',
            'space-infix-ops': 'error',
            'strict': 'error',
            'symbol-description': 'error',
            'template-curly-spacing': 'error',
            'unicode-bom': 'error',
            'use-isnan': 'error',
            'valid-typeof': 'error',
            // 'vars-on-top': 'error',
            'yoda': 'error'
        }
    }
];
