import { config } from '@/config'
import bcrypt from 'bcrypt'

export const encryptPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(config.saltWorkFactor)

  return await bcrypt.hash(password, salt)
}
