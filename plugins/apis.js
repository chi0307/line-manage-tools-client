const install = function (Vue) {
  Vue.prototype.$apis = {
    getUsers: function () {
      console.log('install -> this', this);
      return this.$axios.$get('/users');
    },
  };
};

export default { install };
