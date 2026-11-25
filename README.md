# meCast — MVP local

## Funcionalidades
- Acesso demonstrativo por nome/e-mail.
- Dashboard com séries, episódios, duração e tamanho dos arquivos.
- CRUD de séries e episódios.
- Upload de áudio com validação de tipo e limite de 100 MB.
- Metadados em LocalStorage e arquivos em IndexedDB.
- Reprodução real no navegador.
- Pesquisa/filtro de episódios.
- Exportação de RSS XML por série.
- Backup JSON dos metadados.
- Exclusão de séries, episódios e dados locais.
- Layout responsivo.

## Limitações
Esta versão não tem backend, autenticação real, PostgreSQL, MinIO, Redis ou FFmpeg. O status publicado indica que o áudio foi salvo localmente e está disponível neste navegador. O RSS é um XML inicial e ainda não possui URLs públicas de mídia, portanto não deve ser usado como feed público de produção. O backup JSON não inclui os arquivos de áudio.

## Executar no Windows
1. Extraia a pasta.
2. Abra PowerShell dentro de `meCast_MVP`.
3. Execute `npm install`.
4. Execute `npm run dev`.
5. Abra o endereço indicado pelo Vite, normalmente http://localhost:5173.

## Produção
`npm run build` gera a pasta `dist/`.

Requer Node.js 20+ e npm.
