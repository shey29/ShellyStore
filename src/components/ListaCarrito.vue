<template>
  <div class="container">
    <h1 class="title">Productos Seleccionados</h1>
      <div class="card" v-for="producto in getListaArticulos" :key="producto.id">
      <div class="card-content">
      <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img :src="producto.main_image">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">{{ producto.name }}</p>
        <p class="subtitle is-6">@johnsmith</p>
      </div>
    </div>
    </div>
  </div>
</div>
</template>

<script>

    import {useArticulosStore} from '@/stores/ArticulosStore.js'
    import {mapState} from 'pinia'

    export default {
      computed:{
            ...mapState(useArticulosStore, ['getListaArticulos'])
        },
    }
</script>

<style lang="scss" scoped>

</style>