import { Request, Response } from 'express'
import { GetUserRepositoriesService } from './GetUserRepositoriesService'

export class GetUserRepositoriesController {
  constructor(private getRepositoryService: GetUserRepositoriesService) {}

  async handle(req: Request, res: Response) {
    try {
      const userId = res.locals.userId

      const repositories = await this.getRepositoryService.execute(userId)

      return res.json({ repositories })
    } catch (err) {
      return res.status(err?.statusCode || 400).json({ message: err.message })
    }
  }
}
