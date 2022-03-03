import { RepositoryDTO } from '@/dtos'
import { RepositoryModel } from '@/models/Repository'

export class GetAllRepositoriesService {
  constructor(private repositoryDocument: RepositoryModel) {}

  async execute(querySearch: string) {
    const repositories = (
      await this.repositoryDocument.find({
        url: {
          $regex: querySearch,
        },
      })
    ).map((rep) => RepositoryDTO.getRepository(rep))

    return repositories
  }
}
