<template>
    <div>
        <h1 class="title">Productos en vitrina</h1>
        <h3 class="subtitle">Agregar productos al carrito</h3>

        <div class="card">
            <div class="card-image" >
                <figure >
                <img src="../assets/imagenes-indumentaria/zapatosverdes.jpg" alt="Placeholder image">
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                <div class="media-left">
    
                </div>
                <div class="media-content">
                    <p class="title is-4">John Smith</p>
                </div>
                </div>
                <div class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <button class="button is-primary" style="padding: 10px;" @click="addItem(producto)">Agregar</button>

            </div>
        </div>
        
        <div class="card">
                <div class="card-image">
                    <figure >
                    <img src="../assets/imagenes-indumentaria/conjuntogris.jpg" alt="Placeholder image">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                    <div class="media-left">
        
                    </div>
                    <div class="media-content">
                        <p class="title is-4">John Smith</p>
                    </div>
                    </div>

                    <div class="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                    <button class="button is-primary" style="padding: 10px;">Agregar</button>
                </div>
        </div>
            
        <div class="card">
                <div class="card-image">
                    <figure >
                    <img src="../assets/imagenes-indumentaria/zapatos-amarillos.jpg" alt="Placeholder image">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                    <div class="media-left">
        
                    </div>
                    <div class="media-content">
                        <p class="title is-4">John Smith</p>
                    </div>
                    </div>

                    <div class="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                    <button class="button is-primary" style="padding: 10px;">Agregar</button>
                </div>
        </div>
            
        <div class="card">
            <div class="card-image">
                <figure >
                <img src="../assets/imagenes-indumentaria/busoblanco.jpg" alt="Placeholder image">
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                <div class="media-left">
    
                </div>
                <div class="media-content">
                    <p class="title is-4">John Smith</p>
                </div>
                </div>

                <div class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <button class="button is-primary" style="padding: 10px;">Agregar</button>
            </div>
        </div>
            
        <div class="card">
            <div class="card-image">
                <figure >
                <img src="../assets/imagenes-indumentaria/busoblanco.jpg" alt="Placeholder image">
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                <div class="media-left">
    
                </div>
                <div class="media-content">
                    <p class="title is-4">John Smith</p>
                </div>
                </div>

                <div class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <button class="button is-primary" style="padding: 10px;">Agregar</button>
                </div>
        </div>
            
        <div class="card">
            <div class="card-image">
                <figure >
                <img src="../assets/imagenes-indumentaria/busoblanco.jpg" alt="Placeholder image">
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                <div class="media-left">
    
                </div>
                <div class="media-content">
                    <p class="title is-4">John Smith</p>
                </div>
                </div>

                <div class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <button class="button is-primary" style="padding: 10px;">Agregar</button>
            </div>
        </div>
            
        <div class="card">
            <div class="card-image">
                <figure >
                <img src="../assets/imagenes-indumentaria/busoblanco.jpg" alt="Placeholder image">
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                <div class="media-left">
    
                </div>
                <div class="media-content">
                    <p class="title is-4">John Smith</p>
                </div>
                </div>

                <div class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <button class="button is-primary" style="padding: 10px;">Agregar</button>
            </div>
        </div>
            
        <div class="card">
            <div class="card-image">
                <figure >
                <img src="../assets/imagenes-indumentaria/busoblanco.jpg" alt="Placeholder image">
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                <div class="media-left">
    
                </div>
                <div class="media-content">
                    <p class="title is-4">John Smith</p>
                </div>
                </div>

                <div class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <button class="button is-primary" style="padding: 10px;">Agregar</button>
            </div>

        </div>
            
        <div class="card">
            <div class="card-image">
                <figure >
                <img src="../assets/imagenes-indumentaria/busoblanco.jpg" alt="Placeholder image">
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                <div class="media-left">
    
                </div>
                <div class="media-content">
                    <p class="title is-4">John Smith</p>
                </div>
                </div>

                <div class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <button class="button is-primary" style="padding: 10px;" @click="addItem(producto)">Agregar</button>
            </div>
        </div>
    </div>
</template>
 
<script>

    import {useArticulosStore} from '@/stores/ArticulosStore.js'
    import {mapState, mapActions} from 'pinia'
    
    
    export default {
        computed:{
            ...mapState(useArticulosStore, ['getListaArticulos'])
        },
        methods: {
            ...mapActions(useArticulosStore, ['addItem']),
        }
    }
</script>

<style lang="scss" scoped>
    img{
        width: 300px;
        height: 200px;
    }
    .card {
        margin: 10px;
        width: 18rem;
        display: inline-block;
        
    }
    nav {
        display: flex;
    }

</style>