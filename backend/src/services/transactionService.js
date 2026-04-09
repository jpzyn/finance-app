const prisma = require("../config/database");

async function getAll() {
  return await prisma.transaction.findMany({
    include: {
      card: true,
      category: true
    }
  });
}

async function create(data) {
  return await prisma.transaction.create({
    data: {
      tipo: data.tipo,
      valor: data.valor,
      cardId: data.cardId,
      categoryId: data.categoryId
    }
  });
} 

async function getBalance() {
  const transactions = await prisma.transaction.findMany();

  let saldo = 0;

  for (let t of transactions) {
    if (t.tipo === "receita") saldo += t.valor;
    else saldo -= t.valor;
  }

  return saldo;
}

module.exports = {
    getAll,
    create,
    getBalance
};