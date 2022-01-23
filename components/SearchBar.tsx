import { SearchIcon } from '@heroicons/react/solid'
export function SearchBar() {
  return (
    <form className=" mt-8  mx-auto max-w-xs px-5 py-2 search-panel transform rounded-2xl hover:shadow-md  group hover:-translate-y-1    transition-all duration-200  ">
      <div className="flex gap-1  items-center justify-center text-gray-600   py-0.5 border-b border-gray-300 group-focus:border-gray-400 transition-all duration-200 font-semibold text-md">
        <SearchIcon className="h-5  text-current" />
        <input
          type="search"
          placeholder="Search console"
          className="w-full  outline-none "
        />
      </div>
    </form>
  )
}
