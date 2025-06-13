# 📦 Projeto API + Site - Exemplo Node.js

Este repositório contém duas partes:

- **📁 API/** – Uma API em Node.js com Express e CORS.
- **📁 Site/** – Um exemplo de site que consome a API.

---

## 🚀 Requisitos

Antes de tudo, você precisa ter o **Node.js** instalado na sua máquina.

### 🔧 Como instalar o Node.js

1. Acesse o site oficial: [https://nodejs.org/](https://nodejs.org/)
2. Baixe e instale a versão **LTS** (recomendada para a maioria dos usuários).
3. Verifique se a instalação funcionou com os comandos no terminal:

```bash
node -v
npm -v
```

---

## 📂 Como usar este projeto

### 1. Clone o repositório

```bash
git clone https://github.com/caiopa3/API-Produtos-Sustentaveis.git
cd API-Produtos-Sustentaveis
```


---

### 2. Vá até a pasta da API

```bash
cd API
```

---

### 3. Instale as dependências

Este projeto usa os pacotes `express` e `cors`. Para instalar, rode:

```bash
npm install express cors
```

---

### 4. Inicie a API localmente

Depois de instalar os pacotes, rode o seguinte comando para iniciar a API:

```bash
node index.js
```

Se tudo estiver certo, a API vai iniciar e mostrar algo como:

```
Servidor rodando em http://localhost:3000
```

---

## 🌐 Sobre a pasta Site/

A pasta `Site/` contém um exemplo simples de como consumir a API usando JavaScript no navegador.

Você pode abrir o arquivo `index.html` diretamente no seu navegador para testar a integração com a API.
Se os produtos estiverem aparecendo, funcionou!

---

## 🛠️ Tecnologias usadas

- Node.js
- Express
- CORS
- HTML/CSS (exemplo no Site)

---

## 🌐 Como Integrar com Front-End
Você pode consumir esta API facilmente em seu front-end com fetch():
```
fetch('http://localhost:3000/produtos')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
  ```
## 📚 Créditos Acadêmicos
Este projeto foi desenvolvido como parte da disciplina Programação Web 3, do curso Técnico em Desenvolvimento de Sistemas, sob orientação dos professores Fátima e Cláudio.

## ❓Dúvidas?

Se tiver qualquer dúvida ou problema, sinta-se à vontade para abrir uma *issue* aqui no repositório!
