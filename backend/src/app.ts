import cors from 'cors'
import 'dotenv/config'
import './utils/connectionDatabase'
import express, { Express } from 'express'
import { routes } from './routes'

class App {
  private server: Express
  private port = 3000

  constructor() {
    this.server = express()
    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.server.use(express.json())
    this.server.use(
      cors({
        origin: '*',
      })
    )
  }

  routes() {
    this.server.use(routes)
  }

  start() {
    this.server.listen(this.port, () =>
      console.log(`Server running at http://localhost:${this.port}`)
    )
  }
}
new App().start()
