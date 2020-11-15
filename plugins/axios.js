export default function ({ $axios, redirect }) {
  $axios.onRequest((config) => {
    console.log('Making request to ' + config.url);
  });

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status);
    if (code === 401) {
      localStorage.removeItem('auth');
      $axios.setToken(false);
      redirect('/login');
    } else {
      console.error(error.response);
    }
    return Promise.reject(error.response);
  });
}
