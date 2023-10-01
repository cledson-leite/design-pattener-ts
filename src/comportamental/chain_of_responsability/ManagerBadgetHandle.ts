import { BaseBadgetHandle } from "./BaseBadgetHandle";
import { CustomerBadget } from "./CustomerBadget";

export class ManagerBadgetHandle extends BaseBadgetHandle {
    handle(badget: CustomerBadget): CustomerBadget {
        if(badget.total <= 5000) {
            console.log('Gerente tratou esse orçamento')
            badget.approve = true
            return badget
        }
        return super.handle(badget)
    }
}