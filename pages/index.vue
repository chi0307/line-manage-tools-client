<template>
  <div class="container"></div>
</template>

<script>
export default {
  created() {
    this.$router.replace({ path: '/user' });
  },
};
</script>
