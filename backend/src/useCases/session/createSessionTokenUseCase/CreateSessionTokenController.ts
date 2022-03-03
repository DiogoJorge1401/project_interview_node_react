import { Request, Response } from 'express'
import { CreateSessionTokenService } from './CreateSessionTokenService'

export class CreateSessionTokenController {
  constructor(private createSessionTokenService: CreateSessionTokenService) {}

  async handle(req: Request, res: Response) {
    try {
      const { token, user } = await this.createSessionTokenService.execute(
        req.body
      )
      return res.status(201).json({ token, user })
    } catch (err) {
      return res.status(err?.statusCode || 400).json({ message: err.message })
    }
  }
}
