import { Repository } from '@/models/Repository'
import { GetAllRepositoriesController } from './GetAllRepositoriesController'
import { GetAllRepositoriesService } from './GetUserRepositoriesService'

const getAllRepositoriesService = new GetAllRepositoriesService(Repository)

export const getAllRepositoriesController = new GetAllRepositoriesController(
  getAllRepositoriesService
)
