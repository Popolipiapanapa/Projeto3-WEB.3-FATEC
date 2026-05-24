const { Router } = require('express');
const layout     = require('../layout');
const { formatBRL } = require('../helpers');
const novos      = require('../data/novos.json');

const router = Router();


router.get('/novos', (req, res) => {
  const cards = novos.map(v => `
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
          <span class="badge badge-green">Zero KM</span>
        </div>
        ${v.destaque
          ? `<div style="position:absolute;top:0.75rem;right:0.75rem">
               <span class="badge badge-gold">${v.destaque}</span>
             </div>`
          : ''}
      </div>
      <div class="card-body">
        <div class="card-brand">${v.marca}</div>
        <div class="card-title">${v.modelo}</div>
        <div class="card-versao">${v.versao}</div>
        <div class="price-tag">
          <span class="price-new">${formatBRL(v.preco)}</span>
        </div>
        <p class="desc">${v.descricao}</p>
        <div class="meta-grid">
          <div class="meta-item"><strong>${v.motor}</strong>Motor</div>
          <div class="meta-item"><strong>${v.potencia}</strong>Potência</div>
          <div class="meta-item"><strong>${v.transmissao}</strong>Câmbio</div>
          <div class="meta-item"><strong>${v.consumo_cidade}</strong>Consumo (cidade)</div>
        </div>
        <div style="margin-top:0.75rem">
          <span style="font-size:0.72rem;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--muted);display:block;margin-bottom:0.5rem">
            Cores Disponíveis
          </span>
          <div class="cores">
            ${v.cores.map(c => `<span>${c}</span>`).join('')}
          </div>
        </div>
      </div>
    </div>
  `).join('');

  const content = `
    <div class="hero" style="padding:4rem 2rem 3rem">
      <div class="hero-tag">Zero Quilômetro</div>
      <h1>Veículos<br><em>Novos</em></h1>
      <p>Linha completa de veículos zero km com toda a garantia de fábrica e a mais alta tecnologia.</p>
    </div>
    <div class="divider"></div>

    <section>
      <div class="container">
        <div class="section-title">6 Modelos<br><em>Zero KM</em></div>
        <p class="section-sub">
          Descrição e fotos extraídas diretamente do arquivo
          <code style="color:var(--red)">novos.json</code>
        </p>
        <div class="grid grid-3">${cards}</div>
      </div>
    </section>
  `;

  res.send(layout('Veículos Novos', content, '/novos'));
});

module.exports = router;
