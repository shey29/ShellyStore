<template>
    <div class="container">
        <h1 class="title">Productos en vitrina</h1>
        <h3 class="subtitle">Agregar productos al carrito</h3>

        <div class="columns is-multiline is mobile">
            <div class="column is-3" v-for="producto in productos" :key="producto.id">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-4by3">
                        <img :src="producto.main_image" alt="Placeholder image">
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                        <div class="media-content">
                            <p class="title is-4">{{ producto.name }}</p>
                            <p class="subtitle is-6" style="color: black;">{{ producto.price }} COP</p>
                        </div>
                        </div>
                        <button class="button is-primary" @click="addItem(producto)">Agregar</button>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
          is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
        </p>
      </div>
    </footer>
</template>
 
<script>

    import {useArticulosStore} from '@/stores/ArticulosStore.js'
    import {mapState, mapActions} from 'pinia'
    

    export default {
        data() {
            return {
                productos:[]
            }
        },
        computed:{
            ...mapState(useArticulosStore,['getListaArticulos'])
        },
        methods: {
            ...mapActions(useArticulosStore, ['addItem']),

            cargarProductos() {
                fetch("https://servicios.neunapp.com/api/tienda/productos/lista/")
                .then(
                    (response) => {
                        return response.json();
                    }
                )
                .then(
                    (data) => {
                        this.productos = data.results;
                    },
                )

            }
        },
        beforeMount() {
            this.cargarProductos();
        },  
    }
</script>

<style lang="scss" scoped>
</style>