<template>
  <form class="formulario">
    <div class="form-control">
      <input type="text" v-model="text" name="text" placeholder="Descrição" />
    </div>
    <div class="form-control">
      <input
        type="number"
        step="0.01"
        v-model="day"
        name="day"
        placeholder="Valor R$"
      />
    </div>
    <div class="form-control">
      <input
        type="date"
        v-model="day"
        name="date"
        placeholder="Data"
      />
    </div>

    <div class="radio">
        <label>
            <input type="radio" name="tipo" checked>Despesa
        </label>
        <label>
            <input type="radio" name="tipo">Receita
        </label>
    </div>

    <input type="submit" value="Save Task" class="btn btn-block" />
  </form>
</template>

<script>
export default {
}
</script>

<style scoped>

.formulario {
  margin-bottom: 40px;
}

.form-control {
  margin: 20px 0;
}

.form-control label {
  display: block;
}

.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
  align-items: left;
}

.radio {
  margin-bottom: 20px;
  font-size: 17px;
}

.btn {
  display: inline-block;
  background: green;
  color: #fff;
  border: none;
  padding: 10px 10px;
  margin: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 17px;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}

.btn-block {
  display: block;
  width: 100%;
}

</style>