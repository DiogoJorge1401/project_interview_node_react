import { User } from '@/models/User'
import { Repository } from '@/models/Repository'
import { DeleteUserController } from './DeleteUserController'
import { DeleteUserService } from './DeleteUserService'

const deleteUserService = new DeleteUserService(User, Repository)
export const deleteUserController = new DeleteUserController(deleteUserService)
