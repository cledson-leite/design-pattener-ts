import { BaseBadgetHandle } from "./BaseBadgetHandle";
import { CustomerBadget } from "./CustomerBadget";

export class SellerBadgetHandle extends BaseBadgetHandle {
    handle(badget: CustomerBadget): CustomerBadget {
        if(badget.total <= 1000) {
            console.log('Vendedor tratou esse orçamento')
            badget.approve = true
            return badget
        }
        return super.handle(badget)
    }
}