<template>
  <b-select
    :value="value"
    expanded
    @input="$emit('input', $event)"
  >
    <option
      v-for="item in field.meta.values"
      :key="item.label"
      :value="item.value"
      v-text="item.label"
    />
  </b-select>
</template>

<script>
export default {
  name: 'FormFieldSelect',
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
