<template>
  <div>
    <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
      <div class="btn btn-link btn-sm order-1 order-lg-0 ml-2" id="sidebarToggle">
        <FontAwesomeIcon :icon="['fas', 'bars']" :style="{ color: 'white' }" />
      </div>
      <a class="navbar-brand">Line@ 管理</a>

      <form class="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0"></form>
      <ul class="navbar-nav ml-auto ml-md-0">
        <b-dropdown class="dropdown" right variant="dark">
          <b-dropdown-item id="logout" @click="logout()">Logout</b-dropdown-item>
        </b-dropdown>
      </ul>
    </nav>
    <div class="row at-row no-gutter w-100">
      <at-menu router class="float-left col-4">
        <at-menu-item :to="{ name: 'user' }">帳號管理</at-menu-item>
        <at-menu-item :to="{ name: 'user' }">Rich Menu 管理</at-menu-item>
        <at-menu-item :to="{ name: 'user' }">推播管理</at-menu-item>
      </at-menu>
      <div class="float-left col-20">
        <Nuxt class="m-4" />
      </div>
    </div>
    <Modal />
  </div>
</template>

<script>
import mixin from '~/plugins/mixin.js';
import Modal from '~/components/Modal';

export default {
  name: 'system',
  mixins: [mixin],
  components: {
    Modal,
  },
  methods: {
    logout() {
      this.$store
        .dispatch('auth/logout')
        .then((result) => {
          this.notify({ title: '登出成功！！' });
          this.$router.replace('/login');
        })
        .catch((err) => {
          this.notify({ title: '登出失敗！！' });
        });
    },
  },
};
</script>

<style></style>
