const { Router } = require('express');
const layout     = require('../layout');
const { formatBRL } = require('../helpers');
const ofertas    = require('../data/ofertas.json');

const router = Router();


router.get('/ofertas', (req, res) => {
  const cards = ofertas.map(v => `
    <div class="card">
      <img
        class="card-img"
        src="${v.imagem}"
        alt="${v.marca} ${v.modelo}"
        loading="lazy"
        onerror="this.src='https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=80'"
      >
      <div class="card-body">
        <div class="card-brand">${v.marca}</div>
        <div class="card-title">${v.modelo}</div>
        <div class="card-versao">${v.ano} · ${v.cor} · ${v.combustivel}</div>
        <span class="badge badge-red">🔥 ${v.desconto}% OFF</span>
        <div class="price-tag">
          <span class="price-new">${formatBRL(v.preco_oferta)}</span>
          <span class="price-old">${formatBRL(v.preco_original)}</span>
        </div>
        <div class="meta-grid">
          <div class="meta-item">
            <strong>${v.km.toLocaleString('pt-BR')} km</strong>Quilometragem
          </div>
          <div class="meta-item">
            <strong>${formatBRL(v.preco_original - v.preco_oferta)}</strong>Economia
          </div>
        </div>
        <a href="/seminovos" class="btn" style="width:100%;justify-content:center;font-size:0.78rem">
          Saiba Mais
        </a>
      </div>
    </div>
  `).join('');

  const content = `
    <div class="hero" style="padding:4rem 2rem 3rem">
      <div class="hero-tag">Tempo Limitado</div>
      <h1>Nossas<br><em>Ofertas</em></h1>
      <p>Veículos selecionados com descontos exclusivos. Não perca essa oportunidade!</p>
    </div>
    <div class="divider"></div>

    <section>
      <div class="container">
        <div class="section-title">6 Veículos<br><em>em Promoção</em></div>
        <p class="section-sub">
          Preços especiais extraídos diretamente do arquivo
          <code style="color:var(--red)">ofertas.json</code>
        </p>
        <div class="grid grid-3">${cards}</div>
      </div>
    </section>
  `;

  res.send(layout('Ofertas', content, '/ofertas'));
});

module.exports = router;
