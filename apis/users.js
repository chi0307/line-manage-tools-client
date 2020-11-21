export default ($axios) => {
  return {
    getUsers: () => {
      return $axios.$get('/users');
    },
  };
};
