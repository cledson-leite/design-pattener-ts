import { ShoppingCart } from "./ecommerce/ShoppingCart";

export interface IDiscountStrategy {
    getDiscount(cart: ShoppingCart): number
}