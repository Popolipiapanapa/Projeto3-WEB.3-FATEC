// ─── Layout compartilhado ──────────────────────────────────────────────────────
// Gera o HTML completo da página envolvendo o conteúdo de cada rota.

const links = [
  { path: '/',          label: 'Início'     },
  { path: '/quemsou',   label: 'Quem Somos' },
  { path: '/ofertas',   label: 'Ofertas'    },
  { path: '/novos',     label: 'Novos'      },
  { path: '/seminovos', label: 'Seminovos'  },
];

/**
 * @param {string} title     - Título da aba do navegador
 * @param {string} content   - HTML do corpo da página
 * @param {string} activePath - Caminho ativo para destacar no menu
 * @returns {string} HTML completo
 */
function layout(title, content, activePath = '') {
  const navLinks = links
    .map(l => `<a href="${l.path}" class="${activePath === l.path ? 'active' : ''}">${l.label}</a>`)
    .join('');

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} — AutoPrime</title>
  <link rel="stylesheet" href="/style.css">
</head>
<body>

  <nav>
    <a href="/" class="nav-logo">AUTO<span>PRIME</span></a>
    <div class="nav-links">${navLinks}</div>
  </nav>

  ${content}

  <footer>
    <div class="logo">AUTOPRIME</div>
    <p>© 2026 AutoPrime Concessionária · Projeto Acadêmico Node.js · Todos os direitos reservados</p>
    <p style="margin-top:0.5rem">Porta 6200 · Express.js · Node.js</p>
  </footer>

</body>
</html>`;
}

module.exports = layout;
