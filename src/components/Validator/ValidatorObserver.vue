<template>
  <div>
    <slot
      :$error="error"
    />
  </div>
</template>

<script>

export default {
  name: 'ValidatorObserver',
  provide() {
    return {
      $ValidatorObserver: {
        addChildren: this.addChildren,
        removeChildren: this.removeChildren,
      },
    };
  },
  data: () => ({
    children: [],
  }),
  computed: {
    error() {
      return this.children.some((_) => _.error);
    },
  },
  methods: {
    addChildren(data) {
      this.children.push(data);
    },
    removeChildren(data) {
      const index = this.children.indexOf(data);
      this.children.splice(index, 1);
    },
    isValid() {
      return new Promise((resolve) => {
        // TODO: нужен для того что бы дождаться резолва computed.error во всех children
        this.$nextTick(() => resolve(!this.error));
      });
    },
  },
};
</script>
