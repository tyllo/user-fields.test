<template>
  <div>
    <slot
      :$error="error"
      :$message="message"
    />
  </div>
</template>

<script>
export default {
  name: 'ValidatorProvider',
  inject: ['$ValidatorObserver'],
  props: {
    validator: {
      type: Function,
    },
    // TODO: $scopedSlot найти input и избавиться от прокидывания value
    value: null,
  },
  created() {
    this.$ValidatorObserver.addChildren(this);
  },
  beforeDestory() {
    this.$ValidatorObserver.RemoveChildren(this);
  },
  computed: {
    message() {
      const { validator, value } = this;
      return typeof validator === 'function' ? validator(value) : '';
    },
    error() {
      return !!this.message;
    },
  },
};
</script>
