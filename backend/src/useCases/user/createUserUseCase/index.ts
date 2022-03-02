import { User } from '@/models/User';
import { CreateUserController } from './CreateUserController';
import { CreateUserService } from './CreateUserService';

const createUserService = new CreateUserService(User)
export const createUserController = new CreateUserController(createUserService)