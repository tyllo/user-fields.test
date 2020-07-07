<template>
  <b-field
    :label="label"
    :type="error ? 'is-danger' : type"
    :message="message"
  >
    <slot />
  </b-field>
</template>

<script>
export default {
  name: 'FormFieldLabel',
  inheritAttrs: false,
  props: {
    label: String,
    error: Boolean,
    type: String,
    message: String,
  },
};
</script>
