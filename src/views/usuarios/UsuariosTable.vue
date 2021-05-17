<template>
  <table class="table is-striped is-hoverable is-fullwidth m-4">
  <thead>
    <tr>
      <th>E-mail</th>
      <th>Ação</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="usuario in todosUsuarios" :key="usuario.id">
      <td>{{usuario.email}}</td>
      <td>
          <button class="button is-small is-light">
              <i class="fas fa-pen"></i>
          </button>
      </td>
    </tr>
  </tbody>
</table>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {

  computed: mapGetters(['todosUsuarios']),
  methods: {
    ...mapActions(['buscarUsuarios'])
  },
  mounted() {
    this.buscarUsuarios()
  }

}
</script>

<style>

</style>