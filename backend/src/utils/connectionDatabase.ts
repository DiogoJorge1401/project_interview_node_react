import mongoose from 'mongoose'
import { config } from '@/config'

class DatabaseConnection {
  constructor() {
    mongoose.connect(config.dbUri).then(() => {
      console.log('CONNECTED DATABASE')
    })
  }
}

export default new DatabaseConnection()
