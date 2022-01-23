import type { NextPage } from 'next'
import { useState } from 'react'
import { ConsoleCard } from '../components/ConsoleCard'
import { SearchBar } from '../components/SearchBar'
import { TopPanel } from '../components/TopPanel'
import { Item, itemScrapper } from '../services/itemScrapper'

interface Props {
  items: Item[]
}

const Home: NextPage<Props> = ({ items }) => {
  const [itemsToShow, setItemsToShow] = useState<Item[]>([])
  const onSearch = (items: Item[]) => {
    setItemsToShow(items)
  }

  return (
    <div className="max-w-lg sm:max-w-6xl mx-auto">
      <TopPanel>
        <SearchBar onSearch={onSearch} items={items} />
      </TopPanel>
      <div className="grid lg:grid-cols-3 md:grid-cols-2  justify-items-center gap-5 mt-5">
        {itemsToShow.map((item) => (
          <ConsoleCard
            key={`${item.title}-${item.website}`}
            picture={item.picture}
            price={item.price}
            url={item.url}
            title={item.title}
          />
        ))}
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const items = await itemScrapper.getItems()
  return {
    props: {
      items,
    },
  }
}
export default Home
