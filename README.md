# 🚗 AutoPrime — Sistema Web Node.js

> Projeto acadêmico desenvolvido por **Vanessa Carvalho** — Desenvolvedora Backend ASP.NET Core  
> Disciplina: Desenvolvimento Web com Node.js

---

## 📋 Sobre o Projeto

O **AutoPrime** é um sistema web completo para uma concessionária de veículos, construído com Node.js e Express.js. 
Todos os dados dos veículos são carregados dinamicamente a partir de arquivos JSON, sem necessidade de banco de dados.

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Descrição |
|---|---|
| Node.js | Ambiente de execução JavaScript server-side |
| Express.js | Framework web para gerenciamento de rotas |
| JSON | Armazenamento dos dados dos veículos |
| HTML5 + CSS3 | Interface gerada dinamicamente no servidor |
| Google Fonts | Tipografia (Bebas Neue + Barlow) |

---

## 🚀 Como Executar

### Pré-requisitos
- [Node.js](https://nodejs.org/) instalado na máquina

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/SEU_USUARIO/autoprime.git

# 2. Entre na pasta do projeto
cd autoprime

# 3. Instale as dependências
npm install

# 4. Inicie o servidor
npm start
```

Acesse no navegador: **http://localhost:6200**

---

## 🗺️ Rotas Disponíveis

| Rota | Descrição |
|---|---|
| `/` | Apresentação geral do projeto |
| `/quemsou` | Dados da desenvolvedora e escopo do projeto |
| `/ofertas` | 6 veículos em promoção com descontos |
| `/novos` | 6 veículos zero km com descrição e fotos |
| `/seminovos` | 6 seminovos com pontos positivos e negativos |

---

## 📁 Estrutura de Pastas

```
concessionaria/
├── server.js              ← Ponto de entrada — inicializa o servidor na porta 6200
├── package.json           ← Dependências e scripts do projeto
├── .gitignore
├── README.md
│
├── public/
│   └── style.css          ← Estilos globais da aplicação
│
└── src/
    ├── layout.js          ← Template HTML compartilhado (nav + footer)
    ├── helpers.js         ← Funções utilitárias (ex: formatBRL)
    │
    ├── routes/
    │   ├── home.js        ← Rota /
    │   ├── quemsou.js     ← Rota /quemsou
    │   ├── ofertas.js     ← Rota /ofertas
    │   ├── novos.js       ← Rota /novos
    │   └── seminovos.js   ← Rota /seminovos
    │
    └── data/
        ├── ofertas.json   ← 6 veículos em promoção
        ├── novos.json     ← 6 veículos zero km
        └── seminovos.json ← 6 veículos seminovos
```

---

## 📦 Dependências

```json
{
  "express": "^4.18.2"
}
```

---

## 👩‍💻 Autora

**Poliana e Vanessa**  
ESTUDANTE DA FATEC 

---

*Projeto acadêmico — FATEC · 2026*
