import { Repository } from '@/models/Repository'
import { CreateRepositoryController } from './CreateRepositoryController'
import { CreateRepositoryService } from './CreateRepositoryService'

const createRepositoryService = new CreateRepositoryService(Repository)
export const createRepositoryController = new CreateRepositoryController(
  createRepositoryService
)
