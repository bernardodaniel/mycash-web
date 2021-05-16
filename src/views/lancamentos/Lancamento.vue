<template>
  <div :class="[lancamento.tipo == 'DESPESA' ? 'despesa' : 'receita', 'lancamento']">
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
}

.lancamento.receita {
  border-left: 5px solid green;
  background: #d6ffd9;
}

.lancamento.despesa {
  border-left: 5px solid red;
  background: #fff3f3;
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