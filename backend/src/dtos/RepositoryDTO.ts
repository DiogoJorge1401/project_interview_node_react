import { RepositoryDocument } from '../models/Repository'
import { UserDocument } from '../models/User'

export interface RepositoryInput {
  name: string
  url: string
  user: UserDocument['_id']
}

export class RepositoryDTO {
  static getRepository(repository: RepositoryDocument) {
    const { name, url, user, _id, createdAt, updatedAt } = repository

    return { _id, name, url, user, createdAt, updatedAt }
  }
}
