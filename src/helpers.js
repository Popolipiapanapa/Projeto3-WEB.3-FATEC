// ─── Funções utilitárias ───────────────────────────────────────────────────────

/**
 * Formata um número como moeda brasileira (R$).
 * @param {number} value
 * @returns {string}
 */
function formatBRL(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

module.exports = { formatBRL };
