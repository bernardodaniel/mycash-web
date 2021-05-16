<template>
  <form class="m-4">

    <div class="field">
      <label class="label">Descrição</label>
      <div class="control">
        <input class="input" type="text" placeholder="Descrição">
      </div>
    </div>

    <div class="field">
      <label class="label">Valor R$</label>
      <div class="control">
        <input class="input" type="number" step="0.01" placeholder="Valor R$">
      </div>
    </div>

    <div class="field">
      <label class="label">Data</label>
      <div class="control">
        <input class="input" type="date" placeholder="Data">
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
export default {
}
</script>

<style scoped>


</style>