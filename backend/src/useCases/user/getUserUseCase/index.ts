import { User } from '@/models/User';
import { GetUserController } from './GetUserController';
import { GetUserService } from './GetUserService';

const getUserService = new GetUserService(User)
export const getUserController = new GetUserController(getUserService)