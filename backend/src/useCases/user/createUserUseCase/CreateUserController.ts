import { Request, Response } from 'express'
import { CreateUserService } from './CreateUserService'

export class CreateUserController {
  constructor(private createUserService: CreateUserService) {}

  async handle(req: Request, res: Response) {
    try {
      const user = await this.createUserService.execute(req.body)
      return res.status(201).json({ user })
    } catch (err) {
      return res.status(err?.statusCode || 400).json({ message: err.message })
    }
  }
}
