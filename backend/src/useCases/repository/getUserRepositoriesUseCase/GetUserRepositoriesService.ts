import { RepositoryModel } from '@/models/Repository'
import { UserModel } from '@/models/User'
import { AppError } from '@/errors/AppError'
import { RepositoryDTO } from '@/dtos'

export class GetUserRepositoriesService {
  constructor(
    private repositoryDocument: RepositoryModel,
    private userDocument: UserModel
  ) {}

  async execute(userId: string) {
    const repositories = (
      await this.repositoryDocument.find({ user: userId })
    ).map((rep) => RepositoryDTO.getRepository(rep))

    return repositories
  }
}
