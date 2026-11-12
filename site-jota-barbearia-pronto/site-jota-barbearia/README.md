# Site da Jota Barbearia

Site de apresentação e planos de assinatura (React). Não usa banco de dados nem servidor: é só a pasta do site.

## Onde mudar as coisas

- **Textos, preços e links** (WhatsApp, AppBarber, Google Maps): `src/App.js`, no começo do arquivo e nas seções da página.
- **Fotos e logo**: pasta `public/images/` (para trocar uma foto, substitua o arquivo mantendo o mesmo nome).
- **Cores e estilo**: `src/App.css`.

## Como publicar de graça (Netlify)

1. Crie uma conta em netlify.com.
2. Envie esta pasta para um repositório no GitHub (ou use "Import from Git").
3. No Netlify: **Add new site > Import an existing project**, escolha o repositório.
4. Ele já lê o arquivo `netlify.toml` e preenche tudo sozinho. Clique em **Deploy**.
5. Quando terminar, você recebe um endereço como `nome.netlify.app`. Depois dá para ligar o seu domínio.

Outras opções gratuitas: Cloudflare Pages ou Vercel. Use estes dados:
- Comando de build: `npm install --legacy-peer-deps && CI=false npm run build`
- Pasta de saída: `build`

## Rodar no seu computador (opcional)

Precisa do Node.js instalado.

```
npm install --legacy-peer-deps
npm start
```
