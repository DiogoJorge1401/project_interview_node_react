import { RepositoryModel } from '@/models/Repository'
import { AppError } from '@/errors/AppError'
import { RepositoryDTO } from '@/dtos'

export class GetRepositoryService {
  constructor(private repositoryDocument: RepositoryModel) {}

  async execute(repositoryId: string) {
    const repository = await this.repositoryDocument.findById(repositoryId)

    if (!repository) throw new AppError('Repository not found.', 404)

    return RepositoryDTO.getRepository(repository)
  }
}
