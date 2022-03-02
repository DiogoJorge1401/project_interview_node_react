import { Request, Response } from 'express'
import { UpdateUserService } from './UpdateUserService'

export class UpdateUserController {
  constructor(private updateUserService: UpdateUserService) {}
  async handle(req: Request, res: Response) {
    try {
      const userId = res.locals.userId
      const { password } = req.body
      await this.updateUserService.execute(userId, password)
      return res.send()
    } catch (err) {
      return res.status(err?.statusCode || 400).json({ message: err.message })
    }
  }
}
