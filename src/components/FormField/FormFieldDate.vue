<template>
  <Validator
    :label="field.label"
    :field="field.field"
    :validator="field.validator"
  >
    <b-datepicker
      :value="model"
      @input="$emit('input', $event)"
    />
  </Validator>
</template>

<script>
import Validator from '@/components/Validator.vue';

export default {
  name: 'FormFieldDate',
  components: {
    Validator,
  },
  inheritAttrs: false,
  props: {
    value: String,
    field: {
      type: Object,
      reuired: true,
    },
  },
  computed: {
    model() {
      const { value } = this;
      return value && new Date(value);
    },
  },
};
</script>
