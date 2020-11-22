import Vue from 'vue';
import apis from './apis.js';

export default function ({ $axios, redirect, store }) {
  Vue.prototype.apis = apis($axios);
  $axios.apis = apis($axios);

  $axios.onRequest((config) => {
    console.log('Making request to ' + config.url);
  });

  $axios.onError((error) => {
    if (error.response) {
      const code = parseInt(error.response && error.response.status);
      const url = error.response.config.url;
      switch (code) {
        case 401:
          if (url !== '/logout') {
            store.dispatch('auth/logout').then((result) => {
              redirect('/login');
            });
          } else {
            redirect('/login');
          }
          break;
        default:
          console.error(error.response);
      }
      return Promise.reject(error.response);
    } else {
      console.error(error);
    }
  });
}
