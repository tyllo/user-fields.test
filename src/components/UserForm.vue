<template>
  <ValidatorObserver ref="validator">
    <form name="user-form" class="user-form" @submit.prevent="onSubmit">
      <template v-for="(value, key) in form">
        <ValidatorProvider
          :key="key"
          :validator="filedsMap[key].validator"
          :value="value"
          :name="filedsMap[key].field"
          #default="{ $error, $message }"
        >
          <FormField
            v-model="form[key]"
            :key="key"
            :error="$error"
            :message="$message"
            :field="filedsMap[key]"
            @input="onChange"
          />
        </ValidatorProvider>
      </template>

      <button type="submit" style="visibility: hidden;" />
    </form>
  </ValidatorObserver>
</template>

<script>
import * as validators from '@/helpers/validators';
import ValidatorObserver from '@/components/Validator/ValidatorObserver.vue';
import ValidatorProvider from '@/components/Validator/ValidatorProvider.vue';
import FormField from '@/components/FormField.vue';

const VALIDATORS_LIST = Object.values(validators);

export default {
  name: 'UserForm',
  model: {
    prop: 'data',
    event: 'change',
  },
  components: {
    ValidatorObserver,
    ValidatorProvider,
    FormField,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
    fileds: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    form: {},
  }),
  watch: {
    data: {
      immediate: true,
      handler: 'onReset',
    },
  },
  computed: {
    filedsMap() {
      return this.fileds.reduce((acc, data) => {
        const validator = (
          VALIDATORS_LIST.find(({ id }) => id === data.validator)
          || acc.validator
        );

        acc[data.field] = { ...data, validator };
        return acc;
      }, {});
    },
  },
  methods: {
    onReset() {
      const { data } = this;
      const from = JSON.parse(JSON.stringify(data));
      this.form = from;
    },
    async onChange() {
      const { validator } = this.$refs;
      const isValide = await validator.isValid();

      if (isValide) {
        this.$emit('change', this.form);
      }
    },
    async onSubmit() {
      const { validator } = this.$refs;
      const isValide = await validator.isValid();

      if (isValide) {
        this.$emit('submit', this.form);
      }
    },
  },
};
</script>

<style lang="scss">

.user-form {
  width: 360px;
}
</style>
