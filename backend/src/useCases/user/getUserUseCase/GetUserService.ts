import { UserDTO } from '@/dtos'
import { UserModel } from '@/models/User'

export class GetUserService {
  constructor(private userDocument: UserModel) {}

  async execute(userId: string) {
    const user = await this.userDocument.findById(userId)
    return UserDTO.getUser(user)
  }
}
