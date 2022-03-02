import { Request, Response } from 'express'
import { DeleteUserService } from './DeleteUserService'

export class DeleteUserController {
  constructor(private deleteUserService: DeleteUserService) {}
  async handle(req: Request, res: Response) {
    try {
      const userId = res.locals.userId
      await this.deleteUserService.execute(userId)
      return res.send()
    } catch (err) {
      return res.status(err?.statusCode || 400).json({ message: err.message })
    }
  }
}
