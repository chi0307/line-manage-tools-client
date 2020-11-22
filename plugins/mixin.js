const mixin = {
  data() {
    return {
      vuexData: this.$store.state,
      vuexGetters: this.$store.getters,
    };
  },
  methods: {
    notify({ type, title, message, duration = 2000, showClose = false }) {
      this.$Notify({ type, title, message, duration, showClose });
    },
  },
};

export default mixin;
