const service = require("../services/categoryService");

async function create(req, res) {
  const category = await service.create(req.body);
  res.json(category);
}

async function list(req, res) {
  const categories = await service.getAll();
  res.json(categories);
}

module.exports = { create, list };