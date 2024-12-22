import { defineFontProvider } from 'unifont'

const resolvableFonts = new Set<string>()
export default defineFontProvider('custom', () => {
  resolvableFonts.add('Bingo Dilan Regular')
  return {
    async resolveFont(fontFamily) {
      if (!resolvableFonts.has(fontFamily)) {
        return
      }
      console.log(`Resolving font: ${fontFamily}`)
      return {
        fonts: [
          { src: [{ url: '/BingoDilanRegular.ttf', format: 'ttf' }] },
        ],
      }
    },
  }
})
