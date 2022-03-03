import { createContext, useContext, useState } from 'react'
import { api } from '../services/api'
import { getRepositoryFromUrl } from '../utils/userRepository.utils'

interface Repository {
  _id: string
  name: string
  url: string
  user: string
}

export interface User {
  _id: string
  email: string
}

interface IRepositoryContext {
  repositories: Repository[]
  globalLoading: boolean
  user: User
  error: boolean
  getAllRepositories(query: string): Promise<void>
  getMyRepositories(): Promise<void>
  deleteRepository(repoId: string): Promise<void>
  createRepository(repositoryName: string): Promise<void>
  setUser(user: User): void
  setError(error: boolean): void
  defineUser(): void
}

const RepositoryContext = createContext<IRepositoryContext>(
  {} as unknown as IRepositoryContext
)

export const RepositoryContextProvider = ({ children }) => {
  const [repositories, setRepositories] = useState([])
  const [globalLoading, setGlobalLoading] = useState(false)
  const [error, setError] = useState(false)
  const [user, setUser] = useState({} as unknown as User)

  const defineUser = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    setUser(user)
  }

  const getAllRepositories = async (query:string) => {
    setGlobalLoading(true)
    try {
      const { data } = await api.get(`/repositories/?q=${query}`)
      setRepositories(data.repositories)
      setGlobalLoading(false)
    } catch (err) {
      setError(true)
    }
    setError(false)
  }

  const getMyRepositories = async () => {
    setGlobalLoading(true)
    try {
      const { data } = await api.get('/repositories/user')
      setRepositories(data.repositories)
      setGlobalLoading(false)
    } catch (err) {
      setError(true)
    }
    setError(false)
  }

  const createRepository = async (repositoryUrl: string) => {
    setGlobalLoading(true)
    try {
      await api.post('repositories', {
        url: repositoryUrl,
        name: getRepositoryFromUrl(repositoryUrl),
      })
      getMyRepositories()
      setGlobalLoading(false)
    } catch (err) {
      setError(true)
    }
    setError(false)
  }

  const deleteRepository = async (repoId: string) => {
    setGlobalLoading(true)
    try {
      await api.delete(`/repositories/${repoId}`)
      getMyRepositories()
      setGlobalLoading(false)
    } catch (err) {
      setError(true)
    }
    setError(false)
  }

  return (
    <RepositoryContext.Provider
      value={{
        error,
        setError,
        repositories,
        getAllRepositories,
        deleteRepository,
        getMyRepositories,
        createRepository,
        globalLoading,
        user,
        setUser,
        defineUser,
      }}
    >
      {children}
    </RepositoryContext.Provider>
  )
}

export const useRepositoryContext = () => useContext(RepositoryContext)
