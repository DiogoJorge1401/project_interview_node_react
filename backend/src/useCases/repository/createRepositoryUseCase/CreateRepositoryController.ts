import { Request, Response } from 'express'
import { CreateRepositoryService } from './CreateRepositoryService'

export class CreateRepositoryController {
  constructor(private createRepositoryService: CreateRepositoryService) {}

  async handle(req: Request, res: Response) {
    try {
      const { userId } = res.locals
      const repository = await this.createRepositoryService.execute(
        req.body,
        userId
      )
      return res.status(201).json({ repository })
    } catch (err) {
      return res.status(err?.statusCode || 400).json({ message: err.message })
    }
  }
}
