const prisma = require("../config/database");

async function create(data) {
  return await prisma.category.create({
    data
  });
}

async function getAll() {
  return await prisma.category.findMany();
}

module.exports = { create, getAll };