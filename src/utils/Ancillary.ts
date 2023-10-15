import Block from './Block';

export const fieldsRegExps = {
  login: '^(?!^d+$)[a-zA-Z0-9_-]{3,20}$',
  email: '^[a-zA-Z0-9_-]+@[a-zA-Z]+[.][a-zA-Z]+$',
  password: '^(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,40}$',
  firstSecondName: '^[А-ЯЁA-Z][А-ЯЁA-Zа-яёa-z]*(-[А-ЯЁA-Zа-яёa-z]+)*$',
  phone: '^\\+?\\d{10,15}$',
  notEmpty: '.+',
};
export function getInputValues(me: Block) {
  const result: Record<string, string> = {};
  const inputs = me.element?.querySelectorAll('input');
  inputs?.forEach((item) => {
    result[item.name] = item.value;
  });
  return result;
}

export function validateField(me:Block, name:string) {
  const input = me.element?.querySelector(`[name=${name}]`) as HTMLInputElement;
  const regExpString = input.getAttribute('data-regexp');
  const regexp = regExpString ? new RegExp(regExpString) : null;

  if (regexp?.test(input?.value)) {
    input.style.borderColor = 'green';
  } else {
    input.style.borderColor = 'red';
  }
  return regexp?.test(input?.value);
}

export function validateForm(me:Block) {
  const inputs = me.element?.querySelectorAll('input');
  let isValid = true;

  inputs?.forEach((item) => {
    const regExpString = item.getAttribute('data-regexp');
    const regexp = regExpString ? new RegExp(regExpString) : null;

    if (regexp?.test(item?.value)) {
      item.style.borderColor = 'green';
    } else {
      item.style.borderColor = 'red';
    }
    if (regexp?.test(item?.value) === false) isValid = false;
  });
  return isValid;
}
