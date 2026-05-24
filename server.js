const express    = require('express');
const path       = require('path');

const homeRoute      = require('./src/routes/home');
const quemsouRoute   = require('./src/routes/quemsou');
const ofertasRoute   = require('./src/routes/ofertas');
const novosRoute     = require('./src/routes/novos');
const semiovosRoute  = require('./src/routes/seminovos');

const app  = express();
const PORT = 6200;

// ─── Arquivos estáticos (CSS) ──────────────────────────────────────────────────
app.use(express.static(path.join(__dirname, 'public')));

// ─── Rotas ────────────────────────────────────────────────────────────────────
app.use(homeRoute);
app.use(quemsouRoute);
app.use(ofertasRoute);
app.use(novosRoute);
app.use(semiovosRoute);

// ─── 404 ──────────────────────────────────────────────────────────────────────
const layout = require('./src/layout');

app.use((req, res) => {
  const content = `
    <div class="hero" style="min-height:60vh;display:flex;flex-direction:column;align-items:center;justify-content:center">
      <div class="hero-tag">Erro 404</div>
      <h1><em>Página</em><br>Não Encontrada</h1>
      <p>A rota solicitada não existe neste servidor.</p>
      <a href="/" class="btn">Voltar ao Início</a>
    </div>
  `;
  res.status(404).send(layout('404 - Não Encontrado', content));
});

// ─── Iniciar servidor ─────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n🚗  AutoPrime — Servidor rodando em http://localhost:${PORT}`);
  console.log('\n  Rotas disponíveis:');
  console.log(`  →  http://localhost:${PORT}/`);
  console.log(`  →  http://localhost:${PORT}/quemsou`);
  console.log(`  →  http://localhost:${PORT}/ofertas`);
  console.log(`  →  http://localhost:${PORT}/novos`);
  console.log(`  →  http://localhost:${PORT}/seminovos\n`);
});
