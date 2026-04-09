const prisma = require("../config/database");

async function create(data) {
  return await prisma.card.create({
    data
  });
}

async function getAll() {
  return await prisma.card.findMany();
}

module.exports = { create, getAll };