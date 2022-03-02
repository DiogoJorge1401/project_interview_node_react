import { Request, Response } from 'express'
import { DeleteRepositoryService } from './DeleteRepositoryService'

export class DeleteRepositoryController {
  constructor(private deleteRepositoryService: DeleteRepositoryService) {}

  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params
      const { userId } = res.locals
      
      await this.deleteRepositoryService.execute(id, userId)
      return res.send()
    } catch (err) {
      return res.status(err?.statusCode || 400).json({ message: err.message })
    }
  }
}
