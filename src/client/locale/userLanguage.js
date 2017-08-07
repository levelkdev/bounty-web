export default function userLanguage (nav) {
  return (nav.languages && nav.languages[0]) || nav.language || nav.userLanguage
}
