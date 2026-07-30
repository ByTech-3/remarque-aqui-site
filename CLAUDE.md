# CLAUDE.md — Remarque Aqui (Landing Page)

Este arquivo orienta o Claude Code ao trabalhar neste repositório. Leia por completo antes de gerar ou editar qualquer arquivo.

---

## 1. O QUE É ESTE PROJETO

Landing page de conversão para a **Remarque Aqui**, uma base de remarcação de chassi e motor credenciada ao DETRAN-PR, localizada em frente ao DETRAN do Tarumã, em Curitiba-PR. É uma submarca da Maxilaudo.

**Objetivo único da página:** converter visitantes vindos de anúncios do Google Ads (campanha de ligações) em contatos — ligação telefônica ou WhatsApp. Não é um site institucional. É uma landing de resposta direta, de uma dobra principal forte + seções de apoio.

**Contexto de tráfego:** o usuário chega clicando num anúncio de "remarcação de chassi curitiba" / "remarcação de motor". Ele tem intenção alta e quer resolver um problema. A página precisa passar credibilidade (credenciamento DETRAN), proximidade (em frente ao DETRAN Tarumã) e facilitar o contato ao máximo.

---

## 2. STACK E DECISÕES TÉCNICAS

- **Framework:** Next.js 16 (App Router) + React 19
  - _Nota:_ a especificação original pedia Next.js 14. Migramos para o 16 porque
    todo o ramo 14.x carrega vulnerabilidades de severidade alta sem patch
    disponível — a correção só existe a partir do 16. Como a página é estática e
    não usa Server Actions, middleware nem rewrites, a migração foi indolor.
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS 3 (mantido no 3.x de propósito: o Tailwind 4
  troca o `tailwind.config.ts` por configuração CSS-first, e este projeto
  registra a paleta da marca no config, conforme a seção 8)
- **Deploy:** Vercel
- **Fontes:** Poppins (via `next/font/google`)
- **Ícones:** lucide-react
- **Sem backend.** Página estática. Sem banco de dados, sem API routes (exceto se necessário para um endpoint de tracking simples no futuro).
- **Sem bibliotecas de UI pesadas** (não usar Material UI, Chakra, etc). Tailwind puro + componentes próprios.

### Regras de código

- Componentes funcionais, um componente por arquivo em `components/`.
- Todo texto visível em **português do Brasil**.
- Mobile-first sempre. A maioria do tráfego é celular (anúncio de ligação).
- Acessibilidade: usar tags semânticas, `alt` em imagens, contraste adequado.
- Sem `localStorage`/`sessionStorage` desnecessários.
- Performance é prioridade: a página precisa carregar rápido (Core Web Vitals impactam Quality Score do Google Ads e o CPC).

---

## 3. IDENTIDADE VISUAL — PALETA (extraída da logo)

A logo é um "pin" de localização com um "C" estilizado e uma seta verde apontando para frente. Cores extraídas diretamente do arquivo da logo:

```css
/* AZUIS (base da marca) */
--navy-deep:      #001848;  /* azul mais profundo do pin */
--navy:           #003078;  /* azul principal / textos de marca */
--blue:           #0060A8;  /* azul médio */
--blue-bright:    #0078C8;  /* azul vibrante dos brilhos */
--blue-glow:      #008CDC;  /* azul mais claro / detalhes luminosos */

/* VERDES (seta / acento — usar para CTAs e destaques) */
--green-lime:     #8CC828;  /* verde-limão da seta */
--green:          #3C8C14;  /* verde médio */
--green-deep:     #146414;  /* verde escuro / sombra da seta */

/* NEUTROS */
--white:          #FFFFFF;
--off-white:      #F5F7FA;  /* fundos de seção alternados */
--gray-light:     #D8D8D8;
--gray:           #4F4F4F;  /* textos secundários */
--ink:            #0A1628;  /* texto principal escuro */
```

### Uso das cores

- **Fundos principais / hero:** gradiente de `--navy-deep` para `--navy` ou `--blue`. A logo tem esse gradiente azul metálico — reproduzir essa sensação.
- **CTAs primários (botões de ligar / WhatsApp):** usar o **verde** como cor de ação. O verde-limão da seta é o acento que "chama" o clique. Botão de WhatsApp pode usar o verde oficial do WhatsApp (#25D366) se ficar mais natural, mas o CTA de ligação usa o verde da marca.
- **Textos sobre fundo escuro:** branco.
- **Textos sobre fundo claro:** `--ink` para títulos, `--gray` para corpo.
- **Selos/badges de credenciamento DETRAN:** azul da marca com detalhe.

### Tipografia

- **Poppins** para tudo. Pesos: 700/800 para títulos (a logo usa fonte pesada e condensada — títulos devem ser fortes e impactantes), 400/500 para corpo.
- Títulos em caixa alta ou capitalizados, seguindo o peso visual da logo ("REMARQUE AQUI" é bold caixa alta).

### Sensação geral

Profissional, confiável, "oficial" (é credenciada DETRAN — precisa passar seriedade), mas moderna e limpa. Nada de visual poluído. O metálico azul da logo sugere um tratamento com gradientes suaves e talvez um leve brilho/sombra nos elementos de destaque, sem exagero.

---

## 4. ESTRUTURA DA PÁGINA (seções, em ordem)

1. **Header fixo (sticky):** logo à esquerda, botão "Ligar Agora" à direita (verde, sempre visível). No mobile, o botão de ligar fica proeminente.

2. **Hero (dobra principal):**
   - Título forte: foco em remarcação de chassi e motor + credenciamento DETRAN.
   - Subtítulo: proximidade (em frente ao DETRAN do Tarumã) + agilidade.
   - 2 CTAs grandes: "Ligar Agora" (verde, primário) e "WhatsApp" (secundário).
   - Selo visual de "Credenciada DETRAN-PR".
   - Fundo: gradiente azul da marca. Logo ou elemento gráfico do pin pode aparecer.

3. **Prova de credibilidade (faixa de selos):** credenciamento DETRAN, +X anos de experiência (herança Maxilaudo, +60.000 laudos), procedimento 100% legal, atendimento rápido. 3-4 itens com ícone.

4. **Serviços:** cards para os serviços principais:
   - Remarcação de Chassi
   - Remarcação de Motor
   - Regularização Veicular
   Cada card: ícone, título, descrição curta, e a intenção de levar ao contato.

5. **Por que a Remarque Aqui (diferenciais):** em frente ao DETRAN do Tarumã (conveniência), credenciada (legalidade), rápido (agilidade), experiência (herança Maxilaudo). Formato de lista com ícones ou blocos.

6. **Como funciona (passo a passo):** 3-4 passos simples — 1. Entre em contato / 2. Avaliação do veículo / 3. Procedimento autorizado / 4. Veículo regularizado. Passa clareza e reduz atrito.

7. **Localização:** destaque de que fica em frente ao DETRAN do Tarumã, Curitiba. Endereço, e espaço para um mapa (pode ser um embed do Google Maps ou um placeholder por enquanto). Reforçar a conveniência geográfica.

8. **CTA final (faixa de conversão):** fundo azul forte, título de urgência, botões de ligar e WhatsApp novamente.

9. **Footer:** nome da marca, telefone, WhatsApp, endereço, menção "Credenciada DETRAN-PR", e uma linha discreta "Uma unidade Maxilaudo" (opcional — confirmar com Luiz se quer associar publicamente). Copyright.

10. **Botão flutuante de WhatsApp:** fixo no canto inferior direito, verde, sempre visível ao rolar (padrão de mercado).

---

## 5. DADOS DE CONTATO (usar exatamente estes)

```
Nome da marca:      Remarque Aqui
Telefone / Ligação: (41) 99576-2174
WhatsApp:           5541995762174
Localização:        Em frente ao DETRAN do Tarumã — Curitiba, PR
Serviço:            Remarcação de Chassi e Motor (Credenciada DETRAN-PR)
```

### Links de ação (implementar assim)

- **Ligação:** `href="tel:+5541995762174"`
- **WhatsApp:** `href="https://wa.me/5541995762174?text=Olá! Gostaria de um orçamento para remarcação de chassi/motor."` (abrir em nova aba, `target="_blank"`, `rel="noopener noreferrer"`)

---

## 6. TRACKING (preparar, mas sem IDs ainda)

O Luiz vai fornecer os IDs depois. Por ora, deixar o código **preparado** para receber:

- Google Tag Manager (container ID virá depois) — deixar comentário no `layout.tsx` indicando onde entra o snippet do GTM (`<head>` e `<body>`).
- Todos os botões de ligação e WhatsApp devem ter atributos que facilitem o tracking por clique, por exemplo:
  - `data-evento="click_whatsapp"` no botão de WhatsApp
  - `data-evento="click_ligacao"` no botão de ligar
- Não implementar dataLayer manualmente ainda — só deixar os data-attributes e o ponto de entrada do GTM prontos.

---

## 7. SEO BÁSICO (impacta Quality Score do Google Ads)

No `layout.tsx` / metadata:

- `title`: algo como "Remarque Aqui | Remarcação de Chassi e Motor em Curitiba — Credenciada DETRAN-PR"
- `description`: incluir "remarcação de chassi", "remarcação de motor", "Curitiba", "DETRAN", "em frente ao DETRAN do Tarumã".
- `lang="pt-BR"` no html.
- Open Graph tags (título, descrição, imagem — pode usar a logo).
- Um `<h1>` claro no hero com a palavra-chave principal (remarcação de chassi / motor + Curitiba). Isso ajuda a relevância da landing para os termos do anúncio, melhorando o Índice de Qualidade e reduzindo o CPC.

---

## 8. ESTRUTURA DE PASTAS ESPERADA

```
/
├── app/
│   ├── layout.tsx          # metadata, fontes, GTM placeholder
│   ├── page.tsx            # monta todas as seções
│   ├── globals.css         # tailwind + variáveis de cor
│   ├── robots.ts           # robots.txt gerado
│   └── sitemap.ts          # sitemap.xml gerado
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Credibilidade.tsx
│   ├── Servicos.tsx
│   ├── Diferenciais.tsx
│   ├── ComoFunciona.tsx
│   ├── Localizacao.tsx
│   ├── CtaFinal.tsx
│   ├── Footer.tsx
│   ├── WhatsappFloat.tsx
│   ├── Logo.tsx            # recorta o pin da logo + wordmark em texto
│   ├── Botoes.tsx          # CTAs de ligação/WhatsApp reutilizáveis
│   └── DadosEstruturados.tsx  # JSON-LD de negócio local (SEO)
├── lib/
│   ├── contato.ts          # telefone, WhatsApp, endereço (fonte única)
│   └── site.ts             # URL pública do site
├── public/
│   └── logo.png
├── tailwind.config.ts      # cores da marca no theme.extend
├── eslint.config.mjs
├── package.json
└── CLAUDE.md
```

- Os dados de contato ficam **apenas** em `lib/contato.ts`. Nunca repita o
  telefone ou o link do WhatsApp direto num componente.
- Todos os componentes são Server Components: a página não envia nenhum
  JavaScript de interação, o que mantém o LCP baixo.

- As cores da paleta (seção 3) devem ser registradas no `tailwind.config.ts` em `theme.extend.colors` para poder usar como `bg-navy`, `text-green-lime`, etc.

---

## 9. REGRAS DE TRABALHO COM O LUIZ

- **Uma etapa de cada vez.** Ao construir, ir por partes e mostrar o resultado antes de seguir. Não gerar tudo de uma vez sem checkpoint.
- **Outputs completos e prontos para uso** — nada de "// resto do código aqui". Cada arquivo entregue completo.
- Se houver decisão de design ambígua, perguntar antes de assumir.
- Priorizar que a página **rode e faça deploy sem erro** na Vercel. Testar o build localmente (`npm run build`) antes de considerar pronto.
- Comunicação em português.

---

## 10. CRITÉRIO DE "PRONTO"

A landing está pronta quando:

- [ ] `npm run build` roda sem erros
- [ ] Responsiva de 320px até desktop
- [ ] Botões de ligação (`tel:`) e WhatsApp (`wa.me`) funcionando
- [ ] Paleta da marca aplicada corretamente
- [ ] Botão flutuante de WhatsApp presente
- [ ] Metadata e H1 com palavras-chave do Google Ads
- [ ] Placeholder do GTM no lugar certo
- [ ] Data-attributes de evento nos botões
- [ ] Deploy na Vercel funcionando com URL acessível (para usar como Final URL no Google Ads)
