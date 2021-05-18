<template>
  <div class="m-4 is-dark" :class="[lancamento.tipo == 'DESPESA' ? 'despesa' : 'receita', 'lancamento']">
      <h3>
          <a class="has-text-dark" 
            @click="selecionarLancamento(lancamento.id)">
            <strong>{{lancamento.descricao}}</strong>
          </a>
          <a class="icon icon-text" @click="excluirLancamento(lancamento.id)">
            <i class="fas fa-times"></i> 
          </a>
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
      ...mapActions(['selecionaLancamento', 'excluirLancamento']),
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

p {
    display: flex;
    align-items: left;
}
</style>