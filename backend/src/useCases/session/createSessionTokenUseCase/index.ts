import { User } from '@/models/User';
import { CreateSessionTokenController } from './CreateSessionTokenController';
import { CreateSessionTokenService } from './CreateSessionTokenService';

const createSessionTokenService = new CreateSessionTokenService(User)

export const createSessionTokenController = new CreateSessionTokenController(
  createSessionTokenService
)