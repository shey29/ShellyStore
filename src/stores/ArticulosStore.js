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
        clearItem(producto){
            const index = this.listaArticulos.indexOf(producto)
            this.listaArticulos.splice(index, 1)

        },
        MantenerItem(){
            localStorage.setItem ('producto', JSON.stringify(this.getListaArticulos))
        }
    }
})