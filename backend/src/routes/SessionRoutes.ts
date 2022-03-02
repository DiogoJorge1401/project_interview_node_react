import { Request, Response, Router } from 'express'
import { createSessionTokenController } from '../useCases/session'

const sessionRoutes = Router()

sessionRoutes.post(
  '/',
  async (req: Request, res: Response) =>
    await createSessionTokenController.handle(req, res)
)

export { sessionRoutes }
