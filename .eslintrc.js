module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: 8 }, // to enable features such as async/await
  // We don't want to lint generated files nor node_modules, but we want to lint .prettierrc.js (ignored by default by eslint)
  ignorePatterns: [
    "node_modules/*",
    ".next/*",
    "out/*",
    "http/*",
    "certs/*",
    "logs/*",
    "!.prettierrc",
  ],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended", // React rules
    "plugin:react-hooks/recommended", // React hooks rules
    "plugin:jsx-a11y/recommended", // Accessibility rules
    "plugin:prettier/recommended", // Prettier plugin
    "plugin:@next/next/recommended",
  ],
  rules: {
    // may turn this on later, creates issues for HTML
    "react/no-unescaped-entities": 0,

    // We will use TypeScript's types for component props instead
    "react/prop-types": "off",

    // No need to import React when using Next.js
    "react/react-in-jsx-scope": "off",

    // This rule is not compatible with Next.js's <Link /> components
    "jsx-a11y/anchor-is-valid": "off",

    "prettier/prettier": ["warn", {}, { usePrettierrc: true }], // Includes .prettierrc rules
  },
  overrides: [
    // This configuration will apply only to TypeScript files
    {
      files: ["**/*.ts", "**/*.tsx"],
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      extends: [
        "plugin:@typescript-eslint/recommended", // TypeScript rules
      ],
      rules: {
        // we should allow implicit any
        "@typescript-eslint/no-explicit-any": "off",

        // We don't need this ... for now
        "@typescript-eslint/explicit-module-boundary-types": "off",

        // should probably allow this ... but we wont for now
        "@typescript-eslint/no-non-null-assertion": "off",

        // turn off default unused vars
        "no-unused-vars": "off",
        // Why would you want unused vars?
        "@typescript-eslint/no-unused-vars": ["warn"],

        // I suggest this setting for requiring return types on functions only where useful
        // '@typescript-eslint/explicit-function-return-type': [
        //   'warn',
        //   {
        //     allowExpressions: true,
        //     allowConciseArrowFunctionExpressionsStartingWithVoid: true,
        //   },
        // ],
      },
    },
  ],
  settings: { react: { version: "detect" } },
};
