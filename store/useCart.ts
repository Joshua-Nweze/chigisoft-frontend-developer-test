import { defineStore } from "pinia";
import { ICart } from "../types/CartTypes";

interface ProductState {
    cart: ICart[];
    cartTotal: number
}

export const useCartStore = defineStore("cart", {
    state: (): ProductState => ({
        cart: [],
        cartTotal: 0
    }),

    actions: {
        addToCart(product: ICart) {
            let obj = {
                ...product,
                quantity: 1
            }
            this.cart.push(obj);
        },

        increaseQuantity(index: number) {
            this.cart[index].quantity++;
        },
        
        decreaseQuantity(index: number) {
            if (this.cart[index].quantity > 1) {
                this.cart[index].quantity-=1;
            }

        },

        removeFromCart(index: number) {
            this.cart.splice(index, 1);
        },
    },

    getters: {
        totalCartPrice(state) {
            return state.cart.reduce((total, product) => total + product.price * product.quantity, 0);
        },

        totalCartProducts(state){
            return state.cart.reduce((total, product) => total + product.quantity, 0)
        }
    }
});
