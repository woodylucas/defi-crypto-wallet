// eslint.config.js

const reactNativePlugin = require("@react-native-community/eslint-plugin");
const typescriptPlugin = require("@typescript-eslint/eslint-plugin");
const typescriptParser = require("@typescript-eslint/parser");
const reactPlugin = require("eslint-plugin-react");
const reactHooksPlugin = require("eslint-plugin-react-hooks");

// Direct configuration for React Native rules
const reactNativeConfig = {
  plugins: {
    "react-native": reactNativePlugin,
    react: reactPlugin,
    "react-hooks": reactHooksPlugin,
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    // Add additional React Native rules here
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};

// Direct configuration for TypeScript rules
const typescriptConfig = {
  plugins: {
    "@typescript-eslint": typescriptPlugin,
  },
  languageOptions: {
    parser: typescriptParser,
    parserOptions: {
      sourceType: "module",
      ecmaVersion: "latest",
    },
  },
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": "off",
    // Add additional TypeScript-specific rules here
  },
};

module.exports = [
  // Base configuration
  {
    ignores: [
      "**/*.test.js",
      "**/*.test.ts",
      "node_modules/",
      "babel.config.js",
    ],
    rules: {
      quotes: [2, "double", { avoidEscape: true }],
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },
  // Configuration for JavaScript files
  {
    files: ["*.js", "*.jsx"],
    ...reactNativeConfig,
  },
  // Configuration for TypeScript files
  {
    files: ["*.ts", "*.tsx"],
    ...reactNativeConfig,
    ...typescriptConfig,
  },
];
