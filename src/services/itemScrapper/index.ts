import { Browser, Page, chromium } from 'playwright'
import { AmazonPlaywrightItemProvider } from './amazonItemProvider'

export type Website = 'amazon'
export interface Item {
  title: string
  price: number
  url: string
  picture: string
  website: Website
}

const consoles = ['xbox', 'ps4', 'nintendoSwitch']
export interface PlaywrightItemProvider {
  getItems(page: Page, description: string): Promise<Item[]>
}

export class ItemPlaywrightScrapper {
  private static browser: Browser | null = null

  constructor(
    private consoles: string[],
    private providers: PlaywrightItemProvider[]
  ) {}

  // create a unique browser instance
  private async launch(): Promise<void> {
    if (
      ItemPlaywrightScrapper.browser === null ||
      !ItemPlaywrightScrapper.browser.isConnected()
    ) {
      ItemPlaywrightScrapper.browser = await chromium.launch({
        headless: true,

        args: ['--no-sandbox', '--disable-setuid-sandbox'],
      })
    }
  }
  getItemByConsole = async (console: string) => {
    return Promise.all(
      this.providers.map((provider) =>
        ItemPlaywrightScrapper.browser!.newPage().then((page) =>
          provider.getItems(page, console + ' console')
        )
      )
    )
  }
  async getItems(): Promise<Item[]> {
    await this.launch()

    const items = await Promise.all(
      this.consoles.map((console) => this.getItemByConsole(console))
    )

    await ItemPlaywrightScrapper.browser!.close()
    const uniqueItemsRecord: Record<string, Item> = {}
    const uniqueItems = items.flat(2).reduce<Item[]>((acc, item) => {
      if (!uniqueItemsRecord[item.url]) {
        uniqueItemsRecord[item.url] = item
        acc.push(item)
      }
      return acc
    }, [])

    return uniqueItems
  }
}

export const itemScrapper = new ItemPlaywrightScrapper(consoles, [
  new AmazonPlaywrightItemProvider(),
])
