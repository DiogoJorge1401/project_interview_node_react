import { RepositoryModel } from '@/models/Repository'
import { UserModel } from '@/models/User'

export class DeleteUserService {
  constructor(
    private userDocument: UserModel,
    private repositoryDocument: RepositoryModel
  ) {}
  async execute(userId: string) {
    const user = await this.userDocument.findById(userId)
    await this.repositoryDocument.deleteMany({ user: userId })
    await this.userDocument.deleteOne({ _id: user._id })
  }
}
