<template>
  <form class="m-4">

    <div class="field">
      <label class="label">Descrição</label>
      <div class="control">
        <input v-model="lancamento.descricao" class="input" type="text" placeholder="Descrição">
      </div>
    </div>

    <div class="field">
      <label class="label">Valor R$</label>
      <div class="control">
        <input v-model="lancamento.valor" class="input" type="number" step="0.01" placeholder="Valor R$">
      </div>
    </div>

    <div class="field">
      <label class="label">Data</label>
      <div class="control">
        <input v-model="lancamento.data" class="input" type="date" placeholder="Data">
      </div>
    </div>

    <div class="field mb-5 mt-5">
      <div class="control">
        <label class="radio">
          <input type="radio" name="tipo" checked>
          Despesa
        </label>
        <label class="radio">
          <input type="radio" name="tipo">
          Receita
        </label>
      </div>
    </div>

    <input type="submit" value="+ Adicionar" class="button is-info is-fullwidth mt-4 mb-4" />
  </form>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
      ...mapGetters(['lancamento'])
    },
}
</script>

<style scoped>


</style>