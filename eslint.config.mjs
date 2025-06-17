import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Use Next.js core recommendations
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Custom override to disable the apostrophe rule
  {
    files: ["**/*.tsx", "**/*.jsx"],
    rules: {
      "react/no-unescaped-entities": "off",
    },
  },
];

export default eslintConfig;
