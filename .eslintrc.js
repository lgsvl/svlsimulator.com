module.exports = {
  "root": true,
  "extends": [
    // https://github.com/facebook/create-react-app/blob/master/packages/babel-preset-react-app/create.js
    "react-app",
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/index.js#L124
    "plugin:react/recommended",
    // https://github.com/benmosher/eslint-plugin-import/blob/master/config/recommended.js
    "plugin:import/recommended",
    // https://github.com/eslint/eslint/blob/master/conf/eslint-recommended.js
    "eslint:recommended",
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/recommended.ts
    "plugin:@typescript-eslint/recommended",
    // Enables eslint-plugin-prettier and eslint-config-prettier
    "plugin:prettier/recommended",
    // Disable any additional rules that might conflict with Prettier
    "prettier/react",
    "prettier/@typescript-eslint",
    "prettier/react"
  ],
  // These are built in based on the "extends" above, but are kept for reference.
  // "parser": "@typescript-eslint/parser",
  // "plugins": ["react", "@typescript-eslint", "react-hooks"], //, "prettier"
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "useJSXTextNode": true,
    "extraFileExtensions": [".vue"],
    "project": "tsconfig.json",
    "tsconfigRootDir": ".",
    "warnOnUnsupportedTypeScriptVersion": true
  },
  "ignorePatterns": [
    "/**/node_modules/",
    "/**/node_modules/*",
    "/**/.cache/",
    "/**/.cache/*",
    "/**/public/",
    "/**/public/*"
  ],
  "settings": {
		"react": {
			"pragma": "React",
			"version": "detect"
		}
	},
  "rules": {
    // When we switch to always using prettier, here's where we'll enable it.
    // "prettier/prettier": "warn",
    // Disable actual Prettier enforcement
    "prettier/prettier": "off",

    "arrow-parens": ["error", "as-needed"],
    "arrow-spacing": [
      "error",
      {
        "before": true,
        "after": true
      }
    ],
    "arrow-body-style": ["error", "as-needed"],
    "eol-last": ["error", "always"],
    "eqeqeq": ["warn", "always", {"null": "ignore"}],
    // "indent": "off", // set "indent" to "off" when using the Typescript rule below.
    "indent": [
      "warn",
      2,
      {
        "SwitchCase": 1
      }
    ],
    "jsx-quotes": ["error", "prefer-single"],
    "max-len": [
      "warn",
      120,
      2,
      {
        "ignoreUrls": true,
        "ignoreComments": false,
        "ignoreRegExpLiterals": true,
        "ignoreStrings": false,
        "ignoreTemplateLiterals": false
      }
    ],
    "no-confusing-arrow": "off",
    "no-console": "off",
    "no-extra-parens": "off",
    // "no-extra-parens": [
    //   "warn",
    //   "all",
    //   {
    //     "conditionalAssign": false,
    //     "returnAssign": false,
    //     "nestedBinaryExpressions": false,
    //     "ignoreJSX": "all",
    //     "enforceForArrowConditionals": false,
    //     "enforceForSequenceExpressions": false,
    //     "enforceForNewInMemberExpressions": false,
    //     "enforceForFunctionPrototypeMethods": false
    //   }
    // ],
    "no-mixed-operators": [
      "warn",
      {
        "allowSamePrecedence": true
      }
    ],
    "no-param-reassign": "off",
    "no-script-url": "off",
    "no-trailing-spaces": "error",
    "no-undef": "off",
    "no-unused-expressions": "off",
    "no-unused-vars": "off",
    "prefer-template": "off",
    "prefer-promise-reject-errors": "off",
    "quotes": "off",

    // Import plugin rules
    "import/default": "off",
    "import/extensions": "off",
    "import/named": "off",
    "import/namespace": "off",
    // "import/newline-after-import": "warn", // Questionable
    "import/no-duplicates": "off",
    "import/no-named-as-default": "off",
    "import/no-named-as-default-member": "off",
    // "import/no-useless-path-segments": "warn", // Questionable
    "import/no-unresolved": "off",
    // "import/prefer-default-export": 0,
    // "import/no-extraneous-dependencies": 0,
    // "import/order": 0,

    // JSX a11y rules
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/control-has-associated-label": "off",
    "jsx-a11y/iframe-has-title": "off",
    // "jsx-a11y/click-events-have-key-events": 0,
    // "jsx-a11y/no-static-element-interactions": 0,
    // "jsx-a11y/label-has-for": 0,

    // React rules
    "react/display-name": "off",
    "react/jsx-tag-spacing": [
      "error",
      {
        "beforeSelfClosing": "always"
      }
    ],
    "react/jsx-wrap-multilines": [
      "error",
      {
        "declaration": "parens-new-line",
        "assignment": "parens-new-line",
        "return": "parens-new-line",
        "arrow": "ignore",
        "condition": "ignore",
        "logical": "ignore",
        "prop": "ignore"
      }
    ],
    "react/no-unescaped-entities": "off",
    "react/prop-types": "off",

    // Typescript rules
    "@typescript-eslint/explicit-function-return-type": "off",
    // "@typescript-eslint/indent": [
    //   "warn",
    //   2,
    //   {
    //     "SwitchCase": 1
    //   }
    // ],
    "@typescript-eslint/naming-convention": [
      "warn",
      {
        "selector": "interface",
        "format": ["PascalCase"]
        // "custom": {
        //   "regex": "^I?[A-Z][A-Za-z]*(Props)?$",
        //   "match": true
        // }
      }
    ],
    "@typescript-eslint/no-explicit-any": ["warn", {
      "ignoreRestArgs": true
    }],
    // "@typescript-eslint/no-extra-parens": "off",
    "@typescript-eslint/no-extra-parens": ["warn", "functions"],
    // "@typescript-eslint/no-extra-parens": ["warn", "all", {
    //   "conditionalAssign": false, // allows extra parentheses around assignments in conditional test expressions
    //   "returnAssign": false, // allows extra parentheses around assignments in return statements
    //   "nestedBinaryExpressions": false, // allows extra parentheses in nested binary expressions
    //   "ignoreJSX": "all", // allows extra parentheses around no/all/multi-line/single-line JSX components. Defaults to none.
    //   "enforceForArrowConditionals": false, // allows extra parentheses around ternary expressions which are the body of an arrow function
    //   "enforceForSequenceExpressions": false, // allows extra parentheses around sequence expressions
    //   "enforceForNewInMemberExpressions": false // allows extra parentheses around new expressions in member expressions
    //   // "enforceForFunctionPrototypeMethods": false // eslint 7.x feature // allows extra parentheses around immediate .call and .apply method calls on function expressions and around function expressions in the same context.
    // }],
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-unused-vars": "off", // turn on?
    "@typescript-eslint/no-unused-expressions": "off", // turn on?
    "@typescript-eslint/interface-name-prefix": "off", // deprecated rule
    "@typescript-eslint/quotes": ["warn", "single"]
  }
};
