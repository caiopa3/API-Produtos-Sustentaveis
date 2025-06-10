const express = require('express');
const router = express.Router();

let produtos = [
  { id: 1, nome: 'Shampoo', preco: 15, imagem: 'images/shampoo.jpg' },
  { id: 2, nome: 'Creme', preco: 30, imagem: 'images/creme.jpg' },
  { id: 3, nome: 'Sabonete', preco: 10, imagem: 'images/sabonete.jpg' },
  { id: 4, nome: 'Escova de Bambu', preco: 12, imagem: 'images/escova.jpg' }
];

router.get('/', (req, res) => res.json(produtos));

router.post('/', (req, res) => {
  produtos.push(req.body);
  res.status(201).json(req.body);
});

router.put('/:id', (req, res) => {
  const i = produtos.findIndex(p => p.id == req.params.id);
  produtos[i] = req.body;
  res.json(req.body);
});

router.delete('/:id', (req, res) => {
  produtos = produtos.filter(p => p.id != req.params.id);
  res.status(204).send();
});

module.exports = router;
