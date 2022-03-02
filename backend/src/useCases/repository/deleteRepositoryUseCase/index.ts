import { Repository } from '@/models/Repository'
import { DeleteRepositoryController } from './DeleteRepositoryController'
import { DeleteRepositoryService } from './DeleteRepositoryService'

const deleteRepositoryService = new DeleteRepositoryService(Repository)
export const deleteRepositoryController = new DeleteRepositoryController(
  deleteRepositoryService
)
