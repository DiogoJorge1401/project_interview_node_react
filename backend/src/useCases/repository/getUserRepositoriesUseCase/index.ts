import { Repository } from '@/models/Repository'
import { User } from '@/models/User'
import { GetUserRepositoriesController } from './GetUserRepositoriesController'
import { GetUserRepositoriesService } from './GetUserRepositoriesService'

const getUserRepositoriesService = new GetUserRepositoriesService(
  Repository,
  User
)
export const getUserRepositoriesController = new GetUserRepositoriesController(
  getUserRepositoriesService
)
