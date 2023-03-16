import type { PluralizationRule } from 'vue-i18n'
/**
   * @param choice {number} a choice index given by the input to $tc: `$tc('path.to.rule', choiceIndex)`
   * @param choicesLength {number} an overall amount of available choices
   * @returns a final choice index to select plural word by
  */
export function roPluralizationRules  (choice: number, choicesLength: number, orgRule : PluralizationRule | undefined): number {
  console.log('pluralization')
  console.log('choice', choice)
  console.log('choiceLength', choicesLength)
  console.log(orgRule)
  return orgRule ? orgRule(choice, choicesLength) : 0
}
