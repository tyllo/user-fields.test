/* eslint no-param-reassign: 0 */

const createValidatorFn = (options) => {
  const { id, handler } = options;
  const fn = handler.bind(options);
  fn.id = id;
  return fn;
};

export const nameValidator = createValidatorFn({
  id: 'nameValidator',
  handler(value) {
    if (!value) return this.messages.empty;
    if (!/^[a-zа-я\s]+$/i.test(value)) return this.messages.chars;
    return '';
  },
  messages: {
    empty: 'Поле не должно быть пустым',
    chars: 'Поле должно содержать только буквы',
  },
});

export const genderValidator = createValidatorFn({
  id: 'genderValidator',
  values: ['male', 'female'],
  handler(value) {
    const isValid = this.values.includes(value);
    return isValid ? '' : this.messages.oneOf(this.values);
  },
  messages: {
    oneOf(values) {
      return `Поле должно содержать одно из значений [${values.join(', ')}]`;
    },
  },
});

export const dateValidator = createValidatorFn({
  id: 'dateValidator',
  handler(value) {
    if (!value) return '';
    const date = new Date(value);
    const isValid = date.toString() !== 'Invalid Date';
    return isValid ? '' : this.messages.invalidDate;
  },
  messages: {
    invalidDate: 'Поле должно быть валидной датой',
  },
});
