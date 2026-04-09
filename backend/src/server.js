const express = require('express');
const transactionRoutes = require('./routes/transactionRoutes');
const cardRoutes = require("./routes/cardRoutes");
const categoryRoutes = require("./routes/categoryRoutes");

const app = express();  

app.use(express.json());

app.use("/transactions", transactionRoutes);
app.use("/cards", cardRoutes);
app.use("/categories", categoryRoutes);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});