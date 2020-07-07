<template>
  <Validator
    :label="field.label"
    :field="field.field"
    :validator="field.validator"
  >
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
  </Validator>
</template>

<script>
import Validator from '@/components/Validator.vue';

export default {
  name: 'FormFieldSelect',
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
