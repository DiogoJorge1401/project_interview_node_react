import { UserDocument } from '@/models/User'

export interface UserInput {
  email: string
  password: string
}

export class UserDTO {
  static getUser(user: UserDocument) {
    const { email, _id, createdAt, updatedAt } = user
    return { _id, email, createdAt, updatedAt }
  }
}

