<template>
  <form  @submit="onSubmit" class="m-4">

    <div class="field">
      <label class="label">E-mail</label>
      <div class="control">
        <input v-model="usuario.email" class="input" type="text" placeholder="e-mail">
      </div>
    </div>

    <div class="field">
      <label class="label">Senha</label>
      <div class="control">
        <input v-model="usuario.senha" class="input" type="password" placeholder="senha">
      </div>
    </div>

    <input type="submit" value="+ Adicionar" class="button is-info is-fullwidth mt-4 mb-4" />
  </form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: mapGetters(['usuario']),
  methods: {
    ...mapActions(['resetarSenha']),
    onSubmit(e) {
      e.preventDefault()
      this.resetarSenha(this.usuario)
    }
  }
}
</script>

<style>

</style>