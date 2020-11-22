export default ($axios) => {
  return {
    getUsers: () => {
      return $axios.$get('/users');
    },
    insertUser: (username, password) => {
      return $axios.$post('/user', { username, password });
    },
    patchUser: (userId, password) => {
      return $axios.$patch(`/user/${userId}`, { password });
    },
    deleteUser: (userId) => {
      return $axios.$delete(`/user/${userId}`);
    },
  };
};
