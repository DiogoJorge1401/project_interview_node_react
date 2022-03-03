export const getUserFromUrl = (url: string) => {
  const [z, o, t, owner] = url.split(/\//)
  return owner
}
export const getRepositoryFromUrl = (url: string) => {
  const [z, o, t, ow, repositoryName] = url.split(/\//)
  return repositoryName
}
