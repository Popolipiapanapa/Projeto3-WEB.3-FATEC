const { Router } = require('express');
const layout        = require('../layout');
const { formatBRL } = require('../helpers');
const seminovos     = require('../data/seminovos.json');

const router = Router();


router.get('/seminovos', (req, res) => {
  const cards = seminovos.map(v => `
    <div class="card">
      <div style="position:relative">
        <img
          class="card-img"
          src="${v.imagem}"
          alt="${v.marca} ${v.modelo}"
          loading="lazy"
          onerror="this.src='https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=80'"
        >
        <div style="position:absolute;top:0.75rem;left:0.75rem">
          <span class="badge badge-gold">Seminovo</span>
        </div>
      </div>
      <div class="card-body">
        <div class="card-brand">${v.marca}</div>
        <div class="card-title">${v.modelo}</div>
        <div class="card-versao">${v.versao} · ${v.ano} · ${v.cor}</div>
        <div class="price-tag">
          <span class="price-new">${formatBRL(v.preco)}</span>
        </div>
        <div class="meta-grid" style="margin-bottom:1.25rem">
          <div class="meta-item">
            <strong>${v.km.toLocaleString('pt-BR')} km</strong>Quilometragem
          </div>
          <div class="meta-item">
            <strong>${v.combustivel}</strong>Combustível
          </div>
        </div>
        <div class="pros-cons">
          <div class="pros-cons-col pros">
            <h4>Positivos</h4>
            <ul>${v.positivos.map(p => `<li>${p}</li>`).join('')}</ul>
          </div>
          <div class="pros-cons-col cons">
            <h4>Negativos</h4>
            <ul>${v.negativos.map(n => `<li>${n}</li>`).join('')}</ul>
          </div>
        </div>
        <a href="/ofertas" class="btn" style="width:100%;justify-content:center;font-size:0.78rem;margin-top:1.25rem">
          Ver Ofertas Similares
        </a>
      </div>
    </div>
  `).join('');

  const content = `
    <div class="hero" style="padding:4rem 2rem 3rem">
      <div class="hero-tag">Usados Certificados</div>
      <h1>Veículos<br><em>Seminovos</em></h1>
      <p>Veículos com histórico verificado e análise completa de pontos fortes e fracos para sua decisão consciente.</p>
    </div>
    <div class="divider"></div>

    <section>
      <div class="container">
        <div class="section-title">6 Modelos<br><em>Seminovos</em></div>
        <p class="section-sub">
          Características positivas e negativas extraídas do arquivo
          <code style="color:var(--red)">seminovos.json</code>
        </p>
        <div class="grid grid-2">${cards}</div>
      </div>
    </section>
  `;

  res.send(layout('Seminovos', content, '/seminovos'));
});

module.exports = router;
