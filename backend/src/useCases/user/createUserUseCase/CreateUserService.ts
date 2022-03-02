import { UserDTO, UserInput } from '@/dtos/UserDTO'
import { UserModel } from '@/models/User'
import { AppError } from '@/errors/AppError'

export class CreateUserService {
  constructor(private userDocument: UserModel) {}

  async execute(userData: UserInput) {
    const userAlredyExist = await this.userDocument.findOne({
      email: userData.email,
    })

    if (userAlredyExist) throw new AppError('User alredy exists.', 409)

    const user = await this.userDocument.create(userData)

    return UserDTO.getUser(user)
  }
}
