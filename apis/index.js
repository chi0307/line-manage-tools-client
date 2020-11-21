export default ($axios) => {
  return {
    login: ({ username, password }) => {
      return $axios.$post('/login', { username, password });
    },
    logout: () => {
      return $axios.$post('/logout');
    },
  };
};
