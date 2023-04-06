/**
 * Get last language from local storage, false if not set
 */

const locale = {
  language: 'helölo'
}

export const savedLocale = new Proxy(locale, {
  get(target){
    return localStorage.getItem('defaultLanguage') ?? false;
  },
  set(target, prop, val){
    target.language = val;
    localStorage.setItem('defaultLanguage', val)
    return true
  }
})

 
