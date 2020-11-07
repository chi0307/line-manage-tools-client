<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <div class="card shadow-lg border-0 rounded-lg mt-5">
          <div class="card-header">
            <h2 class="text-center my-4">Login</h2>
          </div>
          <div class="card-body">
            <div id="warningMsg" class="alert alert-danger" role="alert" style="display: none"></div>
            <form id="loginForm">
              <div class="form-group">
                <label class="mb-1" for="username">帳號</label>
                <input class="form-control py-4" v-model="username" type="text" />
              </div>
              <div class="form-group">
                <label class="mb-1" for="password">密碼</label>
                <input class="form-control py-4" v-model="password" type="password" />
              </div>
              <div class="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                <input type="button" class="btn btn-primary m-auto" value="Login" @click="login()" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  created() {
    window.addEventListener('keyup', this.listener);
  },
  methods: {
    listener(evt) {
      if (evt.keyCode === 13) {
        this.login();
      }
    },
    login() {
      this.$store
        .dispatch('login', { username: this.username, password: this.password })
        .then((auth) => {
          this.$router.replace('/');
        })
        .catch((err) => {
          console.log('login -> err', err);
          if (err.status === 400) {
            console.log('帳號密碼錯誤，登入失敗！');
          }
        });
    },
  },
};
</script>

<style></style>
