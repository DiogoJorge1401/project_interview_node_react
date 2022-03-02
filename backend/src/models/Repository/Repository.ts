import mongoose from 'mongoose'
import { RepositoryInput } from '@/dtos'

export interface RepositoryDocument extends RepositoryInput, mongoose.Document {
  createdAt: Date
  updatedAt: Date
}

export type RepositoryModel = mongoose.Model<RepositoryDocument>
