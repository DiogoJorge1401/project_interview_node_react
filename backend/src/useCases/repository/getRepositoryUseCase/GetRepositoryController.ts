import { Request, Response } from 'express'
import { GetRepositoryService } from './GetRepositoryService'

export class GetRepositoryController {
  constructor(private getRepositoryService: GetRepositoryService) {}

  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params

      const repository = await this.getRepositoryService.execute(id)

      return res.json({ repository })
    } catch (err) {
      return res.status(err?.statusCode || 400).json({ message: err.message })
    }
  }
}
