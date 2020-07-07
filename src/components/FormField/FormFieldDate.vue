<template>
  <b-datepicker
    :value="model"
    icon="calendar-today"
    @input="$emit('input', $event)"
  />
</template>

<script>
export default {
  name: 'FormFieldDate',
  inheritAttrs: false,
  props: {
    value: String,
  },
  computed: {
    model() {
      const { value } = this;
      return value && new Date(value);
    },
  },
};
</script>
