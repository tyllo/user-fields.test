<template>
  <b-input
    :value="value"
    @input="$emit('input', $event)"
  />
</template>

<script>
export default {
  name: 'FormFieldInput',
  inheritAttrs: false,
  props: {
    value: String,
  },
};
</script>
