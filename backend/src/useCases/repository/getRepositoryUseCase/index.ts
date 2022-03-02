import { Repository } from '@/models/Repository'
import { GetRepositoryController } from './GetRepositoryController'
import { GetRepositoryService } from './GetRepositoryService'

const getRepositoryService = new GetRepositoryService(Repository)
export const getRepositoryController = new GetRepositoryController(
  getRepositoryService
)
