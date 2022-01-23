import { ElementHandle, Page } from 'playwright'
import { Item, PlaywrightItemProvider, Website } from '.'

export class AmazonPlaywrightItemProvider implements PlaywrightItemProvider {
  selector = '.s-main-slot [data-cel-widget]'

  getItem(el: HTMLElement): Item {
    const src = el.querySelector('img')?.src || ''
    const title = el.querySelector('h2')?.textContent || ''
    const priceStr = el.querySelector('.a-price-whole')?.textContent || '0'
    const price = parseInt(priceStr)

    const url = el.querySelector('a')?.href || ''
    return {
      picture: src,
      title,
      price,
      url,
      website: 'amazon' as Website,
    }
  }

  async searchHTMLItems(
    page: Page,
    description: string
  ): Promise<ElementHandle<HTMLElement | SVGElement>[]> {
    await page.goto(`https://www.amazon.com/s?k=${description}`)
    await page.waitForSelector(this.selector)
    const data = await page.$$(this.selector)
    return data
  }

  async getItems(page: Page, description: string): Promise<Item[]> {
    const htmlItems = await this.searchHTMLItems(page, description)
    const items = await Promise.all(
      htmlItems.map((el) => el.evaluate(this.getItem))
    )
    return items.filter(
      (item) => item.price > 0 && item.title && item.url && item.picture
    ) as Item[]
  }
}
