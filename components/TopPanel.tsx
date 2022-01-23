import { SearchBar } from './SearchBar'

export function TopPanel() {
  return (
    <div className="top-panel w-full relative -top-2 rounded-b-[15%] drop-shadow py-10  hover:drop-shadow-md transition-all duration-200">
      <h1 className="text-4xl font-semibold text-center title opacity-50">
        Console Phobia
      </h1>
      <SearchBar />
    </div>
  )
}
