<template>

  <LancamentoForm />
  
  <Lancamento 
    v-for="lancamento in lancamentos" 
    :key="lancamento.id"
    :lancamento="lancamento"/>
    
</template>

<script>
import Lancamento from './Lancamento'
import LancamentoForm from './LancamentoForm'

export default {
  components: {
    Lancamento, LancamentoForm
  },
  data() {
    return {
      lancamentos: [
        {
          "id": 3,
          "descricao": "Livro",
          "data": "2021-05-12",
          "valor": 29.9,
          "tipo": "DESPESA"
        },
        {
          "id": 4,
          "descricao": "Venda Liquidificador",
          "data": "2021-05-12",
          "valor": 50.00,
          "tipo": "RECEITA"
        },
      ]
    }
  }
}
</script>

<style>

</style>