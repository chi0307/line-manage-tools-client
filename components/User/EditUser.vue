<template>
  <div class="d-block text-center">
    <at-input
      class="mb-3"
      v-model="username"
      size="large"
      :status="username ? 'success' : ''"
      :icon="username ? 'check-circle' : ''"
      :disabled="options.mode === 'update'"
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
    <at-button type="success" :disabled="!checkSubmit" @click="submit()">送出</at-button>
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
          username: null,
          userId: null,
        };
      },
    },
  },
  created() {
    if (this.options.mode === 'update') {
      this.username = this.options.username;
    }
  },
  data() {
    return {
      username: '',
      password: '',
      checkPassword: '',
    };
  },
  computed: {
    checkSubmit() {
      return (
        (this.options.mode === 'insert' && this.username && this.password && this.password === this.checkPassword) ||
        (this.options.mode === 'update' && this.options.userId && this.password && this.password === this.checkPassword)
      );
    },
  },
  methods: {
    submit() {
      if (this.checkSubmit) {
        let username = this.username;
        let password = this.password;
        let userId = this.options.userId;
        if (this.options.mode === 'insert') {
          this.$store
            .dispatch('users/insertUser', { username, password })
            .then((result) => {
              this.notify({ type: 'success', title: '新增資料成功！！' });
              this.$store.dispatch('modal/closeModal');
            })
            .catch((err) => {
              this.notify({ type: 'error', title: '新增資料失敗！！' });
            });
        } else {
          this.$store
            .dispatch('users/patchUser', { userId, password })
            .then((result) => {
              this.notify({ type: 'success', title: '更新資料成功！！' });
              this.$store.dispatch('modal/closeModal');
            })
            .catch((err) => {
              this.notify({ type: 'error', title: '更新資料失敗！！' });
            });
        }
      }
    },
  },
};
</script>

<style></style>
