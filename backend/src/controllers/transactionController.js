const service = require('../services/transactionService');

async function list(req, res) {
  const data = await service.getAll();
  res.json(data);
}

async function create(req, res) {
    const nova = await service.create(req.body);
    res.json(nova);
}

async function balance(req, res) {
    const saldo = await service.getBalance();
    res.json({ saldo });
}

module.exports = {
  list,
  create,
  balance
};