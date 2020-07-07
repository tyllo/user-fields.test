<template>
  <Validator
    :label="field.label"
    :field="field.field"
    :validator="field.validator"
  >
    <b-input
      :value="value"
      @input="$emit('input', $event)"
    />
  </Validator>
</template>

<script>
import Validator from '@/components/Validator.vue';

export default {
  name: 'FormFieldInput',
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
};
</script>
