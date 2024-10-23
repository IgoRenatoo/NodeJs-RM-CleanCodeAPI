import express from 'express' // Importa a biblioteca Express
import 'dotenv/config' // Importa as variáveis de ambiente do arquivo .env

// Inicializa o servidor Express
const server = express()

// Define a rota principal
server.get('/', (req, res) => {
  res.send('Página carregada!')
})

// O servidor escuta na porta definida no arquivo .env
server.listen(process.env.PORT, () => { console.log('Servidor conectado!') })
