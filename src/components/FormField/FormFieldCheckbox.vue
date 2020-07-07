<template>
  <b-checkbox
    :value="value"
    @input="$emit('input', $event)"
  />
</template>

<script>
export default {
  name: 'FormFieldCheckbox',
  inheritAttrs: false,
  props: {
    value: Boolean,
  },
};
</script>
