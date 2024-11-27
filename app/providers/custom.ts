import { defineFontProvider } from 'unifont'

const resolvableFonts = new Set<string>()
export default defineFontProvider('custom', () => {
  resolvableFonts.add('Adver Gothic Regular')
  return {
    async resolveFont(fontFamily) {
      if (!resolvableFonts.has(fontFamily)) {
        return
      }
      console.log(`Resolving font: ${fontFamily}`)
      return {
        fonts: [
          { src: [{ url: '/adver-gothic-regular.ttf', format: 'ttf' }] },
        ],
      }
    },
  }
})
