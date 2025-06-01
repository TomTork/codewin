import type { Slide, SlideValue } from "~/types/ISlide";
import { dataNotFound } from "~/errors/dataNotFound";
import type { Advantage } from "~/types/IAdvantage";

export class Client {
  private readonly slideURL = 'https://api.los-bio.ru/info/group/slide'
  private readonly advantageURL = 'https://api.los-bio.ru/info/group/advantage'

  async getSlide(): Promise<Slide[]> {
    const { data, error } = await useFetch<{id: number, name: string, value: string}[]>(this.slideURL)
    if (error.value || !data.value) {
      dataNotFound(this.slideURL, error.value?.message)
      return []
    }
    return data.value.map((it) => {
      return {
        id: it.id,
        name: it.name,
        value: JSON.parse(it.value as string) as SlideValue,
      } as Slide
    })
  }

  async getAdvantage() {
    const { data, error } = await useFetch<Advantage[]>(this.advantageURL)
    if (error.value || !data.value) {
      dataNotFound(this.advantageURL, error.value?.message)
      return []
    }
    return data.value.map((it) => {
      return {
        id: it.id,
        name: it.name,
        value: it.value
      } as Advantage
    })
  }

}