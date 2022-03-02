import { UserModel } from '@/models/User'
import { encryptPassword } from '@/utils/encryptPassword'

export class UpdateUserService {
  constructor(private userDocument: UserModel) {}

  async execute(userId: string, newPassword: string) {
    const user = await this.userDocument.findById(userId)
    const hashedPassword = await encryptPassword(newPassword)
    user.password = hashedPassword
    await user.save()
  }
}
