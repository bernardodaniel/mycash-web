<template>
      <div class="columns is-centered">
        <div class="column is-5-tablet is-4-desktop is-8-widescreen">
          <UsuarioForm />
          <UsuariosTable />
        </div>
      </div>
</template>

<script>
import UsuariosTable from './UsuariosTable'
import UsuarioForm from './UsuarioForm'

export default {
  components: {
    UsuariosTable, UsuarioForm
  }
}
</script>

<style>

</style>