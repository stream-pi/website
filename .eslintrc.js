module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parserOptions: { ecmaVersion: 8 }, // to enable features such as async/await
  // We don't want to lint generated files nor node_modules, but we want to lint .prettierrc.js (ignored by default by eslint)
  ignorePatterns: [
    "node_modules/*",
    ".next/*",
    "out/*",
    "http/*",
    "certs/*",
    "logs/*",
    "certs/*",
    "!.prettierrc",
  ],
  extends: ["eslint:recommended"],
  overrides: [
    // This configuration will apply only to TypeScript files
    {
      files: ["**/*.ts", "**/*.tsx"],
      parser: "@typescript-eslint/parser",
      settings: { react: { version: "detect" } },
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended", // TypeScript rules
        "plugin:react/recommended", // React rules
        "plugin:react-hooks/recommended", // React hooks rules
        "plugin:jsx-a11y/recommended", // Accessibility rules
        "plugin:prettier/recommended", // Prettier plugin
      ],
      rules: {
        // we should allow implicit any
        "@typescript-eslint/no-explicit-any": "off",

        // We don't need this ... for now
        "@typescript-eslint/explicit-module-boundary-types": "off",

        // should probably allow this ... but we wont for now
        "@typescript-eslint/no-non-null-assertion": "off",

        // may turn this on later, creates issues for HTML
        "react/no-unescaped-entities": 0,

        // we use namespaces so...
        "@typescript-eslint/no-namespace": "off",

        // We will use TypeScript's types for component props instead
        "react/prop-types": "off",

        // No need to import React when using Next.js
        "react/react-in-jsx-scope": "off",

        // This rule is not compatible with Next.js's <Link /> components
        "jsx-a11y/anchor-is-valid": "off",

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
        "prettier/prettier": ["warn", {}, { usePrettierrc: true }], // Includes .prettierrc.js rules
      },
    },
  ],
};
