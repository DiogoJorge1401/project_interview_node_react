import jwt from 'jsonwebtoken'
import { config } from '../config'

export const signJwt = (payload) => {
  const accessTokenPrivateKey = config.privateKeyToken
  const accessTokenExpiresIn = config.expiresIn
  return jwt.sign(payload, accessTokenPrivateKey, {
    expiresIn: accessTokenExpiresIn,
  })
}

export const verifyJwt = (token: string) => {
  const accessTokenPrivateKey = config.privateKeyToken
  try {
    return jwt.verify(token, accessTokenPrivateKey)
  } catch (err) {
    return
  }
}
