import index from '../apis/index.js';
import users from '../apis/users.js';

export default ($axios) => {
  return {
    ...index($axios),
    ...users($axios),
  };
};
