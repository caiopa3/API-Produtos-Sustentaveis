const express = require('express');
const cors = require('cors');
const app = express();
const produtosRoute = require('./routes/produtos');

app.use(cors());
app.use(express.json());
app.use('/produtos', produtosRoute);

app.get('/', (req, res) => res.send('API funcionando!'));

app.listen(3000, () => console.log('http://localhost:3000'));

app.use('/images', express.static('images'));
