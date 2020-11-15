<template>
  <div class="d-block text-center">
    <at-input
      class="mb-3"
      v-model="username"
      size="large"
      :status="username ? 'success' : ''"
      :icon="username ? 'check-circle' : ''"
      :hidden="options.mode === 'update'"
    >
      <template slot="prepend">
        <span>帳號&emsp;&emsp;</span>
      </template>
    </at-input>
    <at-input
      class="mb-3"
      type="password"
      v-model="password"
      size="large"
      :status="password ? 'success' : ''"
      :icon="password ? 'check-circle' : ''"
    >
      <template slot="prepend">
        <span>密碼&emsp;&emsp;</span>
      </template>
    </at-input>
    <at-input
      class="mb-3"
      type="password"
      v-model="checkPassword"
      size="large"
      :status="checkPassword ? (password === checkPassword ? 'success' : 'error') : ''"
      :icon="checkPassword ? (password === checkPassword ? 'check-circle' : 'x-circle') : ''"
    >
      <template slot="prepend">
        <span>確認密碼</span>
      </template>
    </at-input>
    <at-button type="success" :disabled="!checkSubmit">送出</at-button>
  </div>
</template>

<script>
import mixin from '~/plugins/mixin.js';

export default {
  mixins: [mixin],
  props: {
    options: {
      type: Object,
      default: () => {
        return {
          mode: null,
          userId: null,
        };
      },
    },
  },
  data() {
    return {
      username: '',
      password: '',
      checkPassword: '',
    };
  },
  created() {
    console.log('options', this.options);
  },
  computed: {
    checkSubmit() {
      return (
        (this.options.mode === 'insert' && this.username && this.password && this.password === this.checkPassword) ||
        (this.options.mode === 'update' && this.options.userId && this.password && this.password === this.checkPassword)
      );
    },
  },
};
</script>

<style></style>
