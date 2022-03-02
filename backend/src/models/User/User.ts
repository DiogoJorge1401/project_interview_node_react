import mongoose from 'mongoose'
import { UserInput } from '@/dtos'

export interface UserDocument extends UserInput, mongoose.Document {
  createdAt: Date
  updatedAt: Date
  comparePassword(candidatePassword: string): Promise<boolean>
}

export type UserModel = mongoose.Model<UserDocument>