import { RepositoryModel } from '@/models/Repository'
import { AppError } from '@/errors/AppError'

export class DeleteRepositoryService {
  constructor(private repositoryDocument: RepositoryModel) {}

  async execute(repositoryId: string, userId: string) {
    const repository = await this.repositoryDocument.findOne({
      _id: repositoryId,
      user: userId,
    })

    if (!repository) throw new AppError('Repository not found', 404)

    await repository.deleteOne()
  }
}
