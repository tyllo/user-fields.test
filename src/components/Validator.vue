<template>
  <b-field
    :label="label"
    :type="type"
    :message="message"
  >
    <slot />
   </b-field>
</template>

<script>

export default {
  name: 'Validator',
  props: {
    label: {
      type: String,
      required: true,
    },
    field: {
      type: String,
      required: true,
    },
    validator: {
      type: String,
    },
  },
  data: () => ({
    message: '',
    type: null,
  }),
};
</script>
