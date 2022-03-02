import { NextFunction, Request, Response } from 'express'
import { verifyJwt } from '@/utils/jwt.utils'
import { User } from '@/models/User'

export const AuthMiddelware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const [, token] = req.headers.authorization?.split(' ') || []

  
  if (!token)
  return res.status(401).json({ message: 'Token was not provided.' })
  
  const decoded = verifyJwt(token) as { _id: string }

  
  if (!decoded) return res.status(401).json({ message: 'Invalid token.' })
  
  const { _id } = decoded
  
  const userExists = await User.findById(_id)

  if (!userExists) return res.status(401).json({ message: 'Invalid token.' })

  res.locals.userId = String(decoded._id)

  return next()
}
