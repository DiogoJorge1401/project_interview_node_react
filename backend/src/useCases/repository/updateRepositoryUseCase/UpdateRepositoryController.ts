import { Request, Response } from 'express'
import { UpdateRepositoryService } from './UpdateRepositoryService'

export class UpdateRepositoryController {
  constructor(private updateRepositoryService: UpdateRepositoryService) {}
  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params
      const { name } = req.body
      const { userId } = res.locals

      await this.updateRepositoryService.execute({
        id,
        name,
        userId,
      })

      return res.send()
    } catch (err) {
      return res.status(err?.statusCode || 400).json({ message: err.message })
    }
  }
}
