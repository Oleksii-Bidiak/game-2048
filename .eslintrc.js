module.exports = {
  extends: "@mate-academy/eslint-config",
  parserOptions: {
    sourceType: "module",
    allowImportExportEverywhere: true,
  },
  rules: {
    strict: "off",
    "import/export": "off",
    quotes: "off",
  },
};
