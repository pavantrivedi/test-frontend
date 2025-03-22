import compat from "@eslint/compat";
import prettier from "eslint-plugin-prettier";
import angular from "@angular-eslint/eslint-plugin";
import ts from "@typescript-eslint/eslint-plugin";

export default compat.config({
    ignores: ["**/dist/**"], // Changed from `ignorePatterns`

    plugins: {
        prettier,
        "@angular-eslint": angular,
        "@typescript-eslint": ts,
    },

    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@angular-eslint/recommended",
        "plugin:@angular-eslint/template/process-inline-templates",
        "prettier",
    ],

    rules: {
        "padding-line-between-statements": [
            "error",
            { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
            { blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"] },
            { blankLine: "always", prev: "*", next: "return" },
        ],
        "@angular-eslint/component-selector": ["error", { type: "element", prefix: "p", style: "kebab-case" }],
        "@angular-eslint/directive-selector": ["error", { type: "attribute", prefix: "p", style: "camelCase" }],
        "@typescript-eslint/no-explicit-any": "off",
    },
});
