const service = require("../services/cardService");

async function create(req, res) {
  const card = await service.create(req.body);
  res.json(card);
}

async function list(req, res) {
  const cards = await service.getAll();
  res.json(cards);
}

module.exports = { create, list };