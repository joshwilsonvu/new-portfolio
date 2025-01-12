import eslint from "@eslint/js";
import solid from "eslint-plugin-solid";
import tseslint from "typescript-eslint";
import globals from 'globals';

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  solid.configs['flat/typescript'],
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...globals.node
      }
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      "@typescript-eslint/no-require-imports": "warn"
    }
  },
);