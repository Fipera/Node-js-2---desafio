import fastify from 'fastify'
import { userRoutes } from '../routes/users'
import cookie from '@fastify/cookie'

export  const app = fastify()

app.register(cookie)

app.register(userRoutes)