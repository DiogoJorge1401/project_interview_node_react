import bcrypt from 'bcrypt'
import { UserModel } from '@/models/User'
import { AppError } from '@/errors/AppError'
import { signJwt } from '@/utils/jwt.utils'
import { UserInput, UserDTO } from '@/dtos'

export class CreateSessionTokenService {
  constructor(private userDocument: UserModel) {}

  async execute({ email, password }: UserInput) {
    const userExists = await this.userDocument.findOne({ email })

    if (!userExists) throw new AppError('User does not exist.', 404)

    const matchPassword = await bcrypt.compare(password, userExists.password)

    if (!matchPassword) throw new AppError('User does not exist.', 404)

    return {
      user: UserDTO.getUser(userExists),
      token: signJwt({
        _id: userExists._id,
      }),
    }
  }
}
