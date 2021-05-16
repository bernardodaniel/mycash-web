<template>
  <Topo />
  <div class="container">
    <router-view/>
  </div>
</template>

<script>
import Topo from '@/components/Topo.vue'

export default {
  components: {
    Topo
  }
}
</script>


<style>



</style>
