<template>
  <div class="d-block text-center">
    <p class="mb-3">請問是否確定要刪除使用者「 {{ options.username }} 」？？</p>
    <at-button type="error" @click="deleteUser()">確認刪除</at-button>
    <at-button type="primary" @click="cancel()">取消</at-button>
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
          userId: null,
          username: null,
        };
      },
    },
  },
  methods: {
    deleteUser() {
      let userId = this.options.userId;
      this.$store
        .dispatch('users/deleteUser', { userId })
        .then((result) => {
          this.notify({ type: 'success', title: '刪除資料成功！！' });
          this.$store.dispatch('modal/closeModal');
        })
        .catch((err) => {
          this.notify({ type: 'error', title: '刪除資料失敗！！' });
        });
    },
    cancel() {
      this.$store.dispatch('modal/closeModal');
    },
  },
};
</script>

<style></style>
