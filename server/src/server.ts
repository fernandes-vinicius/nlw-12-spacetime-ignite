import fastify from 'fastify'
import cors from '@fastify/cors'

import { memoriesRoutes } from './routes/memories'

const app = fastify()

app.register(cors, {
  origin: true, // TRUE: todas URLs de front-end poderão acessar o nosso back-end
  // origin: ['http://localhost:3333', 'http://rocketseat.com.br/], // em produção adicione todas as URLs que podem acessar
})

app.register(memoriesRoutes)

app.listen({ port: 3333 }).then(() => {
  console.log('🚀 HTTP server running on http://localhost:3333')
})
