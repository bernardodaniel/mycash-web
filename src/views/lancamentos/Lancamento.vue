<template>
  <div class="m-4 is-dark" :class="[lancamento.tipo == 'DESPESA' ? 'despesa' : 'receita', 'lancamento']">
      <h3>
          <a class="descricao" @click="selecionarLancamento(lancamento.id)">{{lancamento.descricao}}</a>
          <i class="fas fa-times"></i> 
        </h3>
      <p>{{ $filters.date(lancamento.data) }} - {{ $filters.currency(lancamento.valor) }}</p>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    props: {
        lancamento: Object
    },
    methods: {
      ...mapActions(['selecionaLancamento']),
      selecionarLancamento(id) {
        this.selecionaLancamento(id);
      }
    }

}
</script>

<style scoped>

.lancamento {
  margin: 5px;
  padding: 10px 20px;
  background: #f9f9f9;
}

.lancamento.receita {
  border-left: 5px solid green;
}

.lancamento.despesa {
  border-left: 5px solid red;
}

.lancamento h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.lancamento.descricao {
  cursor: pointer;
}

p {
    display: flex;
    align-items: left;
}
</style>