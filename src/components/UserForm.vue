<template>
  <form name="user-form" class="user-form" @submit.prevent="onSubmit">
    <template v-for="(_, key) in form">
      <FormField
        v-model="form[key]"
        :key="key"
        :field="filedsMap[key]"
        :type="filedsMap[key].type"
        @input="onChange"
      />
    </template>
  </form>
</template>

<script>
import FormField from '@/components/FormField.vue';

export default {
  name: 'UserForm',
  model: {
    prop: 'data',
    event: 'change',
  },
  components: {
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
        acc[data.field] = data;
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
    onChange() {
      this.$emit('change', this.form);
    },
  },
};
</script>

<style lang="scss">

.user-form {
  width: 360px;
}
</style>
