import coreWebVitals from "eslint-config-next/core-web-vitals";
import typescriptConfig from "eslint-config-next/typescript";

/**
 * A partir do Next 16 o `eslint-config-next` já exporta flat config nativo,
 * então não é preciso usar o FlatCompat.
 */
const eslintConfig = [
  {
    ignores: [".next/**", "node_modules/**", "out/**", "build/**", "next-env.d.ts"],
  },
  ...coreWebVitals,
  ...typescriptConfig,
];

export default eslintConfig;
