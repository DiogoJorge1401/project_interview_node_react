import { Request, Response } from 'express'
import { GetUserService } from './GetUserService'

export class GetUserController {
  constructor(private getUserService: GetUserService) {}

  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params
      const user = await this.getUserService.execute(id)
      return res.json({ user })
    } catch (err) {
      return res.status(err?.statusCode || 400).json({ message: err.message })
    }
  }
}
