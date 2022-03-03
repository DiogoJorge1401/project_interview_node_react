interface Config {
  dbUri: string
  saltWorkFactor: number
  privateKeyToken: string
  expiresIn: string
}

export const config: Config = {
  dbUri: process.env.MONGODB_URI_DEV,
  saltWorkFactor: +process.env.SALT_WORK_FACTOR,
  privateKeyToken: process.env.ACCESS_TOKEN_PRIVATE_KEY,
  expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN,
}
