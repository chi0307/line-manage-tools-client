<template>
  <b-modal :visible="status" @hidden="hidden()" :hide-footer="true">
    <template #modal-title>{{ title }}</template>
    <EditUser v-if="id === 'EditUser'" :options="options" />
    <DeleteUser v-if="id === 'DeleteUser'" :options="options" />
  </b-modal>
</template>

<script>
import mixin from '~/plugins/mixin.js';
import EditUser from '~/components/User/EditUser';
import DeleteUser from '~/components/User/DeleteUser';

export default {
  mixins: [mixin],
  components: {
    EditUser,
    DeleteUser,
  },
  computed: {
    status: function () {
      return this.vuexData.modal.status;
    },
    id: function () {
      return this.vuexData.modal.id;
    },
    options: function () {
      return this.vuexData.modal.options && Object.keys(this.vuexData.modal.options).length > 0
        ? this.vuexData.modal.options
        : undefined;
    },
    title: function () {
      return this.vuexData.modal.title || '';
    },
  },
  mounted() {
    this.$root.$on('bv::modal::show', (bvEvent, modalId) => {
      console.log('Modal is about to be shown', bvEvent, modalId);
    });
  },
  methods: {
    hidden() {
      this.$store.dispatch('modal/closeModal');
    },
  },
};
</script>

<style></style>
