import { SearchIcon } from '@heroicons/react/solid'
import { FC, useEffect, useState } from 'react'
import { Item } from '../services/itemScrapper'
interface Props {
  items: Item[]
  onSearch: (items: Item[]) => void
}
const useSearch = (items: Item[]) => {
  const search = (query: string): Item[] => {
    if (query.length === 0) {
      return items
    }
    return items.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    )
  }
  return { search }
}
export const SearchBar: FC<Props> = ({ items, onSearch }) => {
  const { search } = useSearch(items)
  const [query, setQuery] = useState('')
  useEffect(() => {
    onSearch(search(query))
  }, [query])
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  return (
    <div className=" mt-8  mx-auto max-w-xs  px-5 py-2 search-panel transform rounded-2xl shadow hover:shadow-md  group hover:-translate-y-1    transition-all duration-200  sm:max-w-xl ">
      <div className="flex gap-1  items-center justify-center text-gray-600   py-0.5 border-b border-gray-300 group-focus:border-gray-400 transition-all duration-200 font-semibold text-md">
        <SearchIcon className="h-5  text-current" />
        <input
          type="search"
          placeholder="Search console"
          className="w-full  outline-none "
          value={query}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}
