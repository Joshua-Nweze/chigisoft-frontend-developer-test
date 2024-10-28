import { defineStore } from "pinia";
import {IProduct} from "../types/ProductTypes"

interface ProductState {
  products: IProduct[]
}

export const useProductsStore = defineStore('product', {
  state: (): ProductState => ({
    products: []
  }),
    
    actions: {
      async getProducts() {
        let req = await fetch('https://fakestoreapi.com/products')
        let data = await req.json()

        this.products = data
      }
    },
  })