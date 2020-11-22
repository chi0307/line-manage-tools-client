<template>
  <div class="container">
    <div slot="table-actions" class="p-2 text-right">
      <at-button type="primary" @click="insertUser()">新增</at-button>
    </div>
    <vue-good-table :columns="columns" :rows="users" :fixed-header="true">
      <template slot="table-row" slot-scope="props">
        <span v-if="props.column.field == 'actions'">
          <at-button type="primary" @click="updateUser(props.row)">編輯</at-button>
          <at-button type="error" @click="deleteUser(props.row)" v-if="vuexData.auth.loginUser !== props.row.username">
            刪除
          </at-button>
        </span>
        <span v-else>
          {{ props.formattedRow[props.column.field] }}
        </span>
      </template>
    </vue-good-table>
  </div>
</template>

<script>
import mixin from '~/plugins/mixin.js';

export default {
  layout: 'system',
  mixins: [mixin],
  created() {
    this.$store.dispatch('users/getUsers');
  },
  data() {
    return {
      columns: [
        {
          label: '使用者',
          field: 'username',
        },
        {
          label: '最後更新時間',
          field: 'updated_at',
        },
        {
          label: '',
          field: 'actions',
          width: '200px',
          sortable: false,
          tdClass: 'text-center',
        },
      ],
      currentUser: null,
      mode: null,
    };
  },
  computed: {
    users() {
      return this.vuexData.users.users;
    },
  },
  methods: {
    insertUser() {
      this.$store.dispatch('modal/openModal', {
        id: 'EditUser',
        title: '新增帳號',
        options: {
          mode: 'insert',
        },
      });
    },
    updateUser(user) {
      this.$store.dispatch('modal/openModal', {
        id: 'EditUser',
        title: '編輯帳號',
        options: {
          mode: 'update',
          username: user.username,
          userId: user.id,
        },
      });
    },
    deleteUser(user) {
      console.log('del');
      this.$store.dispatch('modal/openModal', {
        id: 'DeleteUser',
        title: '刪除帳號',
        options: {
          username: user.username,
          userId: user.id,
        },
      });
    },
  },
};
</script>
