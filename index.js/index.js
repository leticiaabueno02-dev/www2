require('dotenv').config();
const express = require('express');
const app = express();

// Habilitada orecebimento de JSON no corpo das requisições
app.use(express.json());

// rota GET raiz
app.get('/', (req,res) => {
    return res.json({mensagem: 'Servidor rodando com sucesso!!!'});
});

// rota post para usuario
app.post('/usuario', (req,res) => {
    const {nome, idade} = req.body;
    return res.json({
        mensagem: 'Usuario cadastrado com sucesso!',
        dados: {nome, idade }
    });

});

// rota post para produto
app.post('/produto', (req,res) => {
    const {nomeProduto, marca, quantidade, preco} = req.body;
    return res.json({
        mensagem: 'Produto cadastrado com sucesso!',
        dados: { nomeProduto, marca, quantidade, preco}
    });
});

// porta do servidor usando a variavel do env 
const PORT = process.env.PORT || 4500;
app.listen(PORT,() => {
    console.log(`Servidor rodando na porta ${PORT}`);
});