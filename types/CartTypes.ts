import { IProduct } from './ProductTypes'

export interface ICart extends IProduct {
    quantity: number
}