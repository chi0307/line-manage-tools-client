<template>
  <div class="container">
    <Grid :cols="cols" :rows="users" style="width: auto"></Grid>
  </div>
</template>

<script>
import mixin from '~/plugins/mixin.js';

export default {
  layout: 'system',
  mixins: [mixin],
  created() {
    this.$store.dispatch('getUsers');
  },
  data() {
    return {
      cols: ['使用者', '最後更新時間'],
    };
  },
  computed: {
    users() {
      return this.vuexData.users.map((user) => {
        return [user.username, user.update_at];
      });
    },
  },
};
</script>
