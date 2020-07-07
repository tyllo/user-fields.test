<template>
  <form-field-label
    :label="field.label"
    :error="error"
    :message="message"
  >
    <FormFieldIndex
      :value="value"
      :type="field.type"
      :field="field"
      v-on="$listeners"
    />
  </form-field-label>
</template>

<script>
import FormFieldLabel from './FormField/FormFieldLabel.vue';
import FormFieldIndex from './FormField/FormFieldIndex.vue';

export default {
  name: 'FormField',
  components: {
    FormFieldLabel,
    FormFieldIndex,
  },
  props: {
    value: null,
    error: Boolean,
    message: String,
    field: {
      type: Object,
      required: true,
    },
  },
};
</script>
