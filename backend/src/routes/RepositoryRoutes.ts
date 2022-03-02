import { Request, Response, Router } from 'express'
import { AuthMiddelware } from '../middlewares/Auth'
import {
  createRepositoryController,
  getRepositoryController,
  updateRepositoryController,
  deleteRepositoryController,
  getUserRepositoriesController,
  getAllRepositoriesController,
} from '../useCases/repository'

const repositoryRoutes = Router()

repositoryRoutes.use(AuthMiddelware)

repositoryRoutes.get(
  '/user',
  async (req: Request, res: Response) =>
    await getUserRepositoriesController.handle(req, res)
)

repositoryRoutes.get(
  '/',
  async (req: Request, res: Response) =>
    await getAllRepositoriesController.handle(req, res)
)

repositoryRoutes.post(
  '/',
  async (req: Request, res: Response) =>
    await createRepositoryController.handle(req, res)
)

repositoryRoutes.get(
  '/:id',
  async (req: Request, res: Response) =>
    await getRepositoryController.handle(req, res)
)

repositoryRoutes.patch(
  '/:id',
  async (req: Request, res: Response) =>
    await updateRepositoryController.handle(req, res)
)

repositoryRoutes.delete(
  '/:id',
  async (req: Request, res: Response) =>
    await deleteRepositoryController.handle(req, res)
)

export { repositoryRoutes }
