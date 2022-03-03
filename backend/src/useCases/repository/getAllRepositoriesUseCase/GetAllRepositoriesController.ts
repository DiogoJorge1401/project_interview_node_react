import { Request, Response } from 'express'
import { GetAllRepositoriesService } from './GetUserRepositoriesService'

export class GetAllRepositoriesController {
  constructor(private getRepositoryService: GetAllRepositoriesService) {}

  async handle(req: Request, res: Response) {
    try {
      const querySearch = String(req.query.q) || ''
      const repositories = await this.getRepositoryService.execute(querySearch)
      return res.json({ repositories })
    } catch (err) {
      return res.status(err?.statusCode || 400).json({ message: err.message })
    }
  }
}
