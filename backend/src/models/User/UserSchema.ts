import bcrypt from 'bcrypt'
import mongoose from 'mongoose'
import { UserDocument } from './User'

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

UserSchema.methods.compare = async function (
  candidatePassword: string
): Promise<boolean> {
  const user = this as UserDocument

  return await bcrypt
    .compare(candidatePassword, user.password)
    .catch(() => false)
}

export const User = mongoose.model<UserDocument>('User', UserSchema)
