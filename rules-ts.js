module.exports = {
  "@typescript-eslint/ban-ts-comment": [
    "error",
    { "ts-ignore": "allow-with-description" },
  ],
  "@typescript-eslint/member-delimiter-style": [
    "error",
    { multiline: { delimiter: "none" } },
  ],
  "@typescript-eslint/type-annotation-spacing": ["error", {}],
  "@typescript-eslint/consistent-type-imports": [
    "error",
    { prefer: "type-imports", disallowTypeAnnotations: false },
  ],
  "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
  "@typescript-eslint/consistent-indexed-object-style": ["error", "record"],
  "@typescript-eslint/prefer-ts-expect-error": "error",

  "space-before-blocks": "off",
  "@typescript-eslint/space-before-blocks": ["error", "always"],
  "space-before-function-paren": "off",
  "@typescript-eslint/space-before-function-paren": [
    "error",
    {
      anonymous: "always",
      named: "never",
      asyncArrow: "always",
    },
  ],
  "space-infix-ops": "off",
  "@typescript-eslint/space-infix-ops": "error",
  "keyword-spacing": "off",
  "@typescript-eslint/keyword-spacing": [
    "error",
    { before: true, after: true },
  ],
  "comma-spacing": "off",
  "@typescript-eslint/comma-spacing": ["error", { before: false, after: true }],
  "no-extra-parens": "off",
  "@typescript-eslint/no-extra-parens": ["error", "functions"],
  "no-dupe-class-members": "off",
  "@typescript-eslint/no-dupe-class-members": "error",
  "no-loss-of-precision": "off",
  "@typescript-eslint/no-loss-of-precision": "error",
  "lines-between-class-members": "off",
  "@typescript-eslint/lines-between-class-members": [
    "error",
    "always",
    { exceptAfterSingleLine: true },
  ],
};
