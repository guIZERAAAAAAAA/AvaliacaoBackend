import express from 'express'
import bancoDeDados from './repository/index.js'
const app = express()

app.get("/api/cachorro/:id", (req, res) => {
    const id = req.params.id

    const cachorro = bancoDeDados.find(it => it.id == id)

    if (!cachorro) {
        res.send({ message: "cachorro não encontrado " })
        return
    }

    res.send({ cachorro })

})

app.get("/api/cachorro", (req, res) => {
    const { id, name, raca } = req.query

    if (!id || !name || !raca) {
        res.send({ message: " Favor informe o id , name , raça" })
        return
    }

    bancoDeDados.push({ id, name, raça })
    res.send({ message: "Cachorro vinculado " })
})


app.listen(3000, () => {
    console.log("Servidor escutando na porta 3000")
})