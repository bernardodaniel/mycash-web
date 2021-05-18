<template>
  <form @submit.prevent="onSubmit" class="m-4">

    <div class="buttons is-right">
      <button @click.prevent="onNovo" class="button is-primary is-rounded">
        <i class="fas fa-plus"></i>
      </button>
    </div>

    <div class="field">
      <label class="label">Descrição</label>
      <div class="control">
        <input v-model="lancamento.descricao" required class="input" type="text" placeholder="Descrição">
      </div>
    </div>

    <div class="field">
      <label class="label">Valor R$</label>
      <div class="control">
        <input v-model="lancamento.valor" required class="input" type="number" step="0.01" placeholder="Valor R$">
      </div>
    </div>

    <div class="field">
      <label class="label">Data</label>
      <div class="control">
        <input v-model="lancamento.data" required class="input" type="date" placeholder="Data">
      </div>
    </div>

    <div class="field mb-5 mt-5">
      <div class="control">
        <label class="radio">
          <input v-model="lancamento.tipo" value="DESPESA" type="radio" name="tipo">
          Despesa
        </label>
        <label class="radio">
          <input v-model="lancamento.tipo" value="RECEITA" type="radio" name="tipo">
          Receita
        </label>
      </div>
    </div>

    <input type="submit" value="+ Adicionar" class="button is-info is-fullwidth mt-4 mb-4" />
  </form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    computed: {
      ...mapGetters(['lancamento'])
    },
    methods: {
      ...mapActions(['novoLancamento', 'criarLancamento', 'alterarLancamento']),
      onNovo() {
        this.novoLancamento()
      },
      onSubmit() {
        if (this.lancamento.id)
          this.alterarLancamento(this.lancamento)
        else 
          this.criarLancamento(this.lancamento)
        this.novoLancamento()
      }
    }
}
</script>

<style scoped>


</style>