import { IDiscountStrategy } from "./IDiscountStrategy";
import { ShoppingCart } from "./ecommerce/ShoppingCart";

export class DiscountDefault implements IDiscountStrategy {
    private discount = 0
    getDiscount(cart: ShoppingCart): number {
        const subTotal = cart.getSubTotal()
        if(subTotal >= 100 && subTotal < 200){
            this.discount = subTotal *0.1
        }
        if(subTotal >= 200 && subTotal < 300){
             this.discount = subTotal *0.2
        }
        if(subTotal >= 300) {
            this.discount = subTotal *0.3
        }
        return subTotal - this.discount
    }
}