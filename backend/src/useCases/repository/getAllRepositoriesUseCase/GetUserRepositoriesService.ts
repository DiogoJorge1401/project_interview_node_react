import { RepositoryDTO } from '@/dtos'
import { RepositoryModel } from '@/models/Repository'
import { UserModel } from '@/models/User'

export class GetAllRepositoriesService {
  constructor(private repositoryDocument: RepositoryModel) {}

  async execute() {
    const repositories = (
      await this.repositoryDocument.find()
    ).map((rep) => RepositoryDTO.getRepository(rep))

    return repositories
  }
}
