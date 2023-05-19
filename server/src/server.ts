import 'dotenv/config'

import { resolve } from 'node:path'

import fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import multipart from '@fastify/multipart'

import { authRoutes } from './routes/auth'
import { uploadRoutes } from './routes/upload'
import { memoriesRoutes } from './routes/memories'

const app = fastify()

app.register(multipart)

app.register(require('@fastify/static'), {
  root: resolve(__dirname, '../uploads'),
  prefix: '/uploads',
})

app.register(cors, {
  origin: true,
})

app.register(jwt, {
  secret: 'spacetime',
  // secret: '2600c1d4-def2-44e4-8379-a39a61b73725',
})

app.register(authRoutes)
app.register(uploadRoutes)
app.register(memoriesRoutes)

app.listen({ port: 3333, host: '0.0.0.0' }).then(() => {
  console.log('🚀 HTTP server running on port http://localhost:3333')
})
