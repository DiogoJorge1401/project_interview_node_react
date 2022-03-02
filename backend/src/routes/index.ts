import { Router } from 'express'
import { repositoryRoutes } from './RepositoryRoutes'
import { sessionRoutes } from './SessionRoutes'
import { userRoutes } from './UserRoutes'

const routes = Router()

routes.use('/users', userRoutes)
routes.use('/repositories', repositoryRoutes)
routes.use('/sessions', sessionRoutes)

export { routes }
