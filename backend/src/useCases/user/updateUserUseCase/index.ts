import { User } from '@/models/User'
import { UpdateUserController } from './UpdateUserController'
import { UpdateUserService } from './UpdateUserService'

const updateUserService = new UpdateUserService(User)
export const updateUserController = new UpdateUserController(updateUserService)
