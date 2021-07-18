const express = require('express');
const cors = require('cors');
require('dotenv').config()

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8000;
let id = 1;

let transationDataBase = []

app.get('/', (req, res) => {
  res.status(200).json(transationDataBase);
});

app.post('/api/v1/transacao', (req, res) => {
  let transation = req.body;
  transation = {"id": id++, ...transation }
  transationDataBase.push(transation);
  res.status(201).send({"aceito": true});
});

app.delete('/api/v1/transacao/deleteall', (_req, res) => {
  transationDataBase = []
  res.status(200).send({"delete": true })
});

app.listen(PORT, () => {
  console.log(`Escutando na porta ${PORT}`)
});

