/**
 * URL pública do site.
 *
 * TODO (Luiz): depois do deploy, defina a variável de ambiente
 * NEXT_PUBLIC_SITE_URL na Vercel com o domínio definitivo. Enquanto ela não
 * existir, o valor abaixo é usado como padrão.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://remarqueaqui.com.br";
