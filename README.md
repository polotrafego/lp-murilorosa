# Murilo Rosa · O Terceiro Sinal — Landing Page

Landing page do palestrante exclusivo **Murilo Rosa** (Polo Palestrantes), com a
palestra-show **"O Terceiro Sinal — o poder do entusiasmo"**.

Site estático (HTML + CSS + JS puros), pronto para deploy no **Vercel** e versionamento no **GitHub**.

## Estrutura

```
murilo-rosa-lp/
├── index.html          # Página principal (LP)
├── obrigado.html       # Página de agradecimento (pós-formulário)
├── vercel.json         # Config de deploy (clean URLs + cache de assets)
├── css/styles.css      # Sistema de design completo
├── js/main.js          # Carrossel, FAQ e lightbox
└── assets/
    ├── fonts/          # Articulat CF (400–900) + Misky
    └── img/
        ├── logos/      # Logo Polo (branco)
        └── photos/     # Fotos do Murilo (hero, sobre, cta, palco, obrigado)
```

## Identidade

- **Fontes:** Articulat CF (corpo e títulos) + Misky (script de destaque). A fonte Crimson (marca Polo) não é usada nesta LP.
- **Direção visual:** híbrido — hero e footer escuros/teatrais (dourado sobre preto), corpo claro. Acento vermelho da Polo em detalhes.
- **Header e footer:** estrutura fiel à LP do Gabriel Carneiro, reidentificada para o Murilo.

## Formulário

O formulário está em **modo visual** (sem integração de envio). Ao submeter,
redireciona para `obrigado.html`. A integração com o **Leadlovers** será feita
posteriormente — basta apontar o `action`/script do `<form>` em `index.html`
para o endpoint/formulário do Leadlovers e manter o redirect para `obrigado.html`.

## Pendências (aguardando informação)

- **Link do vídeo da palestra:** o botão "Assista ao vídeo" (seção "A palestra")
  aponta temporariamente para a galeria de fotos (`#depois`). Substituir o `href`
  do link `#btn-video` pela URL real (YouTube/Vimeo) quando disponível.
- **WhatsApp:** o botão da página de obrigado usa `5512982506250` (contato Polo do
  kit). Ajustar se o número de atendimento for outro.
- **Depoimentos de clientes / logos de marcas:** podem ser adicionados quando disponíveis.

## Deploy no Vercel

1. Suba a pasta `murilo-rosa-lp/` para um repositório no GitHub.
2. No Vercel: **New Project → Import** o repositório.
3. Framework Preset: **Other** (site estático). Sem build command; output = raiz.
4. Deploy.

## Rodar localmente

Qualquer servidor estático, por exemplo:

```bash
npx serve .
```
