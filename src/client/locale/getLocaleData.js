import en from './data/en.json'
import es from './data/es.json'
import fr from './data/fr.json'
import it from './data/it.json'

const localeData = { en, es, fr, it }

export default (language) => {
  const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0]
  return localeData[language] || localeData[languageWithoutRegionCode] || localeData.en
}
