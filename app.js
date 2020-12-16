const express = require('express');
const app = express();

app.use(express.json())

const produtos = [
    {
        produto: "Sistema com 1 Caixa Dágua",
        descricao: "Sistema contendo 1 caixa dagua e algumas bombonas e um sump"
    },
    {
        produto: "Sistema com 2 Caixa Dágua",
        descricao: "Sistema contendo 2 caixa dagua e algumas bombonas e um sump"
    }
]

app.get('/produtos', (req, res) => {
    return res.json(produtos)
})

app.get('/produto/:id', (req, res)=> {
    const {id} = req.params
    return res.json(produtos[id])
})

app.listen(3000, ()=> console.log('Rodando 3000'))