import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => ({
    products: [
      {
        id: 1,
        name: 'Arroz',
        description: 'Canasta familiar',
        price: 100
      },
      {
        id: 2,
        name: 'Miel',
        description: 'Comida del campo',
        price: 200
      },
      {
        id: 3,
        name: 'Yogur',
        description: 'Lacteos',
        price: 300
      },
      {
        id: 4,
        name: 'Yuca',
        description: 'El campo',
        price: 800
      },
      {
        id: 5,
        name: 'Carne',
        description: 'El campo ganado',
        price: 150
      },
      {
        id: 6,
        name: 'Pollo',
        description: 'El campo ',
        price: 250
      },
      {
        id: 7,
        name: 'Manzana',
        description: 'El campo',
        price: 550
      },
      {
        id: 8,
        name: 'Frijol',
        description: 'El campo',
        price: 50
      }
    ],
    product:[],
    cart: []
  }),

  getters: {
    getProductById: (state) => (productId) => {
      return state.products.find((product) => product.id === productId)
    },
    total() {
      return this.cart.reduce((acc, product) => acc + product.price, 0)
    }
  },

  actions: {
    addToCart(product) {
      this.cart.push(product);
    },
    removeFromCart(product) {
      const index = this.cart.indexOf(product)
      this.cart.splice(index, 1)
    }
  }
})
