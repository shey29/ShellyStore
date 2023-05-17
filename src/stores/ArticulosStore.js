import {defineStore} from 'pinia';

export const useArticulosStore = defineStore('articulosStore',{
    state: () => ({
        listaArticulos:[]

    }),
    getters:{
        getListaArticulos(state){
            return state.listaArticulos
            
        },
    }, 
    actions:{
        addItem(producto){            
            this.listaArticulos.push(producto)
            localStorage.setItem('listaArticulos', JSON.stringify(this.getListaArticulos))            
        },
        clearItem(){
            this.listaArticulos = []
        },
        //MantenerItem(){
            //localStorage.setItem ('product', JSON.stringify(this.getListaArticulos))
        //}
    }
})