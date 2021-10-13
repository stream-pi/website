module.exports = {
  root: true,
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
    "plugin:jsx-a11y/recommended", // Accessibility rules
    "next/core-web-vitals", // NextJS has some jsx-a11y overrides so we load the base second
    "plugin:prettier/recommended", // Prettier plugin
  ],
  rules: {
    // May turn this off in the future
    "import/no-anonymous-default-export": "off",

    // may turn this on later, creates issues for HTML
    "react/no-unescaped-entities": 0,

    // This rule is not compatible with Next.js's <Link /> components
    "jsx-a11y/anchor-is-valid": "off",

    // Includes .prettierrc rules
    "prettier/prettier": ["warn", {}, { usePrettierrc: true }],
  },
  overrides: [
    // This configuration will apply only to TypeScript files
    {
      files: ["**/*.ts?(x)"],
      parser: "@typescript-eslint/parser",
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

        "@typescript-eslint/ban-ts-comment": "off",

        // turn off default unused vars
        "no-unused-vars": "off",
        // Why would you want unused vars?
        "@typescript-eslint/no-unused-vars": ["warn"],
      },
    },
  ],
};
