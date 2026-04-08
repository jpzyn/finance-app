const express = require('express');
const transactionRoutes = require('./routes/transactionRoutes');

const app = express();  

app.use(express.json());

app.use("/transactions", transactionRoutes);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});