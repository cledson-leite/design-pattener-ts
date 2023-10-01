import { IDiscountStrategy } from "./IDiscountStrategy";
import { ShoppingCart } from "./ecommerce/ShoppingCart";

export class DiscountMin implements IDiscountStrategy {
    private discount = 0
    getDiscount(cart: ShoppingCart): number {
        const subTotal = cart.getSubTotal()
        if(subTotal >= 150){
            this.discount = subTotal *0.05
        }
        return subTotal - this.discount
    }
}