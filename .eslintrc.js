module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:prettier/recommended",
    "plugin:tailwindcss/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "prettier", "tailwindcss"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "no-use-before-define": "off",
    "import/no-extraneous-dependencies": "off",
  },
};
