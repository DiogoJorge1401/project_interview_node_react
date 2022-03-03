import { useState } from 'react'
import { MdClear, MdSearch } from 'react-icons/md'
import { useRepositoryContext } from '../../../../context/RepositoryContext'
import './style.css'

export const Search = () => {
  const { getAllRepositories } = useRepositoryContext()
  const [querySearch, setQuerySearch] = useState('')

  const handleSearchSubmit = () => {
    if (!querySearch) return
    getAllRepositories(querySearch)
  }

  const cleanSearchQuery = () => {
    setQuerySearch('')
  }

  return (
    <section className="search">
      <label htmlFor="query">Procurar</label>
      <input
        className="search__input"
        type="text"
        name="query"
        id="query"
        placeholder="DynoGame"
        value={querySearch}
        onChange={(ev) => setQuerySearch(ev.target.value)}
      />
      <div className="search__actions">
        <button className="search__button" onClick={handleSearchSubmit}>
          <MdSearch className="search__button-icon" />
        </button>
        <button className="search__button" onClick={cleanSearchQuery}>
          <MdClear className="search__button-icon" />
        </button>
      </div>
    </section>
  )
}
