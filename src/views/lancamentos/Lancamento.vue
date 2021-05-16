<template>
  <div class="m-4 is-dark" :class="[lancamento.tipo == 'DESPESA' ? 'despesa' : 'receita', 'lancamento']">
      <h3>
          {{lancamento.descricao}}
          <i class="fas fa-times"></i> 
        </h3>
      <p>{{ $filters.date(lancamento.data) }} - {{ $filters.currency(lancamento.valor) }}</p>
  </div>
</template>

<script>
export default {
    props: {
        lancamento: Object
    }

}
</script>

<style scoped>

.lancamento {
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
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