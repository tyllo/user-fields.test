<template>
  <AppLayout id="app">
    <template #left>
      <h2 class="title">User form</h2>

      <UserForm
        v-model="userData"
        :fileds="userFields"
        @submit="onSubmit"
      />
    </template>

    <template #right>
      <h2 class="title">User data</h2>

      <pre
        style="width: 400px;"
        v-text="userData"
      />
    </template>
  </AppLayout>
</template>

<script>
import userData from '@/fixtures/userData.json';
import userFields from '@/fixtures/userFields.json';
import AppLayout from '@/components/AppLayout.vue';
import UserForm from '@/components/UserForm.vue';

export default {
  name: 'App',
  components: {
    AppLayout,
    UserForm,
  },
  data: () => ({
    userData: userData.data,
    userFields: userFields.data,
  }),
  methods: {
    onSubmit(form) {
      const data = JSON.stringify(form);
      // eslint-disable-next-line no-alert
      alert(data);
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
