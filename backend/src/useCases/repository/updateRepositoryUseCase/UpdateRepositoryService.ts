import { RepositoryModel } from '@/models/Repository'
import { AppError } from '@/errors/AppError'

interface RepositoryUpdateInput {
  id: string
  name: string
  userId: string
}

export class UpdateRepositoryService {
  constructor(private repositoryDocument: RepositoryModel) {}

  async execute({ name, id, userId }: RepositoryUpdateInput) {
    if (!name) throw new AppError('Name field was expected.', 404)

    const repository = await this.repositoryDocument.findOne({
      _id: id,
      user: userId,
    })

    if (!repository) throw new AppError('Repository not found.', 404)

    await repository.updateOne({ name })
  }
}
