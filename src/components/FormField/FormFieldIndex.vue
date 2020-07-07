<script>
import FormFieldCheckbox from './FormFieldCheckbox.vue';
import FormFieldDate from './FormFieldDate.vue';
import FormFieldInput from './FormFieldInput.vue';
import FormFieldSelect from './FormFieldSelect.vue';

export const TYPES = {
  CHECKBOX: 'checkbox',
  STRING: 'string',
  SELECT: 'select',
  DATE: 'date',
};

const getFormComponent = (type) => {
  switch (type) {
    case TYPES.STRING:
      return FormFieldInput;

    case TYPES.SELECT:
      return FormFieldSelect;

    case TYPES.DATE:
      return FormFieldDate;

    case TYPES.CHECKBOX:
      return FormFieldCheckbox;

    default:
      // TODO: код алерта том что появился неподдерживаемый тип
      // eslint-disable-next-line no-console
      console.warn(`[App warn]: компонент <FormFieldIndex /> не поддерживает тип "${type}"`);
      // TODO: здесь какой-нибудь компонент по умолчанию, пока пусть будет FormFieldInput
      return FormFieldInput;
  }
};

export default {
  name: 'FormFieldIndex',
  functional: true,
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  render: (h, context) => h(
    getFormComponent(context.props.type),
    context.data,
    context.children,
  ),
};
</script>
