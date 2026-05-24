const { Router } = require('express');
const layout     = require('../layout');

const router = Router();


router.get('/quemsou', (req, res) => {
  const escopoItems = [
    ['Porta',     '6200',          'Servidor rodando exclusivamente nesta porta'     ],
    ['Framework', 'Express.js',    'Gerenciamento de rotas e middlewares'            ],
    ['Dados',     'JSON Files',    'ofertas.json · novos.json · seminovos.json'      ],
    ['Front-end', 'HTML/CSS',      'Templates gerados dinamicamente pelo Node'       ],
    ['Rotas',     '5 rotas',       '/ · /quemsou · /ofertas · /novos · /seminovos'  ],
  ];

  const escopoCards = escopoItems.map(([k, v, d]) => `
    <div class="route-card" style="flex-direction:column;align-items:flex-start;gap:0.35rem">
      <div style="display:flex;justify-content:space-between;width:100%;align-items:center">
        <span style="font-size:0.72rem;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--muted)">${k}</span>
        <span style="font-family:'Bebas Neue',sans-serif;letter-spacing:1px;color:var(--red);font-size:1.1rem">${v}</span>
      </div>
      <span style="font-size:0.82rem;color:var(--muted)">${d}</span>
    </div>
  `).join('');

  const content = `
    <div class="hero" style="padding:4rem 2rem 3rem">
      <div class="hero-tag">A Desenvolvedora</div>
      <h1>Vanessa<br><em>Carvalho</em></h1>
      <p style="font-size:1rem;letter-spacing:2px;text-transform:uppercase;color:var(--muted);font-weight:600">
        Desenvolvedora Backend · ASP.NET Core
      </p>
    </div>
    <div class="divider"></div>

    <section>
      <div class="container">
        <div class="about-grid">

          <!-- Coluna esquerda: dados da aluna -->
          <div>
            <div class="about-label">Sobre a Aluna</div>
            <h2 class="section-title" style="font-size:2.5rem">Backend<br><em>Developer</em></h2>

            <p class="desc" style="margin-top:1.25rem;font-size:0.95rem">
              Olá! Meu nome é <strong style="color:var(--text)">Poliana Mondadori</strong> estudante da FATEC ZONA SUL. Este projeto foi desenvolvido como trabalho prático da disciplina de <strong style="color:var(--text)">Desenvolvimento Web com Node.js</strong>, explorando um ecossistema diferente do meu stack principal.
            </p>
            <p class="desc" style="font-size:0.95rem">
              A aplicação demonstra domínio de conceitos de back-end como criação de servidores HTTP, roteamento, leitura de arquivos JSON e geração dinâmica de HTML.
            </p>

            <div style="margin-top:1.5rem">
              <div class="about-label">Stack Principal</div>
              <ul class="tech-list">
                <li>ASP.NET Core — framework principal de desenvolvimento</li>
                <li>C# — linguagem de programação backend</li>
                <li>Entity Framework Core — ORM para acesso a dados</li>
                <li>SQL Server / PostgreSQL — bancos de dados relacionais</li>
                <li>REST APIs — design e desenvolvimento de APIs</li>
              </ul>
            </div>

            <div class="stat-row" style="margin-top:2rem">
              <div class="stat"><h3>.NET</h3><p>Stack Principal</p></div>
              <div class="stat"><h3>Node</h3><p>Este Projeto</p></div>
            </div>
          </div>

          <!-- Coluna direita: card de identificação + escopo -->
          <div>
            <div class="about-label">Identificação</div>
            <div style="background:var(--card);border:1px solid var(--border);border-radius:8px;padding:1.5rem;margin-bottom:1.5rem">
              <div style="display:flex;align-items:center;gap:1rem;margin-bottom:1rem">
                <div style="width:52px;height:52px;border-radius:50%;background:linear-gradient(135deg,var(--red),#ff6b6b);display:flex;align-items:center;justify-content:center;font-family:'Bebas Neue',sans-serif;font-size:1.4rem;color:#fff;flex-shrink:0">VC</div>
                <div>
                  <div style="font-family:'Bebas Neue',sans-serif;font-size:1.4rem;letter-spacing:1px">Vanessa Carvalho</div>
                  <div style="font-size:0.78rem;color:var(--red);font-weight:600;letter-spacing:1px;text-transform:uppercase">Desenvolvedora Backend</div>
                </div>
              </div>
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.6rem">
                ${[
                  ['Especialidade', 'ASP.NET Core'],
                  ['Linguagem',     'C# / JavaScript'],
                  ['Área',          'Backend Dev'],
                  ['Projeto',       'Node.js'],
                ].map(([label, valor]) => `
                  <div style="background:var(--mid);border-radius:4px;padding:0.6rem 0.8rem">
                    <div style="font-size:0.68rem;color:var(--muted);letter-spacing:1px;text-transform:uppercase;margin-bottom:0.2rem">${label}</div>
                    <div style="font-size:0.85rem;color:var(--text);font-weight:600">${valor}</div>
                  </div>
                `).join('')}
              </div>
            </div>

            <div class="about-label">Escopo do Projeto</div>
            <div style="display:flex;flex-direction:column;gap:1rem">
              ${escopoCards}
            </div>

            <div style="margin-top:2rem">
              <div class="about-label">Estrutura de Arquivos</div>
              <pre style="background:var(--card);border:1px solid var(--border);border-radius:6px;padding:1.25rem;font-size:0.82rem;color:var(--muted);overflow-x:auto;line-height:1.8"><span style="color:var(--text)">concessionaria/</span>
├── <span style="color:var(--red)">server.js</span>            ← Ponto de entrada (porta 6200)
├── package.json
├── public/
│   └── <span style="color:#4FC3F7">style.css</span>        ← Estilos globais
└── src/
    ├── layout.js        ← Template HTML compartilhado
    ├── helpers.js       ← Funções utilitárias
    ├── routes/
    │   ├── home.js      ← Rota /
    │   ├── quemsou.js   ← Rota /quemsou
    │   ├── ofertas.js   ← Rota /ofertas
    │   ├── novos.js     ← Rota /novos
    │   └── seminovos.js ← Rota /seminovos
    └── data/
        ├── <span style="color:var(--gold)">ofertas.json</span>
        ├── <span style="color:var(--gold)">novos.json</span>
        └── <span style="color:var(--gold)">seminovos.json</span></pre>
            </div>
          </div>

        </div>
      </div>
    </section>
  `;

  res.send(layout('Quem Somos', content, '/quemsou'));
});

module.exports = router;
