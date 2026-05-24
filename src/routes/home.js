const { Router } = require('express');
const layout     = require('../layout');

const router = Router();


router.get('/', (req, res) => {
  const routes = [
    { path: '/',          desc: 'Página inicial com apresentação do projeto'    },
    { path: '/quemsou',   desc: 'Dados da aluna e escopo do trabalho'           },
    { path: '/ofertas',   desc: '6 veículos em promoção com preços especiais'   },
    { path: '/novos',     desc: '6 veículos zero km com descrição e fotos'      },
    { path: '/seminovos', desc: '6 seminovos com pontos positivos e negativos'  },
  ];

  const routeCards = routes.map(r => `
    <a href="${r.path}" style="text-decoration:none">
      <div class="route-card">
        <span class="route-path">${r.path}</span>
        <span class="route-desc">${r.desc}</span>
      </div>
    </a>
  `).join('');

  const content = `
    <div class="hero">
      <div class="hero-tag">★ Sistema Web · Node.js + Express</div>
      <h1>Bem-vindo à<br><em>AutoPrime</em></h1>
      <p>Uma concessionária completa construída com Node.js, Express e dados dinâmicos em JSON.
         Explore nosso catálogo de veículos novos, seminovos e ofertas imperdíveis.</p>
      <a href="/ofertas" class="btn">Ver Ofertas</a>
      <a href="/novos"   class="btn btn-ghost">Veículos Novos</a>
    </div>
    <div class="divider"></div>

    <section>
      <div class="container">
        <div class="about-grid">

          <div>
            <div class="about-label">Sobre o Projeto</div>
            <h2 class="section-title">Sistema Web<br><em>Completo</em></h2>
            <p class="desc" style="margin-top:1rem">
              Este projeto é um sistema web desenvolvido com Node.js e Express, servindo na porta 6200.
              Todas as informações dos veículos são carregadas dinamicamente a partir de arquivos JSON,
              demonstrando integração entre back-end e front-end sem banco de dados.
            </p>
            <div class="stat-row">
              <div class="stat"><h3>5</h3><p>Rotas</p></div>
              <div class="stat"><h3>18</h3><p>Veículos</p></div>
              <div class="stat"><h3>3</h3><p>Arquivos JSON</p></div>
            </div>
          </div>

          <div>
            <div class="about-label">Stack Tecnológica</div>
            <ul class="tech-list" style="margin-bottom:2rem">
              <li>Node.js — ambiente de execução JavaScript server-side</li>
              <li>Express.js — framework web minimalista e robusto</li>
              <li>JSON — armazenamento e leitura de dados dos veículos</li>
              <li>HTML5 + CSS3 — interface moderna e responsiva</li>
              <li>Google Fonts — tipografia com Bebas Neue e Barlow</li>
            </ul>
            <div class="about-label">Rotas Disponíveis</div>
            <div style="display:flex;flex-direction:column;gap:0.6rem">
              ${routeCards}
            </div>
          </div>

        </div>
      </div>
    </section>
  `;

  res.send(layout('Início', content, '/'));
});

module.exports = router;
