import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import AtUI from 'at-ui';
import 'at-ui-style';
Vue.use(AtUI);

import VueGoodTablePlugin from 'vue-good-table';
import 'vue-good-table/dist/vue-good-table.css';
Vue.use(VueGoodTablePlugin);

import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
// import { fab } from '@fortawesome/free-brands-svg-icons';
config.autoAddCss = false;
library.add(fas);
Vue.component('FontAwesomeIcon', FontAwesomeIcon);
