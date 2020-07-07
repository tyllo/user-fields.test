<script>
import FormFieldInput from './FormField/FormFieldInput.vue';
import FormFieldSelect from './FormField/FormFieldSelect.vue';
import FormFieldDate from './FormField/FormFieldDate.vue';

export const TYPES = {
  STRING: 'string',
  SELECT: 'select',
  DATE: 'date',
};

const getComopnent = ({ type }) => {
  switch (type) {
    case TYPES.STRING:
      return FormFieldInput;

    case TYPES.SELECT:
      return FormFieldSelect;

    case TYPES.DATE:
      return FormFieldDate;

    default:
      // TODO: код алерта том что появился неподдерживаемый тип
      // TODO: здесь какой-нибудь компонент по умолчанию, пока пусть будет FormFieldInput
      return FormFieldInput;
  }
};

export default {
  name: 'FormField',
  functional: true,
  props: {
    type: {
      type: String,
      required: true,
      validator: (prop) => Object.values(TYPES).includes(prop),
    },
  },
  render: (h, context) => h(
    getComopnent(context.props),
    context.data,
    context.children,
  ),
};
</script>
