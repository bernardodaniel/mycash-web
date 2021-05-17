<template>

  <LancamentoForm />
  
  <Lancamento 
    v-for="lancamento in todosLancamentos" 
    :key="lancamento.id"
    :lancamento="lancamento"/>
    
</template>

<script>
import Lancamento from './Lancamento'
import LancamentoForm from './LancamentoForm'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    Lancamento, LancamentoForm
  },
  computed: {
    ...mapGetters(['todosLancamentos'])
  },
  methods: {
    ...mapActions(['buscarLancamentos'])
  },
  mounted() {
    this.buscarLancamentos()
  }
}
</script>

<style>

</style>