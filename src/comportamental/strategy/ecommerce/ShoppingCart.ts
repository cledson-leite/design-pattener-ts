import { DiscountDefault } from "../DiscountDefault";
import { IDiscountStrategy } from "../IDiscountStrategy";
import { Product } from "./Product";

export class ShoppingCart {
    private _products: Product[] = []
    private _discountStrategy: IDiscountStrategy = new DiscountDefault()

    addProduct(...products: Product[]): void {
        products.forEach(product => this._products.push(product))
    }

    set discountStrategy(strategy: IDiscountStrategy) {
        this._discountStrategy = strategy
    }

    get products(): Product[] {
        return this._products
    }

    getSubTotal(): number {
        return this._products.reduce(
            (sum, product) => sum + product.price, 0
        )
    }

    getTotal(): number {
        return this._discountStrategy.getDiscount(this)
    }
}