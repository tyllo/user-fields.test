<script>
export default {
  name: 'ValidatorProvider',
  inject: {
    $ValidatorObserver: {
      default: null,
    },
  },
  props: {
    validator: {
      type: Function,
    },
    // TODO: $scopedSlot найти input и избавиться от прокидывания value
    value: null,
  },
  created() {
    // eslint-disable-next-line no-unused-expressions
    this.$ValidatorObserver?.addChildren(this);
  },
  beforeDestory() {
    // eslint-disable-next-line no-unused-expressions
    this.$ValidatorObserver?.RemoveChildren(this);
  },
  computed: {
    message() {
      const { validator, value } = this;
      return typeof validator === 'function' ? validator(value) : '';
    },
    error() {
      return !!this.message;
    },
    options() {
      return {
        $error: this.error,
        $message: this.message,
      };
    },
  },
  render() {
    return this.$scopedSlots.default(this.options);
  },
};
</script>
