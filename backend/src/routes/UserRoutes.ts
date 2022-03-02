import {
  createUserController,
  deleteUserController,
  getUserController,
  updateUserController,
} from '@/useCases/user'
import { Request, Response, Router } from 'express'
import { AuthMiddelware } from '../middlewares/Auth'

const userRoutes = Router()

userRoutes.post(
  '/',
  async (req: Request, res: Response) =>
    await createUserController.handle(req, res)
)

userRoutes.use(AuthMiddelware)

userRoutes.get(
  '/:id',
  async (req: Request, res: Response) =>
    await getUserController.handle(req, res)
)
userRoutes.patch(
  '/',
  async (req: Request, res: Response) =>
    await updateUserController.handle(req, res)
)
userRoutes.delete(
  '/',
  async (req: Request, res: Response) =>
    await deleteUserController.handle(req, res)
)

export { userRoutes }
