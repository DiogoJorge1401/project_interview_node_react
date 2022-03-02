import { RepositoryModel } from '@/models/Repository'
import { RepositoryDTO, RepositoryInput } from '@/dtos'
import { UserModel } from '@/models/User'
import { AppError } from '@/errors/AppError'

export class CreateRepositoryService {
  constructor(
    private repositoryDocument: RepositoryModel
  ) {}

  async execute(repositoryData: RepositoryInput, userId: string) {
    const repositoryAlredyExist = await this.repositoryDocument.findOne({
      url: repositoryData.url,
    })

    if (repositoryAlredyExist)
      throw new AppError('Repository alredy exists.', 409)

    const repository = await this.repositoryDocument.create({
      ...repositoryData,
      user: userId,
    })

    return RepositoryDTO.getRepository(repository)
  }
}
