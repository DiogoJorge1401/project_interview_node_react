import mongoose from 'mongoose'
import { RepositoryDocument } from './Repository'

const RepositorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
      unique: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

export const Repository = mongoose.model<RepositoryDocument>(
  'Repository',
  RepositorySchema
)
