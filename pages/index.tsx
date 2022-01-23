import type { NextPage } from 'next'
import { ConsoleCard } from '../components/ConsoleCard'
import { TopPanel } from '../components/TopPanel'

const Home: NextPage = () => {
  return (
    <div className="max-w-lg mx-auto">
      <TopPanel />
      <div className="grid justify-items-center mt-5">
        <ConsoleCard
          picture="https://www.pngall.com/wp-content/uploads/2/Nintendo-Switch-PNG.png"
          title="Nintento Switch"
          url="/"
          price={20}
        />
      </div>
    </div>
  )
}

export default Home
