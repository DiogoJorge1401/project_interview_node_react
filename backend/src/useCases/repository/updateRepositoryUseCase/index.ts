import { Repository } from '@/models/Repository';
import { UpdateRepositoryController } from './UpdateRepositoryController';
import { UpdateRepositoryService } from './UpdateRepositoryService';

const updateRepositoryService = new UpdateRepositoryService(Repository)

export const updateRepositoryController = new UpdateRepositoryController(
  updateRepositoryService
)