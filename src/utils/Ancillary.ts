import Block from './Block'

export function getInputValues(me: Block) {
  const result: Record<string, string> = {}
  const inputs = me.element?.querySelectorAll('input')
  inputs?.forEach((item) => result[item.placeholder] = item.value)
  console.log(result)
  return result
}

export function validateField(me:Block, name:string) {
  const input = me.element?.querySelector(`[name=${name}]`) as HTMLInputElement
  const regExpString = input.getAttribute('data-regexp')
  const regexp = regExpString ? new RegExp(regExpString) : null

  if (regexp?.test(input?.value)) {
    input.style.borderColor = 'green';
  } else {
    input.style.borderColor = 'red';
  }
  return regexp?.test(input?.value)
}

export function validateForm(me:Block) {
  const inputs = me.element?.querySelectorAll('input')
  let isValid = true

  inputs?.forEach((item) => {
    const regExpString = item.getAttribute('data-regexp')
    const regexp = regExpString ? new RegExp(regExpString) : null

    if (regexp?.test(item?.value)) {
      item.style.borderColor = 'green';
    } else {
      item.style.borderColor = 'red';
    }
    if (regexp?.test(item?.value) === false) isValid = false
  })
  return isValid
}
