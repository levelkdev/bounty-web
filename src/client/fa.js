import _ from 'lodash'
import fontAwesome from 'styles/font-awesome/scss/font-awesome.scss'

const faClass = fontAwesome.fa

let fa = {}
_.forEach(fontAwesome, (faIconClass, faProp) => {
  if (faProp !== 'fa') {
    const faIconName = faProp.substr(3)
    fa[faIconName] = `${faClass} ${faIconClass}`
  }
})

export default fa
