const mixin = {
  data() {
    return {
      vuexData: this.$store.state,
      vuexGetters: this.$store.getters,
    };
  },
};

export default mixin;
