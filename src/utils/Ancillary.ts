import Block from './Block';

export const fieldsRegExps = {
  login: '^(?!^d+$)[a-zA-Z0-9_-]{3,20}$',
  email: '^[a-zA-Z0-9_-]+@[a-zA-Z]+[.][a-zA-Z]+$',
  password: '^(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9]{8,40}$',
  firstSecondName: '^[А-ЯЁA-Z][А-ЯЁA-Zа-яёa-z]*(-[А-ЯЁA-Zа-яёa-z]+)*$',
  phone: '^\\+?\\d{10,15}$',
  notEmpty: '.+',
};

export const fieldsErrors = {
  login: 'От 3 до 20 символов, разрешены латиница, цифры, дефис и нижнее подчёркивание',
  email: 'Должен быть формат email',
  password: 'От 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра',
  phone: 'От 10 до 15 символов, состоит из цифр, может начинается с плюса',
  message: 'Сообщение не может быть пустым',
  firstSecondName: 'Латиница/кириллица, первая заглавная, без пробелов, цифр, спецсимволов',
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

export function validateChangePasswordForm(me:Block) {
  const inputs = me.element?.querySelectorAll('input');
  if (!inputs) return false;
  const regExpString = inputs[1].getAttribute('data-regexp');
  const regexp = regExpString ? new RegExp(regExpString) : null;

  if (inputs[1].value !== inputs[2].value) {
    inputs[1].style.borderColor = 'red';
    inputs[2].style.borderColor = 'red';
    (me.children.passwordErrorCmp as Block).setProps({ text: 'Старый и новый пароли должны совпадать' });
    return false;
  }

  if (!regexp?.test(inputs[1].value)) {
    inputs[1].style.borderColor = 'red';
    (me.children.passwordErrorCmp as Block).setProps({ text: fieldsErrors.password });
    return false;
  }

  return true;
}

export type Indexed<T = any> = {
  [key in string]: T;
};

export function merge(lhs: Indexed, rhs: Indexed): Indexed {
  for (const p in rhs) {
    if (!rhs.hasOwnProperty(p)) {
      continue;
    }

    try {
      if (rhs[p].constructor === Object) {
        rhs[p] = merge(lhs[p] as Indexed, rhs[p] as Indexed);
      } else {
        lhs[p] = rhs[p];
      }
    } catch (e) {
      lhs[p] = rhs[p];
    }
  }

  return lhs;
}

export function set(object: Indexed | unknown, path: string, value: unknown): Indexed | unknown {
  if (typeof object !== 'object' || object === null) {
    return object;
  }

  if (typeof path !== 'string') {
    throw new Error('path must be string');
  }

  const result = path.split('.').reduceRight<Indexed>((acc, key) => ({
    [key]: acc,
  }), value as any);

  return merge(object as Indexed, result);
}
